import React from "react";
import "./LocalMarket.css";
import { MapPin, DollarSign, Users, AlertTriangle } from "lucide-react";

export default function LocalMarket() {
  // Dummy local market data
  const buyers = [
    { name: "Rajesh Traders", location: "Bhubaneswar", crop: "Rice", price: 40 },
    { name: "Anil Agro", location: "Cuttack", crop: "Tomato", price: 25 },
    { name: "Sundar Farmers", location: "Puri", crop: "Potato", price: 18 },
  ];

  const alerts = [
    "Bulk buyer requests for Wheat in Bhubaneswar.",
    "Tomato price expected to rise in Cuttack next week.",
    "Government subsidy for pulses available this month."
  ];

  return (
    <div className="local-market-screen">
      <h1 className="local-market-title">📍 Local Market Support</h1>

      {/* Buyers Table */}
      <section className="buyers-section">
        <h2>Nearby Buyers & Vendors</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Crop</th>
              <th>Price (₹/kg)</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, index) => (
              <tr key={index}>
                <td>{buyer.name}</td>
                <td>{buyer.location}</td>
                <td>{buyer.crop}</td>
                <td>₹{buyer.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Market Alerts */}
      <section className="alerts-section">
        <h2><AlertTriangle size={20} /> Market Alerts & Offers</h2>
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>{alert}</li>
          ))}
        </ul>
      </section>

      {/* How It Helps */}
      <section className="benefits-section">
        <h2>How This Helps You</h2>
        <ul>
          <li>Direct connection with local buyers reduces middlemen.</li>
          <li>Know fair market prices for crops to maximize profit.</li>
          <li>Identify which crops are in demand locally.</li>
          <li>Get alerts on price trends, bulk requests, and government schemes.</li>
        </ul>
      </section>
    </div>
  );
}
