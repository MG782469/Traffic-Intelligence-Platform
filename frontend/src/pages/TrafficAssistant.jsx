import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import events from "../data/events";

function TrafficAssistant() {
  return (
    <div style={{ display: "flex", background: "#F4F6F9" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "24px" }}>
        <Navbar />

        {/* Header */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h1>Traffic Advisory</h1>

          <p style={{ color: "#666" }}>
            AI-assisted travel guidance based on scheduled events and predicted
            congestion levels across Bengaluru.
          </p>
        </div>

        {/* Advisory Table */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h2>Current Travel Advisories</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "15px",
            }}
          >
            <thead>
              <tr style={{ background: "#F8FAFC" }}>
                <th style={{ padding: "10px", textAlign: "left" }}>Location</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Time Window</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Expected Delay</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Alternate Route</th>
              </tr>
            </thead>

            <tbody>
              {events.map((event) => (
                <tr key={event.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px" }}>{event.corridor}</td>

                  <td style={{ padding: "10px" }}>
                    {event.start_time} – {event.end_time}
                  </td>

                  <td style={{ padding: "10px" }}>
                    {event.estimated_delay}
                  </td>

                  <td style={{ padding: "10px" }}>
                    {event.diversion_route}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AI Summary */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h2>AI Travel Summary</h2>

          <ul style={{ lineHeight: "2" }}>
            <li>
              Congestion is expected to increase approximately <b>30 minutes
              before high-impact events</b>.
            </li>

            <li>
              Travelers should consider alternate corridors when closure
              probability exceeds <b>70%</b>.
            </li>

            <li>
              Evening events around commercial areas may result in moderate
              travel delays.
            </li>

            <li>
              Advisory recommendations are refreshed whenever new event
              information becomes available.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TrafficAssistant;