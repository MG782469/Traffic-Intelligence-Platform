import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

import LiveEventMap from "../components/LiveEventMap";
import CriticalAttentionQueue from "../components/CriticalAttentionQueue";
import JunctionHotspots from "../components/JunctionHotspots";
import CitizenAdvisory from "../components/CitizenAdvisory";

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch(
      "https://traffic-intelligence-platform-1.onrender.com/incidents"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const formattedEvents = data.map((row) => ({
          incident_id: row[0],
          event_type: row[1],
          event_cause: row[2],
          priority: row[3],
          zone: row[4],
          corridor: row[5],
          vehicle_type: row[6],
          latitude: row[7],
          longitude: row[8],
          start_time: row[9],
          junction: row[10],
          closure_probability: row[11],
          risk_level: row[12],
        }));

        setEvents(formattedEvents);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const activeEvents = events.length;

  const highPriority = events.filter(
    (e) => String(e.priority).toLowerCase() === "high"
  ).length;

  const predictedClosures = events.filter((e) => {
    const risk =
      e.closure_probability > 1
        ? e.closure_probability
        : e.closure_probability * 100;

    return risk >= 70;
  }).length;

  const averageRisk =
    events.length > 0
      ? Math.round(
          events.reduce((sum, e) => {
            const risk =
              e.closure_probability > 1
                ? e.closure_probability
                : e.closure_probability * 100;

            return sum + risk;
          }, 0) / events.length
        )
      : 0;

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#F1F5F9",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "24px",
        }}
      >
        <Navbar />

        {/* Hero Section */}

        <div
          style={{
            background:
              "linear-gradient(135deg, #0F172A 0%, #1D4ED8 100%)",
            borderRadius: "22px",
            padding: "30px 34px",
            marginBottom: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#FFFFFF",
            boxShadow: "0 12px 30px rgba(15,23,42,0.18)",
          }}
        >
          {/* Left */}

          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "34px",
                fontWeight: "700",
              }}
            >
              Bengaluru Traffic Intelligence Platform
            </h1>

            <div
              style={{
                marginTop: "10px",
                color: "#CBD5E1",
                fontSize: "15px",
              }}
            >
              Event Monitoring • Risk Prediction • Operational Support
            </div>
          </div>

          {/* Right */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            {/* Weather */}

            <div
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "16px",
                padding: "14px 20px",
                textAlign: "center",
                minWidth: "120px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#CBD5E1",
                }}
              >
                🌤️ Weather
              </div>

              <div
                style={{
                  marginTop: "4px",
                  fontSize: "28px",
                  fontWeight: "700",
                }}
              >
                28°C
              </div>

              <div
                style={{
                  fontSize: "14px",
                  color: "#CBD5E1",
                }}
              >
                Cloudy
              </div>
            </div>

            {/* Status */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <div
                style={{
                  background: "#16A34A",
                  padding: "9px 18px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                🟢 System Online
              </div>

              <div
                style={{
                  color: "#E2E8F0",
                  fontSize: "13px",
                }}
              >
                📅 {currentTime.toLocaleDateString()}
              </div>

              <div
                style={{
                  color: "#E2E8F0",
                  fontSize: "13px",
                }}
              >
                🕒 {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>

        {/* KPI Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "18px",
            marginBottom: "24px",
          }}
        >
          <StatCard
            title="Active Events"
            value={activeEvents}
            subtitle="Currently monitored"
            color="#2563EB"
          />

          <StatCard
            title="High Priority"
            value={highPriority}
            subtitle="Require review"
            color="#DC2626"
          />

          <StatCard
            title="Predicted Closures"
            value={predictedClosures}
            subtitle="Risk ≥ 70%"
            color="#EA580C"
          />

          <StatCard
            title="Average Risk"
            value={`${averageRisk}%`}
            subtitle="Across monitored events"
            color="#16A34A"
          />
        </div>

        {/* Map + Queue */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <LiveEventMap events={events} />
          <CriticalAttentionQueue />
        </div>

        {/* Bottom */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <JunctionHotspots />
          <CitizenAdvisory />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;