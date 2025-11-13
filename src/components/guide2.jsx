import React from "react";
import "./guide2.css"; 


const Guide2 = () => {
  return (
    <div className="christmas-guide">
      <div className="snow"></div>

      <h2 className="guide-title">🎄 Merry Christmas Trip Guide 🎅</h2>
      <p className="guide-intro">
        Welcome to your festive trip guide for <strong>Austria!</strong>
      </p>

      <div className="guide-card">
        <h3>✨ Itinerary Highlights</h3>
        <ul>
          <li>🕯️ Schonbrunn Palace and gardens tour in Vienna</li>
          <li>🍷 Enjoy christmas market & ice creams</li>
          <li>one day trip to Salzburg City Card</li>
          <li>🎁 Hallstatt Day Tour from Salzburg</li>
        </ul>
      </div>

      <div className="guide-card">
        <h3>🎅 Tips for a Magical Holiday</h3>
        <p>
         <li>Dress warmly, pack your holiday spirit 🎁</li> 
         <li>📸 “Let’s get lots of photos and make new memories!”</li>
        </p>
      </div>

      <footer className="guide-footer">
        ❄️ Wishing you a Merry Christmas and a Joyful Journey! ❄️
      </footer>
 </div>
  );
};

export default Guide2;