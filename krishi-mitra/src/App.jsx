import Splash from "./pages/Splash";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import Language from "./pages/Language";
import Dashboard from "./pages/Dashboard";
import QuerySubmission from "./components/QuerySubmission/QuerySubmission";
import Results from "./pages/Results";

import MarketAnalysis from "./pages/MarketAnalysis";
import CropCalendar from "./pages/CropCalendar";
import WeatherPestAlerts from "./pages/WeatherPestAlerts"; // merged page
import Notifications from "./pages/Notifications";
import Escalation from "./pages/Escalation";
import LocalMarket from "./pages/LocalMarket";
import TrainingSchemes from "./pages/TrainingSchemes"; // ✅ new import

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/language" element={<Language />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/query" element={<QuerySubmission />} /> {/* optional */}
        <Route path="/results" element={<Results />} />

        <Route path="/weather-pest" element={<WeatherPestAlerts />} /> {/* merged route */}
        <Route path="/local-market" element={<LocalMarket />} />
        <Route path="/calendar" element={<CropCalendar />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/escalation" element={<Escalation />} />

        <Route path="/training-schemes" element={<TrainingSchemes />} /> {/* ✅ new route */}
      </Routes>
    </BrowserRouter>
  );
}
