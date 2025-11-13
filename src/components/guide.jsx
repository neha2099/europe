import React from "react";
import "./guide.css"; 

const Guide = () => {
  return (
    <div className="christmas-guide">
      <div className="snow"></div>

      <h2 className="guide-title">🎄 Merry Christmas Trip Guide 🎅</h2>
      <p className="guide-intro">
        Welcome to your trip guide for <strong>Budapest!</strong>
      </p>

      <div className="guide-card">
        <h3>✨ Itinerary Highlights</h3>
        <ul>
          <li>🕯️ Fisher'sman Bastion, stephen's cruch, thermal bath</li>
          <li>🍷 Enjoy chimney Food market(chimney cake),sasuages</li>
          <li>🎁 Budapest Evening Cruise with Entertainment</li>
        </ul>
      </div>

      <div className="guide-card">
        <h3>🎅 Tips for a Magical Holiday</h3>
        <p>
        <li>Thermal pants & shirts with Co-ord sets 🎁,</li>
        <li>Puffer Jackets on top with shoes,</li>
        <li>📸 “Let’s get lots of photos and make new memories!”</li>
        </p>
      </div>

      <footer className="guide-footer">
        ❄️ Wishing you a Merry Christmas and a Joyful Journey! ❄️
      </footer>
    </div>
  );
};

export default Guide;

