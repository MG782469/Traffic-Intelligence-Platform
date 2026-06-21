function PendingDispatchQueue({ incidents }) {
  const color = (priority) => {
    if (priority === "High") return "#DC2626";
    if (priority === "Medium") return "#EA580C";
    return "#16A34A";
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "20px",
        border: "1px solid #E2E8F0",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Pending Dispatch</h2>

      {incidents.length === 0 ? (
        <p style={{ color: "#64748B" }}>
          No pending incidents found.
        </p>
      ) : (
        incidents.map((item) => (
          <div
            key={item.incident_id}
            style={{
              padding: "16px",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <strong>{item.incident_id}</strong>

              <span
                style={{
                  background: color(item.priority),
                  color: "#fff",
                  borderRadius: "20px",
                  padding: "3px 10px",
                  fontSize: "12px",
                }}
              >
                {item.priority}
              </span>
            </div>

            <div style={{ marginTop: "8px" }}>
              {item.event_cause}
            </div>

            <button
              style={{
                marginTop: "12px",
                width: "100%",
                background: "#2563EB",
                color: "#fff",
                border: "none",
                padding: "10px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Open
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default PendingDispatchQueue;