import "./Ledger.css";

export default function Ledger() {
  const ledgerData = [
    {
      id: 1,
      query: "🌾 How to control pest attack in paddy?",
      response: "Use neem oil spray (3%) every 10 days. Safe and effective.",
      officer: "AI Suggestion"
    },
    {
      id: 2,
      query: "🍌 What fertilizer is best for banana crop?",
      response: "Apply urea and potash in 3:2 ratio after 2 months of planting.",
      officer: "Agri Officer - Palakkad"
    },
    {
      id: 3,
      query: "☔ Will it rain tomorrow in Thrissur?",
      response: "Yes, light showers expected in evening. Plan irrigation accordingly.",
      officer: "AI Suggestion"
    }
  ];

  return (
    <div className="ledger-screen">
      <h2>🔒 Secure Ledger</h2>
      <p className="subtitle">
        All queries & responses are stored safely for transparency 📜
      </p>

      <div className="ledger-list">
        {ledgerData.map((entry) => (
          <div key={entry.id} className="ledger-card">
            <p className="query"><b>👨‍🌾 Query:</b> {entry.query}</p>
            <p className="response"><b>✅ Response:</b> {entry.response}</p>
            <p className="officer"><b>👨‍💼 By:</b> {entry.officer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
