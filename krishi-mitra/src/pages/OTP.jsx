import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./OTP.css";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const phone = location.state?.phone || "";

  const handleVerify = () => {
    if (otp.length !== 6) return alert("Enter 6-digit OTP");
    navigate("/language");
  };

  return (
    <div className="otp-screen">
      <div className="otp-card">
        <h2>Verify Phone</h2>
        <p>OTP sent to {phone}</p>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="otp-input"
        />
        <button className="btn" onClick={handleVerify}>Verify</button>
      </div>
    </div>
  );
}
