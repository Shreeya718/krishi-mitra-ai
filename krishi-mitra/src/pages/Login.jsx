import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleSendOTP = () => {
    if (!phone.match(/^\d{10}$/)) {
      alert("Enter a valid 10-digit phone number");
      return;
    }
    navigate("/otp", { state: { phone } });
  };

  return (
    <div className="auth-screen">
      <h2>Login</h2>
      <input
        type="tel"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>
    </div>
  );
}
