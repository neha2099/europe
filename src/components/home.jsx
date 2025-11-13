import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./home.css";
import logo from "../assets/logo.png";
import Img from "../assets/sane.jpeg"; // Hero image
import Img1 from "../assets/prague.jpg";
import Img2 from "../assets/vienna.jpg";
import Img3 from "../assets/croatia.avif";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import BoyImg from "../assets/boy.jpeg";
import GirlImg from "../assets/girl.jpeg";
import SImg from"../assets/New Project.gif";
import NImg from "../assets/New Project (1).gif";



const HomePage = () => {
  const [modalImg, setModalImg] = useState(null); // Track which image to show

  const openModal = (img) => {
    setModalImg(img);
  };

  const closeModal = () => {
    setModalImg(null);

      };
  // Inside your HomePage component, just before return
const snowflakes = Array.from({ length: 30 }, (_, i) => (
  <div
    key={i}
    className="snowflake"
    style={{
      left: `${Math.random() * 100}vw`,
      fontSize: `${Math.random() * 20 + 10}px`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      animationDelay: `${Math.random() * 5}s`
    }}
  >❄️</div>
));

const lights = Array.from({ length: 20 }, (_, i) => (
  <div
    key={i}
    className="light"
    style={{
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 3 + 1}s`
    }}
  ></div>
));

  return (
    <div className="home-container christmas-theme">
  {snowflakes}
  {lights}
      {/* Navbar */}
      <nav className="navbar christmas-navbar">
        <div className="logo">
          <img src={logo} alt="Europe Logo" />
        </div>
        <h1>🎅 Jingle Bells Trip to Europe 🎄</h1>
        <div className="options">
          <a href="#">home</a>
          <a href="#">travel</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </div>
      </nav>

      {/* Hero Section */}
 {/* Hero Section */}
<section className="hero-section christmas-hero">
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <div className="hero-text">
      <h1>Europe ❄️</h1>
      <p>“🎄 Europe at Christmas is magical! Embrace all cultures and festive lights.”</p>
      <button className="hero-btn">Explore Now</button>
    </div>
    <div className="hero-image">
      <img src={Img} alt="Trip" />
    </div>
  </div>
</section>


      {/* Categories Section */}
      <section className="categories-section christmas-categories">
        <h2>Festive Destinations 🎁</h2>
        <div className="categories-grid">
          <Link to="/Prague" className="category-card christmas-card">
            <img src={Img1} alt="Prague" />
            <span>Prague 🎄</span>
          </Link>
          <Link to="/Austria" className="category-card christmas-card">
            <img src={Img2} alt="Austria" />
            <span>Austria ⛄</span>
          </Link>
          <Link to="/Croatia" className="category-card christmas-card">
            <img src={Img3} alt="Croatia" />
            <span>Croatia 🎁</span>
          </Link>
        </div>
      </section>

{/* Funny Conversation Section */}
  <section className="funny-characters-section">
      <h2 className="conversation-heading">Pre-Trip Chat 💬</h2>
      <div className="conversation">
        {/* Husband Bubble */}
        <div
          className="chat-bubble husband"
          onClick={() => openModal(SImg)}
        >
          <img src={BoyImg} alt="Husband" className="chat-avatar" />
          <p>"Do I really need to pack this many sweaters?"</p>
        </div>

        {/* Wife Bubble */}
        <div
          className="chat-bubble wife"
          onClick={() => openModal(NImg)}
        >
          <img src={GirlImg} alt="Wife" className="chat-avatar" />
          <p>"Yes, and don’t forget your attitude — it’s gonna be cold too!"</p>
        </div>
      </div>

      {/* Modal */}
      {modalImg && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImg} alt="popup" />
        </div>
      )}
    </section>



      {/* Footer */}
      <footer className="footer christmas-footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h3>Jingle Bells Trip</h3>
            <p>Merry Christmas! Explore, eat, and enjoy festive Europe.</p>
          </div>

          <div className="footer-section contact">
            <h4>Contact</h4>
            <p>Email: nehabyalal9920@gmail.com</p>
            <p>Phone: 9353385951</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
                <FacebookIcon style={{ fontSize: 30, color: '#4267B2' }} />
              </a>
              <a href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer">
                <TwitterIcon style={{ fontSize: 30, color: '#1DA1F2' }} />
              </a>
              <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer">
                <InstagramIcon style={{ fontSize: 30, color: '#C13584' }} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Jingle Bells Trips 🎅. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

