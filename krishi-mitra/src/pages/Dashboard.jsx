import { useNavigate } from "react-router-dom";
import TileAction from "../components/TileAction";
import {
  CloudSun,
  Bell,
  Users,
  PhoneCall,
  ShieldCheck,
  MapPin,
  BookOpen,
  MessageSquare // Ask AI
} from "lucide-react";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const tiles = [
    { title: "Weather & Pest Alerts", icon: <CloudSun size={32} />, path: "/weather-pest" }, // merged feature
    { title: "Training & Schemes", icon: <BookOpen size={32} />, path: "/training-schemes" }, // new feature
    { title: "Ask AI", icon: <MessageSquare size={32} />, path: "/query" }, // kept Ask AI
    { title: "Notifications", icon: <Bell size={32} />, path: "/notifications" },
    { title: "Local Market Support", icon: <MapPin size={32} />, path: "/local-market" },
    { title: "Community Forum", icon: <Users size={32} />, path: "/community-forum" }, // ✅ fixed path
    { title: "Farmer Helpline", icon: <PhoneCall size={32} />, path: "/helpline" },
    { title: "Secure Ledger", icon: <ShieldCheck size={32} />, path: "/ledger" },
  ];

  return (
    <div className="dashboard-screen">
      <div className="overlay">
        <h1 className="dashboard-title">🌱 KrishiMitra Dashboard 🌾</h1>
        <div className="tiles-container">
          {tiles.map((tile) => (
            <TileAction
              key={tile.title}
              title={tile.title}
              icon={tile.icon}
              onClick={() => navigate(tile.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
