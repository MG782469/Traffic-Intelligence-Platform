from pydantic import BaseModel

class PredictRequest(BaseModel):
    event_type: str
    event_cause: str
    priority: str
    zone: str
    corridor: str
    veh_type: str
    start_time: str
    latitude: float
    longitude: float
    junction: str
    description: str
    