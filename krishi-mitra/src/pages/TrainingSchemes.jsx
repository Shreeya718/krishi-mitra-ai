import "./TrainingSchemes.css";
import { Volume2, BookOpen, Award } from "lucide-react";

export default function TrainingSchemes() {
  // Mock Data for demo
  const trainings = [
    {
      title: "How to Grow Rice 🌾",
      desc: "Learn step by step sowing, watering, and harvesting methods.",
      audio: "/audio/rice-training.mp3", // mock audio file
    },
    {
      title: "Organic Fertilizers 🌱",
      desc: "Use cow dung, compost, and natural pesticides for better yield.",
      audio: "/audio/organic-training.mp3",
    },
  ];

  const schemes = [
    {
      name: "PM-KISAN",
      desc: "Get ₹6,000 yearly support directly to your bank account.",
      audio: "/audio/pmkisan.mp3",
    },
    {
      name: "Crop Insurance (PMFBY)",
      desc: "Insurance for your crops against flood, drought, or pests.",
      audio: "/audio/pmfby.mp3",
    },
  ];

  // Play audio mock
  const playAudio = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  return (
    <div className="feature-screen training-schemes-screen">
      <h2>👨‍🌾 Training & 🏛️ Schemes</h2>

      {/* Training Section */}
      <section>
        <h3><BookOpen /> Farmer Training</h3>
        <div className="cards-container">
          {trainings.map((t) => (
            <div key={t.title} className="training-card">
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
              <button onClick={() => playAudio(t.audio)} className="audio-btn">
                <Volume2 size={20} /> Listen
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Schemes Section */}
      <section className="alerts-section">
        <h3><Award /> Govt. Schemes</h3>
        <div className="cards-container">
          {schemes.map((s) => (
            <div key={s.name} className="scheme-card">
              <h4>{s.name}</h4>
              <p>{s.desc}</p>
              <button onClick={() => playAudio(s.audio)} className="audio-btn">
                <Volume2 size={20} /> Listen
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
