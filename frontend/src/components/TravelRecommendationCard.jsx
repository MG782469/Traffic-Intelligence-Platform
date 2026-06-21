function TravelRecommendationCard() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "18px",
        padding: "28px",
        border: "1px solid #E2E8F0",
        marginTop: "24px",
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
        <div>
          <h2 style={{ margin: 0 }}>🗺️ Smart Route Recommendation</h2>

          <p
            style={{
              color: "#64748B",
              marginTop: "6px",
            }}
          >
            Generated using planned events and predicted traffic impact.
          </p>
        </div>

        <div
          style={{
            background: "#DCFCE7",
            color: "#166534",
            padding: "8px 16px",
            borderRadius: "20px",
            fontWeight: 600,
          }}
        >
          Route Optimized
        </div>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "16px",
        }}
      >
        <Info title="Estimated Travel Time" value="42 mins" />
        <Info title="Expected Delay" value="+12 mins" />
        <Info title="Traffic Level" value="Moderate" />

        <Info title="Affected Event" value="Political Rally" />
        <Info title="Affected Corridor" value="Freedom Park Corridor" />
        <Info title="Road Closure Risk" value="84%" />
      </div>

      {/* Recommended Route */}
      <div
        style={{
          marginTop: "24px",
          padding: "18px",
          background: "#EFF6FF",
          border: "1px solid #BFDBFE",
          borderRadius: "12px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>✅ Recommended Route</h3>

        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#1D4ED8",
          }}
        >
          Whitefield → Cubbon Road → Richmond Road → MG Road
        </div>

        <div
          style={{
            marginTop: "10px",
            color: "#475569",
          }}
        >
          This diversion avoids the predicted congestion zone and minimizes
          travel delay.
        </div>
      </div>

      {/* Citizen Advisory */}
      <div
        style={{
          marginTop: "20px",
          background: "#FEF3C7",
          border: "1px solid #FCD34D",
          borderRadius: "12px",
          padding: "18px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>📢 Citizen Advisory</h3>

        <ul
          style={{
            marginBottom: 0,
            color: "#78350F",
            lineHeight: 1.8,
          }}
        >
          <li>Avoid Freedom Park Corridor between 09:00 AM and 12:30 PM.</li>
          <li>Start your journey 15 minutes earlier if possible.</li>
          <li>Use Cubbon Road diversion for smoother travel.</li>
          <li>Public transport users may experience minor delays.</li>
        </ul>
      </div>

      {/* ML Notice */}
      <div
        style={{
          marginTop: "20px",
          background: "#F8FAFC",
          border: "1px solid #E2E8F0",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        <strong>🤖 ML Insight</strong>

        <p
          style={{
            marginBottom: 0,
            marginTop: "8px",
            color: "#475569",
          }}
        >
          Based on historical event patterns and operational data, this route
          recommendation avoids corridors with a high probability of temporary
          congestion and road closure.
        </p>
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
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <div
        style={{
          color: "#64748B",
          fontSize: "13px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: "8px",
          fontSize: "24px",
          fontWeight: "700",
          color: "#0F172A",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default TravelRecommendationCard;