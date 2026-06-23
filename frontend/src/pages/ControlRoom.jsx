import PendingDispatchQueue from "../components/PendingDispatchQueue";
import IncidentPanel from "../components/IncidentPanel";
import OperationalTimeline from "../components/OperationalTimeline";
import { useEffect, useState } from "react";

function ControlRoom() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {

    fetch("https://traffic-intelligence-platform-1.onrender.com/api/control-room")
      .then((res) => res.json())
      .then((data) => {
        setIncidents(data);
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);
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
          border: "1px solid #E2E8F0",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "24px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "32px",
            color: "#0F172A",
          }}
        >
          Police Control Room
        </h1>

        <p
          style={{
            marginTop: "8px",
            color: "#64748B",
          }}
        >
          Manage ML-generated incidents, dispatch field units, and monitor operational response.
        </p>
      </div>

      {/* Main Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <PendingDispatchQueue incidents={incidents} />

        <IncidentPanel incidents={incidents} />
      </div>

      {/* Timeline */}
      <OperationalTimeline incidents={incidents} />
    </div>
  );
}

export default ControlRoom;