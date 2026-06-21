function OfficerAssignmentPanel() {
  const officers = [
    {
      id: "FKUSR00005",
      station: "Cubbon Park Traffic PS",
      status: "Available",
    },
    {
      id: "FKUSR00008",
      station: "Ashok Nagar Traffic PS",
      status: "Assigned",
    },
    {
      id: "FKUSR00012",
      station: "Hebbal Traffic PS",
      status: "En Route",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "#16A34A";
      case "Assigned":
        return "#EA580C";
      case "En Route":
        return "#2563EB";
      default:
        return "#64748B";
    }
  };

  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "16px",
        padding: "24px",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "20px",
        }}
      >
        Officer Dispatch Status
      </h2>

      {officers.map((officer) => (
        <div
          key={officer.id}
          style={{
            border: "1px solid #E5E7EB",
            borderRadius: "10px",
            padding: "16px",
            marginBottom: "14px",
            background: "#F8FAFC",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <strong
              style={{
                color: "#0F172A",
                fontSize: "16px",
              }}
            >
              {officer.id}
            </strong>

            <span
              style={{
                background: getStatusColor(officer.status),
                color: "#FFFFFF",
                padding: "4px 10px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              {officer.status}
            </span>
          </div>

          <div
            style={{
              marginTop: "10px",
              color: "#475569",
              fontSize: "14px",
            }}
          >
            <strong>Assigned Station:</strong> {officer.station}
          </div>

          <div
            style={{
              marginTop: "6px",
              color: "#475569",
              fontSize: "14px",
            }}
          >
            <strong>Last Update:</strong> 09:42 AM
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "14px",
            }}
          >
            <button
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                border: "none",
                padding: "8px 14px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Notify
            </button>

            <button
              style={{
                background: "#16A34A",
                color: "#FFFFFF",
                border: "none",
                padding: "8px 14px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Reassign
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OfficerAssignmentPanel;