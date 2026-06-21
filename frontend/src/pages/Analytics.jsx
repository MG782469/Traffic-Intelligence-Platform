import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Analytics() {
  return (
    <div style={{ display: "flex", background: "#F4F6F9" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "24px" }}>
        <Navbar />

        {/* Header */}

        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "12px",
          }}
        >
          <h1>Bengaluru Traffic Forecast</h1>

          <p style={{ color: "#64748B" }}>
            Forecast future traffic conditions and provide
            citizen advisories using historical event patterns.
          </p>
        </div>

        {/* Forecast */}

        <div
          style={{
            background: "#fff",
            marginTop: "20px",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2>📈 Future Traffic Forecast</h2>

          <Bar
            label="Morning Peak (8-10 AM)"
            value={82}
          />

          <Bar
            label="Afternoon (1-4 PM)"
            value={45}
          />

          <Bar
            label="Evening Peak (5-8 PM)"
            value={94}
          />

          <Bar
            label="Night"
            value={22}
          />
        </div>
                {/* Corridors */}

        <div
          style={{
            background: "#fff",
            marginTop: "20px",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2>🚧 Corridors Requiring Improvement</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <SimpleRow
                left="Freedom Park Corridor"
                right="Recurring congestion hotspot"
              />

              <SimpleRow
                left="MG Road"
                right="High event-related traffic"
              />

              <SimpleRow
                left="Whitefield"
                right="Corporate hour congestion"
              />

              <SimpleRow
                left="Hebbal Flyover"
                right="VIP movement bottleneck"
              />

              <SimpleRow
                left="Cubbon Park"
                right="Weekend crowd management"
              />
            </tbody>
          </table>
        </div>

        {/* Citizen Advisory */}

        <div
          style={{
            background: "#fff",
            marginTop: "20px",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2>🚗 Citizen Advisory</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <SimpleRow
                left="Best Travel Window"
                right="Before 8:00 AM"
              />

              <SimpleRow
                left="Avoid Travel"
                right="5:00 PM – 8:00 PM"
              />

              <SimpleRow
                left="Use Alternate Routes"
                right="Freedom Park, MG Road"
              />

              <SimpleRow
                left="Prefer Public Transport"
                right="During rallies & festivals"
              />

              <SimpleRow
                left="Before Leaving"
                right="Check planned event alerts"
              />
            </tbody>
          </table>
        </div>
              </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Bar({ label, value }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6px",
        }}
      >
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>

      <div
        style={{
          width: "100%",
          height: "12px",
          background: "#E5E7EB",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: "#2563EB",
            borderRadius: "20px",
            transition: "0.3s",
          }}
        />
      </div>
    </div>
  );
}

function SimpleRow({ left, right }) {
  return (
    <tr>
      <td
        style={{
          padding: "12px",
          borderBottom: "1px solid #E5E7EB",
          fontWeight: "600",
          width: "45%",
        }}
      >
        {left}
      </td>

      <td
        style={{
          padding: "12px",
          borderBottom: "1px solid #E5E7EB",
          color: "#475569",
        }}
      >
        {right}
      </td>
    </tr>
  );
}

export default Analytics;