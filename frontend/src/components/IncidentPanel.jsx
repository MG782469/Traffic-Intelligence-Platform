import { useState } from "react";

function IncidentPanel() {
  const [status, setStatus] = useState("Pending Dispatch");

  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "16px",
        padding: "24px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ margin: 0 }}>
          Dispatch Console
        </h2>

        <span
          style={{
            background:
              status === "Resolved"
                ? "#DCFCE7"
                : status === "Dispatched"
                ? "#DBEAFE"
                : "#FEE2E2",
            color:
              status === "Resolved"
                ? "#166534"
                : status === "Dispatched"
                ? "#1D4ED8"
                : "#B91C1C",
            padding: "6px 14px",
            borderRadius: "20px",
            fontWeight: 600,
          }}
        >
          {status}
        </span>
      </div>

      {/* ML + Operations */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}
      >
        <Card title="Road Closure Probability" value="84%" />
        <Card title="Nearest Police Station" value="Cubbon Park Traffic PS" />

        <Card title="Recommended Officers" value="20" />
        <Card title="Barricades Required" value="10" />

        <Card title="Assigned Officer ID" value="FKUSR00005" />
        <Card title="Affected Corridor" value="Freedom Park Corridor" />
      </div>

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "24px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setStatus("Officer Notified")}
          style={btn("#DC2626")}
        >
          Notify Officer
        </button>

        <button
          onClick={() => setStatus("Dispatched")}
          style={btn("#2563EB")}
        >
          Dispatch Team
        </button>

        <button
          onClick={() => setStatus("Resolved")}
          style={btn("#16A34A")}
        >
          Mark Resolved
        </button>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        background: "#F8FAFC",
        border: "1px solid #E2E8F0",
        borderRadius: "10px",
        padding: "14px",
      }}
    >
      <div
        style={{
          color: "#64748B",
          fontSize: "12px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: "6px",
          fontWeight: "700",
          fontSize: "20px",
          color: "#0F172A",
        }}
      >
        {value}
      </div>
    </div>
  );
}

const btn = (bg) => ({
  background: bg,
  color: "#FFFFFF",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 600,
});

export default IncidentPanel;