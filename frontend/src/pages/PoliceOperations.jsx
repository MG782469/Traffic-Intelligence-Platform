import events from "../data/events";

function PoliceOperations() {
  return (
    <div style={{ padding: "30px", background: "#F5F7FA", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "5px" }}>
        🚓 Police Operations Dashboard
      </h1>

      <p style={{ color: "#64748B", marginBottom: "25px" }}>
        Deployment planning and operational readiness for scheduled events.
      </p>

      {/* KPI Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "16px",
          marginBottom: "25px",
        }}
      >
        <Card title="Events Today" value={events.length} color="#2563EB" />
        <Card title="Road Closures" value="3" color="#DC2626" />
        <Card title="Officers Planned" value="62" color="#059669" />
        <Card title="Barricades Planned" value="32" color="#D97706" />
      </div>

      {/* Main Operations Table */}
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "20px",
          border: "1px solid #E5E7EB",
        }}
      >
        <h2>Today's Deployment Schedule</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "15px",
          }}
        >
          <thead>
            <tr style={{ background: "#F9FAFB" }}>
              <th style={th}>Time</th>
              <th style={th}>Event</th>
              <th style={th}>Location</th>
              <th style={th}>Closure</th>
              <th style={th}>Officers</th>
              <th style={th}>Barricades</th>
              <th style={th}>Deploy By</th>
            </tr>
          </thead>

          <tbody>
            {events.map((e) => (
              <tr key={e.id}>
                <td style={td}>
                  {e.start_time}
                </td>

                <td style={td}>
                  <strong>{e.event_type}</strong>
                </td>

                <td style={td}>
                  {e.corridor}
                </td>

                <td style={td}>
                  {e.closure_probability}%
                </td>

                <td style={td}>
                  {e.recommended_officers_min}–
                  {e.recommended_officers_max}
                </td>

                <td style={td}>
                  {e.recommended_barricades_min}–
                  {e.recommended_barricades_max}
                </td>

                <td style={td}>
                  {e.congestion_start || "30 mins prior"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #E5E7EB",
          }}
        >
          <h3>Highest Priority Locations</h3>

          <ul>
            <li>Freedom Park Corridor</li>
            <li>Hebbal Flyover</li>
            <li>MG Road</li>
            <li>Chinnaswamy Stadium</li>
          </ul>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #E5E7EB",
          }}
        >
          <h3>Control Room Checklist</h3>

          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>✔ Event Schedule Reviewed</td>
              </tr>

              <tr>
                <td>✔ Deployment Planned</td>
              </tr>

              <tr>
                <td>✔ Barricades Allocated</td>
              </tr>

              <tr>
                <td>✔ Public Advisory Published</td>
              </tr>

              <tr>
                <td>✔ Diversion Routes Ready</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "18px",
        borderRadius: "12px",
        border: "1px solid #E5E7EB",
      }}
    >
      <div style={{ color: "#64748B", fontSize: "14px" }}>{title}</div>

      <div
        style={{
          fontSize: "34px",
          fontWeight: "bold",
          color,
          marginTop: "8px",
        }}
      >
        {value}
      </div>
    </div>
  );
}

const th = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "1px solid #E5E7EB",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #F3F4F6",
};

export default PoliceOperations;