import { useState } from "react";
import PredictionSummaryCard from "../components/PredictionSummaryCard";
import PoliceStationCard from "../components/PoliceStationCard";
import IncidentActions from "../components/IncidentActions";

function PredictEvent() {
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);

  // Step 1: Form state initialized
  const [formData, setFormData] = useState({
    event_type: "",
    event_cause: "",
    priority: "",
    zone: "",
    corridor: "",
    veh_type: "",
    latitude: "",
    longitude: "",
    start_time: "",
    junction: "",
    description: "",
  });

  const [predictionData, setPredictionData] = useState(null);

  // Step 2: Handle generic input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Step 4 & 3: Parse data and trigger FastAPI post request
  const handlePredict = async () => {
    setLoading(true);
    
    // Convert string inputs to proper floating numbers for Pydantic/FastAPI
    const payload = {
      ...formData,
      latitude: formData.latitude ? Number(formData.latitude) : 0,
      longitude: formData.longitude ? Number(formData.longitude) : 0,
    };

    try {
      const response = await fetch("https://traffic-intelligence-platform-lt94.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Server responded with an error status.");
      }

      const data = await response.json();
      console.log("Backend Response Data:", data);

      setPredictionData(data);
      setResult(true);
    } catch (err) {
      console.error("Fetch API Error:", err);
      alert("Backend connected safely nhi mila. Make sure server is up and running.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid #CBD5E1",
    borderRadius: "8px",
    marginTop: "6px",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        background: "#F1F5F9",
        minHeight: "100vh",
        padding: "24px",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg,#1D4ED8,#2563EB)",
          color: "white",
          borderRadius: "18px",
          padding: "28px",
          marginBottom: "24px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "30px" }}>Event Impact Prediction</h1>
        <p style={{ marginTop: "8px", opacity: 0.9 }}>
          ML-powered road closure prediction and operational planning.
        </p>
      </div>

      {/* Input Form */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "16px",
          padding: "24px",
          border: "1px solid #E2E8F0",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "20px" }}>Event Details</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
          }}
        >
          <div>
            <label>Event Type</label>
            <select
              name="event_type"
              value={formData.event_type}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">-- Select Event Type --</option>
              <option value="unplanned">Unplanned Event</option>
              <option value="planned">Planned Event</option>
            </select>
          </div>

          <div>
            <label>Event Cause</label>
            <select
              name="event_cause"
              value={formData.event_cause}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">-- Select Event Cause --</option>
              <option value="vehicle_breakdown">Vehicle Breakdown</option>
              <option value="pot_holes">Pot Holes</option>
              <option value="construction">Construction</option>
              <option value="water_logging">Water Logging</option>
              <option value="accident">Accident</option>
              <option value="tree_fall">Tree Fall</option>
              <option value="road_conditions">Road Conditions</option>
              <option value="congestion">Congestion</option>
              <option value="public_event">Public Event</option>
              <option value="procession">Procession</option>
              <option value="vip_movement">VIP Movement</option>
              <option value="protest">Protest</option>
              <option value="Debris">Debris</option>
              <option value="Fog / Low Visibility">Fog / Low Visibility</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label>Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">-- Select Priority --</option>
              <option value="Low">Low</option>
              <option value="High">High</option>
            </select>
          </div>

          <div>
            <label>Zone</label>
            <select
              name="zone"
              value={formData.zone}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">-- Select Zone --</option>
              <option value="Central Zone 1">Central Zone 1</option>
              <option value="Central Zone 2">Central Zone 2</option>
              <option value="North Zone 1">North Zone 1</option>
              <option value="North Zone 2">North Zone 2</option>
              <option value="South Zone 1">South Zone 1</option>
              <option value="South Zone 2">South Zone 2</option>
              <option value="West Zone 1">West Zone 1</option>
              <option value="West Zone 2">West Zone 2</option>
              <option value="East Zone 1">East Zone 1</option>
              <option value="East Zone 2">East Zone 2</option>
            </select>
          </div>

          <div>
            <label>Corridor</label>
            <select
              name="corridor"
              value={formData.corridor}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">-- Select Corridor --</option>
              <option value="Non-corridor">Non-corridor</option>
              <option value="Mysore Road">Mysore Road</option>
              <option value="Bellary Road 1">Bellary Road 1</option>
              <option value="Bellary Road 2">Bellary Road 2</option>
              <option value="Tumkur Road">Tumkur Road</option>
              <option value="Hosur Road">Hosur Road</option>
              <option value="ORR North 1">ORR North 1</option>
              <option value="ORR North 2">ORR North 2</option>
              <option value="ORR East 1">ORR East 1</option>
              <option value="ORR East 2">ORR East 2</option>
              <option value="ORR West 1">ORR West 1</option>
              <option value="Old Madras Road">Old Madras Road</option>
              <option value="Magadi Road">Magadi Road</option>
              <option value="Bannerghata Road">Bannerghata Road</option>
              <option value="CBD 1">CBD 1</option>
              <option value="CBD 2">CBD 2</option>
            </select>
          </div>

          <div>
            <label>Vehicle Type</label>
            <select
              name="veh_type"
              value={formData.veh_type}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">-- Select Vehicle Type --</option>
