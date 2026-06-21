import events from "../data/events";

export default function PostEventInsights() {
  const eventMap = {};

  events.forEach((event) => {
    const type = event.event_type || "Unknown";

    const risk =
      event.closure_probability > 1
        ? event.closure_probability
        : event.closure_probability * 100;

    if (!eventMap[type]) {
      eventMap[type] = {
        total: 0,
        highRisk: 0,
      };
    }

    eventMap[type].total++;

    if (risk >= 70) {
      eventMap[type].highRisk++;
    }
  });

  const insights = Object.entries(eventMap)
    .map(([type, data]) => ({
      type,
      total: data.total,
      highRisk: data.highRisk,
      rate: Math.round((data.highRisk / data.total) * 100),
    }))
    .sort((a, b) => b.rate - a.rate)
    .slice(0, 5);

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 18,
        padding: 20,
        border: "1px solid #E2E8F0",
        boxShadow: "0 8px 20px rgba(15,23,42,0.05)",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: 18,
          color: "#0F172A",
        }}
      >
        📊 Post-Event Insights
      </h3>

      {insights.map((item, index) => (
        <div
          key={item.type}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 0",
            borderBottom:
              index !== insights.length - 1
                ? "1px solid #F1F5F9"
                : "none",
          }}
        >
          <div>
            <div
              style={{
                fontWeight: 600,
                color: "#0F172A",
              }}
            >
              {item.type}
            </div>

            <div
              style={{
                fontSize: 13,
                color: "#64748B",
              }}
            >
              {item.highRisk} high-risk events out of {item.total}
            </div>
          </div>

          <div
            style={{
              padding: "6px 12px",
              borderRadius: 999,
              background:
                item.rate >= 70
                  ? "#FEE2E2"
                  : item.rate >= 40
                  ? "#FEF3C7"
                  : "#DCFCE7",
              color:
                item.rate >= 70
                  ? "#DC2626"
                  : item.rate >= 40
                  ? "#CA8A04"
                  : "#16A34A",
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            {item.rate}%
          </div>
        </div>
      ))}
    </div>
  );
}