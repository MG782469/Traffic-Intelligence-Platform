function TravelRecommendationCard({ destination = "MG Road" }) {
  const destinationInfo = {
    "MG Road": {
      hospital: "Bowring Hospital",
      fire: "Shivajinagar Fire Station",
      metro: "MG Road Metro",
      fuel: "HP Petrol Pump",
      police: "Ashok Nagar Police Station",
      parking: "UB City Parking",
    },

    Whitefield: {
      hospital: "Manipal Hospital Whitefield",
      fire: "Whitefield Fire Station",
      metro: "Kadugodi Metro",
      fuel: "Shell Whitefield",
      police: "Whitefield Police Station",
      parking: "Phoenix Marketcity Parking",
    },

    "Electronic City": {
      hospital: "Springleaf Hospital",
      fire: "Electronic City Fire Station",
      metro: "Electronic City Metro",
      fuel: "Indian Oil Electronic City",
      police: "Electronic City Police Station",
      parking: "Neo Mall Parking",
    },
  };

  const location =
    destinationInfo[destination] || destinationInfo["MG Road"];

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
          flexWrap: "wrap",
          marginBottom: "24px",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>
            🗺️ Smart Route Recommendation
          </h2>

          <p
            style={{
              marginTop: "6px",
              color: "#64748B",
            }}
          >
            Route generated after evaluating congestion,
            event-affected corridors and road restrictions.
          </p>
        </div>

        <div
          style={{
            background: "#DCFCE7",
            color: "#166534",
            padding: "8px 16px",
            borderRadius: "999px",
            fontWeight: 600,
          }}
        >
          ✅ Route Ready
        </div>
      </div>

      {/* Summary */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "16px",
        }}
      >
        <Info title="⏱ ETA" value="42 mins" />
        <Info title="📏 Distance" value="18.4 km" />
        <Info title="🚦 Traffic" value="Moderate" />
        <Info title="🛣️ Route Adjustments" value="2" />
      </div>
            {/* Route Comparison */}

      <div
        style={{
          marginTop: "24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {/* Shortest Route */}

        <div
          style={{
            background: "#FEF2F2",
            border: "1px solid #FECACA",
            borderRadius: "14px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              marginTop: 0,
              color: "#B91C1C",
            }}
          >
            🔴 Shortest Route
          </h3>

          <div
            style={{
              marginTop: "14px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#1E293B",
              lineHeight: "1.8",
            }}
          >
            📍 Whitefield → Brigade Road → MG Road
          </div>

          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginTop: "18px",
            }}
          >
            <Badge text="⏱ 34 mins" />
            <Badge text="📍 Shortest Distance" />
            <Badge text="🚧 Event Corridor" />
          </div>
        </div>

        {/* Recommended Route */}

        <div
          style={{
            background: "#EFF6FF",
            border: "1px solid #BFDBFE",
            borderRadius: "14px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              marginTop: 0,
              color: "#1D4ED8",
            }}
          >
            🟢 Recommended Route
          </h3>

          <div
            style={{
              marginTop: "14px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#1E293B",
              lineHeight: "1.8",
            }}
          >
            📍 Whitefield → Old Airport Road → Cubbon Road → MG Road
          </div>

          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginTop: "18px",
            }}
          >
            <Badge text="⏱ 42 mins" />
            <Badge text="✅ Avoids Closures" />
            <Badge text="🚦 Stable Traffic" />
          </div>
        </div>
      </div>

      {/* Planner Decision */}

      <div
        style={{
          marginTop: "20px",
          background: "#ECFDF5",
          border: "1px solid #BBF7D0",
          borderRadius: "12px",
          padding: "18px",
        }}
      >
        <h3
          style={{
            marginTop: 0,
            color: "#166534",
          }}
        >
          💡 Planner Decision
        </h3>

        <p
          style={{
            marginBottom: 0,
            color: "#166534",
            lineHeight: "1.8",
          }}
        >
          The shortest path passes through event-affected and high-traffic
          corridors. The recommended route avoids impacted segments and
          prioritizes smoother, more reliable travel conditions.
        </p>
      </div>
            {/* Corridor Analysis */}

      <div
        style={{
          marginTop: "24px",
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "14px",
          padding: "20px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>
          📊 Corridor Analysis
        </h3>

        <p
          style={{
            color: "#64748B",
            marginTop: "6px",
            marginBottom: "18px",
          }}
        >
          The planner evaluates road conditions and assigns routing
          priorities before selecting the final path.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 2fr",
            fontWeight: "700",
            color: "#64748B",
            paddingBottom: "12px",
            borderBottom: "1px solid #E2E8F0",
          }}
        >
          <div>Corridor</div>
          <div>Status</div>
          <div>Planner Action</div>
        </div>

        {[
          {
            name: "Freedom Park Corridor",
            status: "🔴 Restricted",
            action: "Excluded from routing",
          },
          {
            name: "Brigade Road",
            status: "🟠 Congested",
            action: "Assigned higher routing weight",
          },
          {
            name: "Cubbon Road",
            status: "🟢 Preferred",
            action: "Selected for smoother travel",
          },
          {
            name: "Old Airport Road",
            status: "🟢 Open",
            action: "Used as connecting corridor",
          },
        ].map((item) => (
          <div
            key={item.name}
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr 2fr",
              alignItems: "center",
              padding: "14px 0",
              borderBottom: "1px solid #F1F5F9",
            }}
          >
            <div style={{ fontWeight: 600 }}>
              {item.name}
            </div>

            <div>{item.status}</div>

            <div style={{ color: "#475569" }}>
              {item.action}
            </div>
          </div>
        ))}
      </div>

      {/* Parking Near Destination */}

      <div
        style={{
          marginTop: "24px",
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "14px",
          padding: "20px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>
          🅿️ Parking Near Destination
        </h3>

        <p
          style={{
            color: "#64748B",
            marginTop: "6px",
            marginBottom: "18px",
          }}
        >
          Suggested parking facilities based on proximity and availability.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <AmenityRow
            icon="⭐"
            title="Recommended"
            value={location.parking}
          />

          <AmenityRow
            icon="🅿️"
            title="Alternative"
            value="Brigade Basement Parking"
          />

          <AmenityRow
            icon="🅿️"
            title="Overflow"
            value="Central Parking Complex"
          />
        </div>
      </div>
            {/* Nearby Amenities */}

      <div
        style={{
          marginTop: "24px",
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "14px",
          padding: "20px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>
          🏥 Nearby Amenities
        </h3>

        <p
          style={{
            color: "#64748B",
            marginTop: "6px",
            marginBottom: "18px",
          }}
        >
          Essential public facilities available near your destination.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "14px",
          }}
        >
          <AmenityRow
            icon="🏥"
            title="Hospital"
            value={location.hospital}
          />

          <AmenityRow
            icon="🚒"
            title="Fire Station"
            value={location.fire}
          />

          <AmenityRow
            icon="🚓"
            title="Police Station"
            value={location.police}
          />

          <AmenityRow
            icon="🚇"
            title="Metro Station"
            value={location.metro}
          />

          <AmenityRow
            icon="⛽"
            title="Fuel Station"
            value={location.fuel}
          />

          <AmenityRow
            icon="🅿️"
            title="Public Parking"
            value={location.parking}
          />
        </div>
      </div>

      {/* Route Insights */}

      <div
        style={{
          marginTop: "24px",
          background: "#F8FAFC",
          border: "1px solid #E2E8F0",
          borderRadius: "14px",
          padding: "20px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>
          💡 Route Insights
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "14px",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "10px",
              padding: "14px",
            }}
          >
            ✅ Event-affected corridors avoided
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "10px",
              padding: "14px",
            }}
          >
            🚧 Restricted segments bypassed
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "10px",
              padding: "14px",
            }}
          >
            🅿️ Destination parking identified
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "10px",
              padding: "14px",
            }}
          >
            🏥 Emergency facilities available nearby
          </div>
        </div>
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
          fontSize: "22px",
          fontWeight: "700",
          color: "#0F172A",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function Badge({ text }) {
  return (
    <span
      style={{
        background: "#DBEAFE",
        color: "#1D4ED8",
        padding: "6px 12px",
        borderRadius: "999px",
        fontSize: "13px",
        fontWeight: "600",
      }}
    >
      {text}
    </span>
  );
}

function AmenityRow({ icon, title, value }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        background: "#F8FAFC",
        border: "1px solid #E2E8F0",
        borderRadius: "12px",
        padding: "14px",
      }}
    >
      <div
        style={{
          fontSize: "24px",
        }}
      >
        {icon}
      </div>

      <div>
        <div
          style={{
            fontSize: "13px",
            color: "#64748B",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontWeight: "600",
            color: "#0F172A",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

export default TravelRecommendationCard;