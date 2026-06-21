import { useState } from "react";

function IncidentActions({
  incidentId = `INC-${Date.now()}`,
  officer = "FKUSR00005",
}) {
  const [status, setStatus] = useState("Pending");

  const actionButton = (label, color, onClick) => (
    <button
      onClick={onClick}
      style={{
        background: color,
        color: "#FFFFFF",
        border: "none",
        borderRadius: "8px",
        padding: "10px 18px",
        cursor: "pointer",
        fontWeight: "600",
      }}
    >
      {label}
    </button>
  );

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        border: "1px solid #E2E8F0",
        padding: "24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          color: "#0F172A",
        }}
      >
        Smart Dispatch & Incident Actions
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginTop: "20px",
          marginBottom: "24px",
        }}
      >
        <Info title="Incident ID" value={incidentId} />
        <Info title="Assigned Officer" value={officer} />
        <Info title="Dispatch Status" value={status} />
        <Info title="Priority Queue" value="Auto Assigned" />
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {actionButton(
          "Notify Officer",
          "#2563EB",
          () => {
            setStatus("Notification Sent");
            alert("Officer notification sent successfully.");
          }
        )}

        {actionButton(
          "Send to Control Room",
          "#EA580C",
          () => {
            setStatus("Forwarded");
            alert("Incident forwarded to Control Room.");
          }
        )}

        {actionButton(
          "Assign Officer",
          "#059669",
          () => {
            setStatus("Officer Assigned");
            alert("Officer assigned successfully.");
          }
        )}

        {actionButton(
          "Generate QR",
          "#7C3AED",
          () => {
            alert(
              `Incident QR will be generated for:\n${incidentId}`
            );
          }
        )}
      </div>

      <div
        style={{
          marginTop: "24px",
          padding: "14px",
          background: "#EFF6FF",
          borderRadius: "10px",
          border: "1px solid #BFDBFE",
          color: "#1E40AF",
          fontSize: "14px",
        }}
      >
        <strong>Workflow:</strong> Prediction → Area Triaging →
        Officer Assignment → Notification → Field Response →
        Control Room Monitoring.
      </div>
    </div>
  );
}

function Info({ title, value }) {
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
          color: "#0F172A",
          fontWeight: "700",
          fontSize: "18px",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default IncidentActions;