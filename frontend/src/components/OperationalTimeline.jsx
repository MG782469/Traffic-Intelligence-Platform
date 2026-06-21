import { useState } from "react";

function OperationalTimeline() {
  const [logs, setLogs] = useState([
    {
      time: "09:12",
      action: "ML model predicted 84% road closure probability.",
    },
    {
      time: "09:13",
      action: "Incident forwarded to Police Control Room.",
    },
  ]);

  const addLog = (message) => {
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setLogs([
      {
        time: now,
        action: message,
      },
      ...logs,
    ]);
  };

  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "16px",
        padding: "24px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ margin: 0 }}>
          Operational Activity Log
        </h2>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={buttonStyle("#2563EB")}
            onClick={() =>
              addLog("Nearest police station notified.")
            }
          >
            Notify
          </button>

          <button
            style={buttonStyle("#EA580C")}
            onClick={() =>
              addLog("Field response team dispatched.")
            }
          >
            Dispatch
          </button>

          <button
            style={buttonStyle("#16A34A")}
            onClick={() =>
              addLog("Incident marked as resolved by field officer.")
            }
          >
            Resolve
          </button>
        </div>
      </div>

      {logs.map((log, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "16px",
            padding: "14px 0",
            borderBottom:
              index !== logs.length - 1
                ? "1px solid #F1F5F9"
                : "none",
          }}
        >
          <div
            style={{
              minWidth: "70px",
              fontWeight: "700",
              color: "#2563EB",
            }}
          >
            {log.time}
          </div>

          <div
            style={{
              color: "#334155",
            }}
          >
            {log.action}
          </div>
        </div>
      ))}
    </div>
  );
}

function buttonStyle(background) {
  return {
    background,
    color: "#FFFFFF",
    border: "none",
    borderRadius: "8px",
    padding: "8px 14px",
    cursor: "pointer",
    fontWeight: 600,
  };
}

export default OperationalTimeline;