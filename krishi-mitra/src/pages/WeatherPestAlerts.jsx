import { useEffect, useState } from "react";
import "./WeatherPestAlerts.css"; // We'll reuse weather and pest alert styles
import { Sun, CloudRain, Cloud, AlertTriangle, CloudSun } from "lucide-react";

// Dummy data (replace with API/farm query in future)
const dummyWeather = [
  { day: "Monday", temp: "32°C", condition: "Sunny", icon: <Sun size={32} color="#facc15" /> },
  { day: "Tuesday", temp: "30°C", condition: "Cloudy", icon: <Cloud size={32} color="#6b7280" /> },
  { day: "Wednesday", temp: "31°C", condition: "Rainy", icon: <CloudRain size={32} color="#3b82f6" /> },
];

const queryHistory = [
  { crop: "Tomato", pestConcern: "Aphids" },
  { crop: "Rice", pestConcern: "Stem Borer" },
];

export default function WeatherPestAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [todayWeather, setTodayWeather] = useState(dummyWeather[0]);

  useEffect(() => {
    // Get today's day name
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today = days[new Date().getDay()];

    // Find weather for today
    const current = dummyWeather.find(w => w.day === today) || dummyWeather[0];
    setTodayWeather(current);

    // Generate pest alerts based on query history + today's weather
    const generatedAlerts = queryHistory.map(q => {
      let severity = "Low";
      let weatherIcon = <Sun size={20} />;

      if (q.pestConcern === "Aphids" && current.condition === "Rainy") {
        severity = "High";
        weatherIcon = <CloudRain size={20} />;
      } else if (q.pestConcern === "Stem Borer" && parseInt(current.temp) > 28) {
        severity = "Medium";
        weatherIcon = <CloudSun size={20} />;
      }

      let precaution = "";
      if (q.pestConcern === "Aphids") precaution = "Use neem spray and remove affected leaves.";
      if (q.pestConcern === "Stem Borer") precaution = "Apply biopesticides and maintain water levels.";

      return {
        pest: q.pestConcern,
        crop: q.crop,
        severity,
        precaution,
        weatherIcon,
        weather: current.condition,
      };
    });

    setAlerts(generatedAlerts);
  }, []);

  return (
    <div className="feature-screen">
      <h2>🌦 Today's Weather & Pest Alerts</h2>

      {/* Today's weather card */}
      <div className="cards-container">
        <div className="weather-card">
          <div className="weather-icon">{todayWeather.icon}</div>
          <h3>{todayWeather.day}</h3>
          <p className="temp">{todayWeather.temp}</p>
          <p className="condition">{todayWeather.condition}</p>
        </div>
      </div>

      {/* Pest Alerts */}
      <div className="alerts-section">
        <h3><AlertTriangle size={20} color="#dc2626" /> Pest Alerts</h3>
        <div className="cards-container">
          {alerts.map((a, idx) => (
            <div key={idx} className="pest-card" data-severity={a.severity}>
              <h3>{a.pest}</h3>
              <p>Crop: {a.crop}</p>
              <p>
                Severity: {a.severity} {a.weatherIcon} ({a.weather})
              </p>
              <p><strong>Precaution:</strong> {a.precaution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
