import sqlite3

conn = sqlite3.connect(
    "incidents.db",
    check_same_thread=False
)
print("DATABASE LOADED")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS incidents (

    incident_id TEXT PRIMARY KEY,

    event_type TEXT,
    event_cause TEXT,

    priority TEXT,
    zone TEXT,
    corridor TEXT,

    vehicle_type TEXT,

    latitude REAL,
    longitude REAL,

    start_time TEXT,

    junction TEXT,

    closure_probability REAL,

    risk_level TEXT,

    deployment_priority TEXT,

    recommended_officers TEXT,

    barricades INTEGER,

    nearest_police_station TEXT,

    estimated_distance REAL,

    suggested_response TEXT,

    assigned_officer TEXT,

    dispatch_status TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

)
""")

conn.commit()
import uuid

def save_incident(data, result):

    incident_id = f"INC-{uuid.uuid4().hex[:8].upper()}"

    cursor.execute("""
    INSERT INTO incidents (

        incident_id,
        event_type,
        event_cause,
        priority,
        zone,
        corridor,
        vehicle_type,
        latitude,
        longitude,
        start_time,
        junction,
        closure_probability,
        risk_level,
        deployment_priority,
        recommended_officers,
        barricades,
        nearest_police_station,
        estimated_distance,
        suggested_response,
        assigned_officer,
        dispatch_status

    )

    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    """, (

        incident_id,

        data.event_type,
        data.event_cause,

        data.priority,
        data.zone,
        data.corridor,

        data.veh_type,

        data.latitude,
        data.longitude,

        data.start_time,

        data.junction,

        result["closure_probability"],

        result["risk_level"],

        result["deployment_priority"],

        result["recommended_officers"],

        result["barricades"],

        result["nearest_police_station"],

        result["distance_km"],

        result["response_time"],

        result["assigned_officer"],

        result["dispatch_status"]

    ))

    conn.commit()

    return incident_id