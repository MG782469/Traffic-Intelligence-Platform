import events from "../data/events";

export default function CriticalAttentionQueue() {
  const alerts = [...events]
    .sort((a, b) => {
      const pa =
        a.closure_probability > 1
          ? a.closure_probability
          : a.closure_probability * 100;

      const pb =
        b.closure_probability > 1
          ? b.closure_probability
          : b.closure_probability * 100;

      return pb - pa;
    })
    .slice(0, 4);

  return (
    <div
      style={{
        background: "#0F172A",
        color: "#FFFFFF",
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid #1E293B",
        boxShadow: "0 10px 25px rgba(15,23,42,0.25)",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "18px 20px",
          borderBottom: "1px solid #1E293B",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          🚨 Active Alerts
        </div>

        <div
          style={{
            marginTop: 4,
            color: "#94A3B8",
            fontSize: "14px",
          }}
        >
          Requires operator attention
        </div>
      </div>

      {/* Alert List */}
      <div style={{ padding: "8px 18px 16px" }}>
        {alerts.map((event, index) => {
          const risk =
            event.closure_probability > 1
              ? Math.round(event.closure_probability)
              : Math.round(event.closure_probability * 100);

          const dot =
            risk >= 80
              ? "#EF4444"
              : risk >= 60
              ? "#F59E0B"
              : "#FACC15";

          return (
            <div
              key={event.id}
              style={{
                display: "flex",
                gap: 12,
                padding: "18px 0",
                borderBottom:
                  index !== alerts.length - 1
                    ? "1px solid #1E293B"
                    : "none",
              }}
            >
              {/* Dot */}
              <div
                style={{
                  width: 10,
                  height: 10,
                  marginTop: 8,
                  borderRadius: "50%",
                  background: dot,
                  flexShrink: 0,
                }}
              />

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: 1.3,
                    }}
                  >
                    {event.event_type}
                    <br />
                    {event.junction}
                  </div>

                  <div
                    style={{
                      color: "#94A3B8",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    {event.start_time || "Now"}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 10,
                    color: "#CBD5E1",
                    fontSize: "14px",
                  }}
                >
                  {risk}% closure risk
                </div>

                <div
                  style={{
                    marginTop: 4,
                    color: "#94A3B8",
                    fontSize: "13px",
                    lineHeight: 1.5,
                  }}
                >
                  {risk >= 80
                    ? "Immediate review recommended."
                    : risk >= 60
                    ? "Enhanced monitoring recommended."
                    : "Routine monitoring recommended."}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}