import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Results.css";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = location.state?.query || "";
  const image = location.state?.image || null;

  const [suggestions, setSuggestions] = useState([]);

  // Simulate real-time AI suggestions (replace with actual API later)
  useEffect(() => {
    if (query || image) {
      const simulatedSuggestions = [
        "Check soil moisture before watering crops.",
        "Use neem-based pesticide for pest control.",
        "Consider crop rotation for better yield.",
        "Follow govt. subsidy schemes for fertilizers.",
        "Ensure proper sunlight and ventilation for crops."
      ];
      let index = 0;
      const interval = setInterval(() => {
        setSuggestions((prev) => {
          if (index >= simulatedSuggestions.length) {
            clearInterval(interval);
            return prev;
          }
          const next = [...prev, simulatedSuggestions[index]];
          index++;
          return next;
        });
      }, 1000); // Add one suggestion per second
      return () => clearInterval(interval);
    }
  }, [query, image]);

  return (
    <div className="results-screen">
      <h2>AI Analysis Result</h2>

      <div className="result-card">
        <h3>Query:</h3>
        <p>{query || "No query submitted"}</p>
        {image && (
          <div className="uploaded-image">
            <img src={image} alt="Uploaded" />
          </div>
        )}
      </div>

      <div className="result-card suggestions-card">
        <h3>AI Suggestions:</h3>
        <ul>
          {suggestions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="feedback-buttons">
        <button className="thumb-btn">👍 Helpful</button>
        <button className="thumb-btn">👎 Not Helpful</button>
      </div>

      <button className="btn-escalate" onClick={() => navigate("/escalation")}>
        Escalate to Officer
      </button>
    </div>
  );
}
