import "./MarketAnalysis.css";

export default function Market() {
  const dummyMarket = [
    { 
      crop: "Tomato", 
      price: "₹25/kg", 
      img: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg" 
    },
    { 
      crop: "Potato", 
      price: "₹20/kg", 
      img: "https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_1280.jpg" 
    },
    { 
      crop: "Rice", 
      price: "₹50/kg", 
      img: "https://static.vecteezy.com/system/resources/previews/000/130/848/large_2x/rice-crop-flowers-in-the-field-vector.jpg" 
    },
  ];

  return (
    <div className="feature-screen">
      <h2>Market Prices</h2>

      {/* Cards for crops */}
      <div className="cards-container">
        {dummyMarket.map((item) => (
          <div key={item.crop} className="market-card">
            <img src={item.img} alt={item.crop} />
            <h3>{item.crop}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      {/* AI Analysis Section */}
      <div className="ai-analysis">
        <h3>🤖 AI Market Analysis</h3>
        <p>
          Based on the latest market data, <strong>Tomato</strong> prices are slightly low this week — 
          consider storing or selling in local markets for better margins. 
          <br /><br />
          <strong>Potato</strong> demand is stable — bulk selling to wholesalers may yield steady profits. 
          <br /><br />
          <strong>Rice</strong> prices are rising due to export demand — a good time to sell directly 
          to millers for higher returns. 
        </p>
        <p className="tip">
          💡 <em>Tip: AI helps farmers decide the right time & place to sell for maximum profit.</em>
        </p>
      </div>
    </div>
  );
  
}
