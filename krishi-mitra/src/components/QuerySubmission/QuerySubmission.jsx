import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mic, Send, Image } from "lucide-react";
import useSpeechRecognition from "../../hooks/useSpeechRecognition";
import "./QuerySubmission.css";

export default function QuerySubmission() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [image, setImage] = useState(null);
  const { listening, transcript, toggleListening } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) setQuery(transcript);
  }, [transcript]);

  const handleSubmit = () => {
    if (!query && !image) return alert("Please enter a query or upload an image.");
    navigate("/results", { state: { query, image } });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="query-screen">
      <h2>Ask AI</h2>
      <p className="query-desc">
        Get instant answers about crops, fertilizers, pests, irrigation, or market prices. You can also upload an image.
      </p>

      <div className="query-box">
        <input
          type="text"
          placeholder="Type your query or use microphone..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className={`mic-btn ${listening ? "listening" : ""}`}
          onClick={toggleListening}
        >
          <Mic size={24} />
        </button>
        <button className="send-btn" onClick={handleSubmit}>
          <Send size={24} />
        </button>
      </div>

      <div className="image-upload">
        <label htmlFor="imageInput" className="image-label">
          <Image size={24} /> Upload Image
        </label>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        {image && (
          <div className="preview">
            <img src={image} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
}
