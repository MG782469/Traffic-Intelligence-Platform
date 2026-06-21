import events from "../data/events";

export default function JunctionHotspots() {
  const hotspotMap = {};

  events.forEach((event) => {
    const junction = event.junction || "Unknown";

    const risk =
      event.closure_probability > 1
        ? event.closure_probability
        : event.closure_probability * 100;

    if (!hotspotMap[junction]) {
      hotspotMap[junction] = {
        count: 0,
        totalRisk: 0,
      };
    }

    hotspotMap[junction].count += 1;
    hotspotMap[junction].totalRisk += risk;
  });

  const hotspots = Object.entries(hotspotMap)
    .map(([junction, data]) => ({
      junction,
      count: data.count,
      avgRisk: Math.round(data.totalRisk / data.count),
    }))
    .sort((a, b) => b.avgRisk - a.avgRisk)
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
        📍 Junction Hotspots
      </h3>

      {hotspots.map((item, index) => (
        <div
          key={item.junction}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 0",
            borderBottom:
              index !== hotspots.length - 1
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
              {item.junction}
            </div>

            <div
              style={{
                fontSize: 13,
                color: "#64748B",
              }}
            >
              {item.count} recorded events
            </div>
          </div>

          <span
            style={{
              background:
                item.avgRisk >= 80
                  ? "#FEE2E2"
                  : item.avgRisk >= 60
                  ? "#FFF7ED"
                  : "#FEF3C7",
              color:
                item.avgRisk >= 80
                  ? "#DC2626"
                  : item.avgRisk >= 60
                  ? "#EA580C"
                  : "#CA8A04",
              padding: "6px 12px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            {item.avgRisk}% avg risk
          </span>
        </div>
      ))}
    </div>
  );
}