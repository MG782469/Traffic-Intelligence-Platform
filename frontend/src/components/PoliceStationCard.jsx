function PoliceStationCard({
  station = "",
  zone = "",
  distance = "",
  responseTime = "",
}) {
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#0F172A",
          }}
        >
          Automated Area Triaging
        </h2>

        <span
          style={{
            background: "#DCFCE7",
            color: "#15803D",
            padding: "6px 12px",
            borderRadius: "20px",
            fontWeight: 600,
            fontSize: "12px",
          }}
        >
          Ready
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        <Info title="Nearest Police Station" value={station} />

        <Info title="Operational Zone" value={zone} />

        <Info title="Estimated Distance" value={distance} />

        <Info title="Suggested Response" value={responseTime} />
      </div>

      <div
        style={{
          marginTop: "18px",
          padding: "14px",
          background: "#EFF6FF",
          borderRadius: "10px",
          border: "1px solid #BFDBFE",
          color: "#1E40AF",
          fontWeight: 600,
        }}
      >
        Station selected automatically based on event location.
      </div>
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div
      style={{
        background: "#F8FAFC",
        padding: "14px",
        borderRadius: "10px",
        border: "1px solid #E2E8F0",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          color: "#64748B",
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: "6px",
          fontSize: "18px",
          fontWeight: "700",
          color: "#0F172A",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default PoliceStationCard;