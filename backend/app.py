from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from schemas import PredictRequest
from predictor import predict_event
from database import conn
from database import save_incident

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
def predict(data: PredictRequest):

    result = predict_event(data)
    incident_id = save_incident(data,result)
    result["incident_id"] = incident_id
    return result

from database import cursor

@app.get("/incidents")
def get_incidents():

    cursor.execute(
        "SELECT * FROM incidents"
    )

    return cursor.fetchall()

@app.get("/api/events")
def get_events():

    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            start_time,
            event_cause,
            zone,
            corridor,
            priority,
            closure_probability
        FROM incidents
        WHERE event_type = 'planned'
        ORDER BY created_at DESC
    """)

    rows = cursor.fetchall()

    events = []

    for row in rows:
        events.append({
            "date": row[0],
            "event_cause": row[1],
            "zone": row[2],
            "corridor": row[3],
            "priority": row[4],
            "closure_probability": row[5]
        })

    return events

@app.get("/api/dashboard")
def dashboard():

    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            incident_id,
            event_type,
            event_cause,
            priority,
            zone,
            corridor,
            closure_probability,
            risk_level
        FROM incidents
    """)

    rows = cursor.fetchall()

    return [
        {
            "incident_id": r[0],
            "event_type": r[1],
            "event_cause": r[2],
            "priority": r[3],
            "zone": r[4],
            "corridor": r[5],
            "closure_probability": r[6],
            "risk_level": r[7]
        }
        for r in rows
    ]
    
@app.get("/api/control-room")
def control_room():

    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            incident_id,
            event_type,
            event_cause,
            priority,
            zone,
            corridor,
            closure_probability,
            risk_level,
            dispatch_status,
            assigned_officer,
            created_at
        FROM incidents
        ORDER BY created_at DESC
    """)

    rows = cursor.fetchall()

    return [
        {
            "incident_id": r[0],
            "event_type": r[1],
            "event_cause": r[2],
            "priority": r[3],
            "zone": r[4],
            "corridor": r[5],
            "closure_probability": r[6],
            "risk_level": r[7],
            "dispatch_status": r[8],
            "assigned_officer": r[9],
            "created_at": str(r[10])
        }
        for r in rows
    ]    