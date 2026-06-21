function PredictionSummaryCard({ probability = 0.84 }) {
  const risk =
    probability <= 1 ? probability * 100 : probability;

  let impact = "Low";
  let color = "#16A34A";
  let officers = "4-6";
  let barricades = "2-3";
  let diversion = "Not Required";
  let priority = "Low";

  if (risk >= 80) {
    impact = "Critical";
    color = "#DC2626";
    officers = "18-22";
    barricades = "8-10";
    diversion = "Required";
    priority = "Immediate";
  } else if (risk >= 60) {
    impact = "High";
    color = "#EA580C";
    officers = "12-16";
    barricades = "6-8";
    diversion = "Recommended";
    priority = "High";
  } else if (risk >= 40) {
    impact = "Medium";
    color = "#D97706";
    officers = "8-10";
    barricades = "4-5";
    diversion = "Monitor";
    priority = "Medium";
  }

  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
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
        <h2
          style={{
            margin: 0,
            color: "#0F172A",
          }}
        >
          Prediction Summary
        </h2>

        <div
          style={{
            background: color,
            color: "#FFFFFF",
            padding: "6px 14px",
            borderRadius: "999px",
            fontWeight: "600",
            fontSize: "13px",
          }}
        >
          {impact}
        </div>
      </div>

      {/* Summary Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        <MetricCard
          title="Closure Probability"
          value={`${risk.toFixed(0)}%`}
        />

        <MetricCard
          title="Risk Level"
          value={impact}
        />

        <MetricCard
          title="Deployment Priority"
          value={priority}
        />

        <MetricCard
          title="Recommended Officers"
          value={officers}
        />

        <MetricCard
          title="Barricades"
          value={barricades}
        />

        <MetricCard
          title="Traffic Diversion"
          value={diversion}
        />
      </div>
    </div>
  );
}

function MetricCard({ title, value }) {
  return (
    <div
      style={{
        background: "#F8FAFC",
        border: "1px solid #E2E8F0",
        borderRadius: "10px",
        padding: "16px",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          color: "#64748B",
          marginBottom: "8px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "22px",
          fontWeight: "700",
          color: "#2563EB",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default PredictionSummaryCard;