import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home.jsx";
import Prague from "./components/prague.jsx";
import Austria from "./components/austria.jsx";
import Croatia from "./components/croatia.jsx";
import Guide from "./components/guide.jsx";
import Guide1 from "./components/guide1.jsx";
import Guide2 from "./components/guide2.jsx";

function App() {
  return (
    <div className="app-container">
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/Prague" element={<Prague />} />
          <Route path="/guide1" element={<Guide1 />} /> 

          <Route path="/Austria" element={<Austria />} />
          <Route path="/guide2" element={<Guide2 />} /> 

          <Route path="/Croatia" element={<Croatia />} />
          <Route path="/guide" element={<Guide />} /> {/* 👈 Add this */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
