import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function getRisk(probability) {
  const p = probability > 1 ? probability : probability * 100;

  if (p >= 80)
    return { color: "#DC2626", label: "Critical" };

  if (p >= 60)
    return { color: "#F97316", label: "High" };

  if (p >= 40)
    return { color: "#EAB308", label: "Moderate" };

  return { color: "#22C55E", label: "Low" };
}

export default function LiveEventMap({ events }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        border: "1px solid #E2E8F0",
        padding: 16,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          marginBottom: 12,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 18,
            color: "#0F172A",
          }}
        >
          Live Event Map
        </h3>

        <div
          style={{
            fontSize: 13,
            color: "#64748B",
          }}
        >
          Bengaluru
        </div>
      </div>

      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={11}
        style={{
          height: "480px",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {events.map((event) => {

  if (
    event.latitude == null ||
    event.longitude == null
  ) {
    return null;
  }

  const lat = Number(event.latitude);
  const lng = Number(event.longitude);

  if (
    lat < 12 ||
    lat > 14 ||
    lng < 77 ||
    lng > 78
  ) {
    return null;
  }

  const risk = getRisk(event.closure_probability);

  return (
    <CircleMarker
      key={event.incident_id}
      center={[lat, lng]}
      radius={8}
      pathOptions={{
        color: "#fff",
        fillColor: risk.color,
        fillOpacity: 1,
        weight: 2,
      }}
    >
              <Popup>
                <div style={{ minWidth: 180 }}>
                  <strong>{event.event_type}</strong>

                  <br />
                  <br />

                  <strong>Junction:</strong>{" "}
                  {event.junction || "-"}

                  <br />

                  <strong>Priority:</strong>{" "}
                  {event.priority || "-"}

                  <br />

                  <strong>Risk:</strong>{" "}
                  {risk.label}

                  <br />

                  <strong>Closure:</strong>{" "}
                  {Math.round(
                    event.closure_probability > 1
                      ? event.closure_probability
                      : event.closure_probability * 100
                  )}
                  %
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}