<option value="bmtc_bus">BMTC Bus</option>
<option value="heavy_vehicle">Heavy Vehicle</option>
<option value="lcv">LCV</option>
<option value="private_bus">Private Bus</option>
<option value="private_car">Private Car</option>
<option value="truck">Truck</option>
<option value="ksrtc_bus">KSRTC Bus</option>
<option value="taxi">Taxi</option>
<option value="auto">Auto</option>
<option value="others">Others</option>
            </select>
          </div>

          <div>
            <label>Latitude</label>
            <input
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
              style={inputStyle}
              placeholder="12.9716"
            />
          </div>

          <div>
            <label>Longitude</label>
            <input
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
              style={inputStyle}
              placeholder="77.5946"
            />
          </div>

          <div>
            <label>Start Time</label>
            <input
              type="datetime-local"
              name="start_time"
              value={formData.start_time}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div>
            <label>Description</label>
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Optional description"
            />
          </div>

          <div>
  <label>Junction</label>

  <select
    name="junction"
    value={formData.junction}
    onChange={handleChange}
    style={inputStyle}
  >
    <option value="">-- Select Junction --</option>

    <option value="UrvashiJunction">UrvashiJunction</option>
    <option value="LalbaghMainGateJunc">LalbaghMainGateJunc</option>
    <option value="QueensStatueCircle">QueensStatueCircle</option>
    <option value="HebbalFlyoverJunc">HebbalFlyoverJunc</option>
    <option value="SilkBoardJunc">SilkBoardJunc</option>
    <option value="TrinityCircle">TrinityCircle</option>
    <option value="SirsiCircle">SirsiCircle</option>
    <option value="K R Circle">K R Circle</option>
    <option value="YelhankaCircle">YelhankaCircle</option>
    <option value="ModiBridgeJunction">ModiBridgeJunction</option>
    <option value="MekhriCircle">MekhriCircle</option>
    <option value="KatriguppeJunction">KatriguppeJunction</option>
    <option value="JayadevaHospitalJunc">JayadevaHospitalJunc</option>
    <option value="Minerva Circle">Minerva Circle</option>
    <option value="TownhallJunction">TownhallJunction</option>
    <option value="Arbindo Circle">Arbindo Circle</option>
    <option value="BilekahalliJunc">BilekahalliJunc</option>
    <option value="Bommanahalli">Bommanahalli</option>
    <option value="BanashankariBusStandJunc">BanashankariBusStandJunc</option>
    <option value="UlsoorGateJunc">UlsoorGateJunc</option>
  </select>
</div>
        </div>

        <button
          onClick={handlePredict}
          disabled={loading}
          style={{
            marginTop: "24px",
            background: loading ? "#93C5FD" : "#2563EB",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "8px",
            padding: "12px 28px",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "600",
          }}
        >
          {loading ? "Predicting..." : "Predict Impact"}
        </button>
      </div>

      {/* Prediction Result */}
      {result && (
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <PredictionSummaryCard
probability={predictionData?.closure_probability ?? 0}
/>

          <PoliceStationCard
  station={predictionData?.nearest_police_station}
  zone={predictionData?.zone}
  distance={`${predictionData?.distance_km} km`}
  responseTime={predictionData?.response_time}
/>

          <IncidentActions
            incidentId={`INC-${Date.now()}`}
            officer="FKUSR00005"
          />
        </div>
      )}
    </div>
  );
}

export default PredictEvent;