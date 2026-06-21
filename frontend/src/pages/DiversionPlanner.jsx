import { useState } from "react";
import TravelRecommendationCard from "../components/TravelRecommendationCard";

function RoutePlanner() {
  const [showResult, setShowResult] = useState(false);

  const [form, setForm] = useState({
    from: "",
    to: "",
    vehicle: "Car",
    departure: "Now",
  });

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #CBD5E1",
    borderRadius: "10px",
    fontSize: "15px",
    marginTop: "6px",
    boxSizing: "border-box",
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      style={{
        padding: "24px",
        background: "#F8FAFC",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "18px",
          padding: "28px",
          border: "1px solid #E2E8F0",
          marginBottom: "24px",
        }}
      >
        <h1 style={{ margin: 0 }}>
          🗺️ Smart Route Planner
        </h1>

        <p
          style={{
            marginTop: "8px",
            color: "#64748B",
          }}
        >
          Avoid congestion using ML-powered event intelligence and receive the
          safest recommended route.
        </p>
      </div>

      {/* Planner Form */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "18px",
          padding: "24px",
          border: "1px solid #E2E8F0",
        }}
      >
        <h2 style={{ marginTop: 0 }}>
          Journey Details
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "20px",
          }}
        >
          <div>
            <label>Starting Location</label>
            <input
              name="from"
              placeholder="e.g. Whitefield"
              style={inputStyle}
              value={form.from}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Destination</label>
            <input
              name="to"
              placeholder="e.g. MG Road"
              style={inputStyle}
              value={form.to}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Vehicle Type</label>
            <select
              name="vehicle"
              style={inputStyle}
              value={form.vehicle}
              onChange={handleChange}
            >
              <option>Car</option>
              <option>Bike</option>
              <option>Bus</option>
              <option>Taxi</option>
              <option>Emergency Vehicle</option>
            </select>
          </div>

          <div>
            <label>Departure Time</label>
            <select
              name="departure"
              style={inputStyle}
              value={form.departure}
              onChange={handleChange}
            >
              <option>Now</option>
              <option>Within 30 Minutes</option>
              <option>Within 1 Hour</option>
              <option>Later Today</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => setShowResult(true)}
          style={{
            marginTop: "24px",
            background: "#2563EB",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "10px",
            padding: "14px 30px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          🧠 Generate Smart Route
        </button>
      </div>

      {/* Results */}
      {showResult && (
        <>
          {/* Success Banner */}
          <div
            style={{
              marginTop: "24px",
              background: "#DCFCE7",
              border: "1px solid #86EFAC",
              color: "#166534",
              padding: "16px",
              borderRadius: "12px",
              fontWeight: "600",
            }}
          >
            ✅ Route successfully generated using predicted event impact and
            traffic intelligence.
          </div>

          <TravelRecommendationCard />
        </>
      )}
    </div>
  );
}

export default RoutePlanner;