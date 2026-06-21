function CitizenAdvisory() {
  const advisories = [
    {
      area: "Freedom Park",
      message: "Delay expected between 09:00 AM and 12:00 PM",
    },
    {
      area: "MG Road",
      message: "Use Brigade Road as an alternate route",
    },
    {
      area: "Hebbal Flyover",
      message: "Moderate congestion expected during peak hours",
    },
    {
      area: "Cubbon Park",
      message: "Traffic likely to increase after scheduled events",
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
      <h2 style={{ marginTop: 0 }}>
        Travel Advisories
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "15px",
        }}
      >
        <thead>
          <tr style={{ background: "#F8FAFC" }}>
            <th
              style={{
                textAlign: "left",
                padding: "12px",
              }}
            >
              Area
            </th>

            <th
              style={{
                textAlign: "left",
                padding: "12px",
              }}
            >
              Advisory
            </th>
          </tr>
        </thead>

        <tbody>
          {advisories.map((item) => (
            <tr key={item.area}>
              <td
                style={{
                  padding: "12px",
                  fontWeight: "600",
                  borderBottom: "1px solid #E5E7EB",
                }}
              >
                {item.area}
              </td>

              <td
                style={{
                  padding: "12px",
                  color: "#475569",
                  borderBottom: "1px solid #E5E7EB",
                }}
              >
                {item.message}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CitizenAdvisory;