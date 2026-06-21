function PoliceSummary() {
  const deployments = [
    {
      area: "Freedom Park",
      response: "High Alert",
      status: "Ready",
    },
    {
      area: "Hebbal Flyover",
      response: "Enhanced Monitoring",
      status: "Ready",
    },
    {
      area: "MG Road",
      response: "Active Monitoring",
      status: "Planned",
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E5E7EB",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Deployment Status</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ background: "#F8FAFC" }}>
            <th style={th}>Area</th>
            <th style={th}>Response</th>
            <th style={th}>Status</th>
          </tr>
        </thead>

        <tbody>
          {deployments.map((item) => (
            <tr key={item.area}>
              <td style={td}>{item.area}</td>
              <td style={td}>{item.response}</td>
              <td style={td}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  textAlign: "left",
  padding: "10px",
  borderBottom: "1px solid #E5E7EB",
};

const td = {
  padding: "10px",
  borderBottom: "1px solid #F1F5F9",
};

export default PoliceSummary;