import events from "../data/events";

function UpcomingEvents() {
  const upcoming = [...events]
    .sort((a, b) => a.start_time.localeCompare(b.start_time))
    .slice(0, 4);

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        marginTop: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "18px",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>📅 Upcoming Events</h2>
          <p style={{ margin: "6px 0", color: "#64748B" }}>
            Immediate planned events requiring monitoring
          </p>
        </div>

        <span
          style={{
            background: "#DBEAFE",
            color: "#1D4ED8",
            padding: "8px 14px",
            borderRadius: "999px",
            fontWeight: 600,
          }}
        >
          {upcoming.length} Scheduled
        </span>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ background: "#F8FAFC" }}>
            <th style={th}>Time</th>
            <th style={th}>Event</th>
            <th style={th}>Location</th>
            <th style={th}>Priority</th>
            <th style={th}>Closure</th>
            <th style={th}>Status</th>
          </tr>
        </thead>

        <tbody>
          {upcoming.map((event) => (
            <tr key={event.id}>
              <td style={td}>
                <strong>{event.start_time}</strong>
                <br />
                <span style={{ color: "#64748B", fontSize: "13px" }}>
                  {event.end_time}
                </span>
              </td>

              <td style={td}>
                <strong>{event.event_type}</strong>
                <br />
                <span style={{ color: "#64748B", fontSize: "13px" }}>
                  {event.event_cause}
                </span>
              </td>

              <td style={td}>
                {event.corridor}
                <br />
                <span style={{ color: "#64748B", fontSize: "13px" }}>
                  {event.zone}
                </span>
              </td>

              <td style={td}>
                <span
                  style={{
                    background:
                      event.priority === "High"
                        ? "#FEE2E2"
                        : event.priority === "Medium"
                        ? "#FEF3C7"
                        : "#DCFCE7",
                    color:
                      event.priority === "High"
                        ? "#B91C1C"
                        : event.priority === "Medium"
                        ? "#B45309"
                        : "#15803D",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {event.priority}
                </span>
              </td>

              <td style={td}>
                <strong>{event.closure_probability}%</strong>
              </td>

              <td style={td}>
                <span
                  style={{
                    background: "#DCFCE7",
                    color: "#166534",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Scheduled
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  textAlign: "left",
  padding: "14px",
  borderBottom: "2px solid #E5E7EB",
  color: "#475569",
};

const td = {
  padding: "14px",
  borderBottom: "1px solid #F1F5F9",
};

export default UpcomingEvents;