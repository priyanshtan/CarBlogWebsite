import React from 'react';
import './Header.css';
import logoDark from './logo-dark.png';
import logoLight from './logo-light.png'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <header className="main-header">
  <div className="logo-section">
    <img src={logoDark} alt="TorqueTalks Logo" className="logo light-logo" />
    <img src={logoLight} alt="TorqueTalks Logo" className="logo dark-logo" />
    <div className="blog-title">
      <h1>
        <span>T</span>orque<span>T</span>alks
      </h1>
      <p className="tagline">The automobile blogging pioneer</p>
    </div>
  </div>
  <nav className="navbar">
    <ul>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/news">CAR NEWS</Link>
      </li>
      <li>
        <Link to="/reviews">REVIEWS</Link>
      </li>
      <li>
        <Link to="/featured">FEATURED</Link>
      </li>
      <li>
        <Link to="/gallery">GALLERY</Link>
      </li>
    </ul>
  </nav>
</header>

  );
};
export default Header;