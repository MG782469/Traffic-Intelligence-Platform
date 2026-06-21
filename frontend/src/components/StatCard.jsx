function StatCard({ title, value, subtitle, color }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "18px",
        padding: "22px",
        borderTop: `5px solid ${color}`,
        boxShadow: "0 6px 20px rgba(15,23,42,0.06)",
        transition: "0.25s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 12px 30px rgba(15,23,42,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow =
          "0 6px 20px rgba(15,23,42,0.06)";
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: "13px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.8px",
          color: "#64748B",
        }}
      >
        {title}
      </div>

      {/* Value */}
      <div
        style={{
          marginTop: "14px",
          fontSize: "48px",
          fontWeight: 800,
          color: "#0F172A",
          lineHeight: 1,
        }}
      >
        {value}
      </div>

      {/* Subtitle */}
      <div
        style={{
          marginTop: "14px",
          fontSize: "14px",
          color: "#475569",
          fontWeight: 500,
        }}
      >
        {subtitle}
      </div>

      {/* Bottom indicator */}
      <div
        style={{
          marginTop: "18px",
          height: "6px",
          width: "100%",
          background: "#E2E8F0",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "100%",
            background: color,
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
}

export default StatCard;