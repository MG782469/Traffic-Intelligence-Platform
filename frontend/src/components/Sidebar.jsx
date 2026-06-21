import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { label: "🏠 Dashboard", path: "/" },
    { label: "📅 Planned Events", path: "/events" },
    { label: "🧠 Predict Impact", path: "/predict" },
    { label: "🛣️ Route Planner", path: "/route-planner" },
    { label: "🚓 Control Room", path: "/control-room" },
    { label: "📊 Analytics", path: "/analytics" },
  ];

  return (
    <div
      style={{
        width: "240px",
        minHeight: "100vh",
        background: "#0F172A",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ color: "#FFFFFF", margin: 0 }}>GridLock AI</h2>

      <p
        style={{
          color: "#94A3B8",
          fontSize: "13px",
          marginTop: "6px",
          marginBottom: "30px",
        }}
      >
        Bengaluru Traffic Police
      </p>

      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            display: "block",
            padding: "12px 14px",
            marginBottom: "8px",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#E5E7EB",
            background: isActive ? "#2563EB" : "transparent",
            fontSize: "15px",
            fontWeight: 500,
          })}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;