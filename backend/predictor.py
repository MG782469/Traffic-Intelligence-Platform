import joblib
import pandas as pd
import numpy as np
from station_mapper import get_nearest_police_station

# Load artifacts
xgb = joblib.load("xgb_model.pkl")
cat = joblib.load("cat_model.pkl")
meta = joblib.load("meta_model.pkl")
kmeans = joblib.load("kmeans.pkl")
threshold = joblib.load("best_threshold.pkl")
features = joblib.load("features.pkl")
encoders = joblib.load("encoders1.pkl")
risk_lookup = joblib.load("risk_lookup_new.pkl")

vehicle_risk_map = {
    "motor_cycle": 1,
    "car": 2,
    "taxi": 2,
    "bus": 4,
    "truck": 5,
    "heavy_vehicle": 6
}

print("\nEVENT_CAUSE LOOKUP SAMPLE")
print(list(risk_lookup["event_cause"].items())[:10])

print("\nCORRIDOR LOOKUP SAMPLE")
print(list(risk_lookup["corridor"].items())[:10])

print("\nJUNCTION LOOKUP SAMPLE")
print(list(risk_lookup["junction"].items())[:10])

print("\nPOLICE STATION LOOKUP SAMPLE")
print(list(risk_lookup["police_station"].items())[:10])

def safe_encode(encoder, value):
    value = str(value)

    if value in encoder.classes_:
        return encoder.transform([value])[0]

    print(f"WARNING: Unknown Value -> {value}")
    return 0

