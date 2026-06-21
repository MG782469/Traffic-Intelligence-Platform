import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PlannedEvents from "./pages/PlannedEvents";
import PredictEvent from "./pages/PredictEvent";
import DiversionPlanner from "./pages/DiversionPlanner";
import Analytics from "./pages/Analytics";
import ControlRoom from "./pages/ControlRoom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/events" element={<PlannedEvents />} />
      <Route path="/predict" element={<PredictEvent />} />
      <Route path="/route-planner" element={<DiversionPlanner />} />
      <Route path="/control-room" element={<ControlRoom />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
}

export default App;