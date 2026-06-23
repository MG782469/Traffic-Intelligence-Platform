<div
  style={{
    background: "#FFFFFF",
    border: "1px solid #E2E8F0",
    borderRadius: "20px",
    padding: "24px 30px",
    marginBottom: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
  }}
>
  {/* Left Section */}
  <div>
    <h1
      style={{
        margin: 0,
        fontSize: "30px",
        fontWeight: "700",
        color: "#0F172A",
      }}
    >
      Bengaluru Traffic Intelligence Platform
    </h1>

    <div
      style={{
        marginTop: "8px",
        fontSize: "15px",
        color: "#64748B",
      }}
    >
      Event Monitoring • Risk Assessment • Operational Support
    </div>
  </div>

  {/* Right Section */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "16px",
    }}
  >
    {/* Weather */}
    <div
      style={{
        background: "#F8FAFC",
        border: "1px solid #E2E8F0",
        borderRadius: "14px",
        padding: "10px 16px",
        textAlign: "center",
        minWidth: "110px",
      }}
    >
      <div
        style={{
          fontSize: "13px",
          color: "#64748B",
        }}
      >
        🌤️ Weather
      </div>

      <div
        style={{
          fontSize: "18px",
          fontWeight: "700",
          color: "#0F172A",
        }}
      >
        28°C
      </div>

      <div
        style={{
          fontSize: "13px",
          color: "#64748B",
        }}
      >
        Cloudy
      </div>
    </div>

    {/* Dynamic Date & Time */}
    <div
      style={{
        background: "#F8FAFC",
        border: "1px solid #E2E8F0",
        borderRadius: "14px",
        padding: "10px 16px",
        textAlign: "center",
        minWidth: "170px",
      }}
    >
      <div
        style={{
          fontSize: "13px",
          color: "#64748B",
        }}
      >
        📅 Date & Time
      </div>

      <div
        style={{
          fontSize: "15px",
          fontWeight: "700",
          color: "#0F172A",
        }}
      >
        {currentTime.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </div>

      <div
        style={{
          fontSize: "13px",
          color: "#64748B",
        }}
      >
        {currentTime.toLocaleTimeString()}
      </div>
    </div>

    {/* Dynamic System Status */}
    <div
      style={{
        padding: "12px 18px",
        borderRadius: "999px",
        background: "#ECFDF5",
        border: "1px solid #BBF7D0",
        color: "#15803D",
        fontWeight: 600,
        fontSize: "14px",
        whiteSpace: "nowrap",
      }}
    >
      {events.length > 0
        ? "🟢 System Online"
        : "🟡 Loading Data"}
    </div>
  </div>
</div>