def predict_event(data):
    
    print(features)
    
    print("FULL REQUEST:")
    print(data.model_dump())
    
    # nearest police station
    police_station, distance_km = get_nearest_police_station(
    data.latitude,
    data.longitude
)

    # datetime features
    dt = pd.to_datetime(data.start_time)

    hour = dt.hour
    day_of_week = dt.dayofweek
    month = dt.month

    is_weekend = int(day_of_week >= 5)

    hour_sin = np.sin(2 * np.pi * hour / 24.0)
    hour_cos = np.cos(2 * np.pi * hour / 24.0)

    vehicle_risk = vehicle_risk_map.get(
        str(data.veh_type).lower(),
        3
    )

    urgency_map = {
        "Low": 1,
        "Medium": 2,
        "High": 3
    }

    urgency_score = (
        urgency_map.get(data.priority, 1)
        * vehicle_risk
    )
    
    event_cause_encoded = encoders["event_cause"].transform([data.event_cause])[0]
    event_cause_risk = risk_lookup["event_cause"].get(event_cause_encoded,0.5)

    corridor_encoded = encoders["corridor"].transform([data.corridor])[0]
    corridor_risk = risk_lookup["corridor"].get(corridor_encoded,0.5)

    junction_encoded = encoders["junction"].transform([data.junction])[0]
    junction_risk = risk_lookup["junction"].get(junction_encoded,0.5)

    police_station_encoded = encoders["police_station"].transform([police_station])[0]
    police_station_risk = risk_lookup["police_station"].get(police_station_encoded,0.5)

    congestion_potential = (
        vehicle_risk * corridor_risk
    )

    coords = pd.DataFrame(
    [[data.latitude, data.longitude]],
    columns=["latitude", "longitude"]
)
    geo_cluster = int(
        kmeans.predict(coords)[0]
    )
    # Encode categorical features
    event_type_encoded = safe_encode(encoders["event_type"],data.event_type)
    event_cause_encoded = safe_encode(encoders["event_cause"],data.event_cause)
    veh_type_encoded = safe_encode(encoders["veh_type"],data.veh_type)
    corridor_encoded = safe_encode(encoders["corridor"],data.corridor)
    priority_encoded = safe_encode(encoders["priority"],data.priority)
    zone_encoded = safe_encode(encoders["zone"],data.zone)
    junction_encoded = safe_encode(encoders["junction"],data.junction)
    police_station_encoded = safe_encode(encoders["police_station"],police_station)
    # Temporary (later hotspot distance calculate karenge)
    dist_to_hotspot = 0
    has_emergency_keywords = int(
        any(
            x in str(data.description).lower()
            for x in ["accident","fire","blocked","fallen","injury"]
            )
        )
    X = pd.DataFrame([{"event_type": event_type_encoded,"event_cause": event_cause_encoded,"veh_type": veh_type_encoded,"corridor": corridor_encoded,"priority": priority_encoded,
    "police_station": police_station_encoded,"zone": zone_encoded,"junction": junction_encoded,"latitude": data.latitude,"longitude": data.longitude,"hour": hour,"day_of_week": day_of_week,
    "month": month,"is_weekend": is_weekend,"hour_sin": hour_sin,"hour_cos": hour_cos,"vehicle_risk": vehicle_risk,"event_cause_risk": event_cause_risk,"corridor_risk": corridor_risk,
    "junction_risk": junction_risk,"police_station_risk": police_station_risk,"congestion_potential": congestion_potential,"has_emergency_keywords": has_emergency_keywords,"urgency_score": urgency_score,
    "geo_cluster": geo_cluster,"dist_to_hotspot": dist_to_hotspot
    }])
    print(X)
    xgb_prob = xgb.predict_proba(X)[:, 1][0]
    cat_prob = cat.predict_proba(X)[:, 1][0]
    stack_input = np.column_stack([[xgb_prob],[cat_prob]])
    final_prob = meta.predict_proba(stack_input)[:, 1][0]
    print("FINAL PROB:", final_prob)
    
    if distance_km < 2:
        response_time = "< 10 min"
    elif distance_km < 5:
        response_time = "10-15 min"
    elif distance_km < 10:
        response_time = "15-20 min"
    else:
        response_time = "20+ min"
        
        
    print(encoders["veh_type"].classes_)
    
    
    
        
    print("Event Type:", data.event_type)
    print("Event Cause:", data.event_cause)
    print("Vehicle:", data.veh_type)
    print("Priority:", data.priority)
    print("Zone:", data.zone)
    print("Corridor:", data.corridor)
    print("Junction:", data.junction)
    print("Police Station:", police_station)
    
    closure_probability = round(final_prob * 100,2)
    
    if closure_probability >= 80:
        risk_level = "Critical"
    elif closure_probability >= 60:
        risk_level = "High"
    elif closure_probability >= 40:
        risk_level = "Medium"
    else:
        risk_level = "Low"
        
    if risk_level == "Critical":
        deployment_priority = "Immediate"
    elif risk_level == "High":
        deployment_priority = "Urgent"
    else:
        deployment_priority = "Standard"
        
    if closure_probability >= 80:
        barricades = 10
    elif closure_probability >= 60:
        barricades = 6
    elif closure_probability >= 40:
        barricades = 3
    else:
        barricades = 0
        
    assigned_officer = "FKUSR00005"
    recommended_officers = ("FKUSR00005, FKUSR00008, FKUSR00012")
    dispatch_status = "Assigned"
    print("Event Cause Risk:", event_cause_risk)
    print("Corridor Risk:", corridor_risk)
    print("Junction Risk:", junction_risk)
    print("Police Station Risk:", police_station_risk)
    
    return {
    "nearest_police_station": police_station,
    "zone": data.zone,
    "distance_km": distance_km,
    "response_time": response_time,
    "closure_probability": closure_probability,
    "risk_level": risk_level,
    "deployment_priority": deployment_priority,
    "recommended_officers": recommended_officers,
    "barricades": barricades,
    "assigned_officer": assigned_officer,
    "dispatch_status": dispatch_status,
    "geo_cluster": geo_cluster,
    "event_cause_risk": float(event_cause_risk),
    "corridor_risk": float(corridor_risk),
    "junction_risk": float(junction_risk),
    "police_station_risk": float(police_station_risk)
    }
    