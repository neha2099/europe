import React from "react";
import "./guide1.css"; 


const Guide1 = () => {
  return (
    <div className="christmas-guide">
      <div className="snow"></div>

      <h2 className="guide-title">🎄 Merry Christmas Trip Guide 🎅</h2>
      <p className="guide-intro">
        Welcome to your festive trip guide for <strong>Prague!</strong>
      </p>

      <div className="guide-card">
        <h3>✨ Itinerary Highlights</h3>
        <ul>
          <li>🕯️ One day trip to Cesky Krumlov taking Train</li>
          <li>Old Town , Prague Castle Walking Tour, charles bridge visiting</li>
          <li>🍷 Enjoy christmas market & ice creams</li>
          <li>🎁 One day trip to BRNO</li>
        </ul>
      </div>

      <div className="guide-card">
        <h3>🎅 Tips for a Magical Holiday</h3>
        <p>
          <li>Lets Dress warmly, Jackets on top any dress 🎁</li>
          <li>📸 “Let’s get lots of photos and make new memories!”</li> 
        </p>
      </div>

      <footer className="guide-footer">
        ❄️ Wishing you a Merry Christmas and a Joyful Journey! ❄️
      </footer>
 </div>
  );
};

export default Guide1;