import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

function PlannedEvents() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://traffic-intelligence-platform-lt94.onrender.com/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex", background: "#F4F6F9" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "24px" }}>
        <Navbar />

        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "12px",
          }}
        >
          <h1>📅 Planned Events & Travel Advisory</h1>

          <p style={{ color: "#64748B" }}>
            View upcoming city events and plan your travel in advance to
            minimize congestion and delays.
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            marginTop: "20px",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h2>Upcoming Planned Events</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ background: "#F8FAFC" }}>
                <th style={th}>Date</th>
                <th style={th}>Event</th>
                <th style={th}>Zone</th>
                <th style={th}>Corridor</th>
                <th style={th}>Priority</th>
                <th style={th}>Citizen Advisory</th>
              </tr>
            </thead>

            <tbody>
              {events.map((event, index) => (
                <tr key={event.id}>
                  <td style={td}>{event.date}</td>

                  <td style={td}>{event.event_cause}</td>

                  <td style={td}>{event.zone}</td>

                  <td style={td}>{event.corridor}</td>

                  <td style={td}>{event.priority}</td>

                  <td style={td}>
                    {event.closure_probability >= 75
                      ? "🔴 Avoid Route"
                      : event.closure_probability >= 50
                      ? "🟠 Expect Delays"
                      : "🟢 Travel Normally"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
                {/* Travel Recommendations */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h2>🚗 Best Travel Windows</h2>

            <ul style={{ lineHeight: "2" }}>
              <li>🟢 Before 8:00 AM - Smooth traffic flow</li>
              <li>🟢 After 9:00 PM - Minimal congestion</li>
              <li>🟠 10:00 AM – 4:00 PM - Moderate delays</li>
              <li>🔴 5:00 PM – 8:00 PM - Avoid if possible</li>
            </ul>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h2>💡 Travel Tips</h2>

            <ul style={{ lineHeight: "2" }}>
              <li>Check planned events before starting your journey.</li>
              <li>Use alternate routes near high-priority events.</li>
              <li>Prefer Metro or public transport during festivals.</li>
              <li>Leave 15–20 minutes early for central corridors.</li>
              <li>Follow police advisories and dynamic signboards.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

const th = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "1px solid #E5E7EB",
  color: "#475569",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #E5E7EB",
};

export default PlannedEvents;