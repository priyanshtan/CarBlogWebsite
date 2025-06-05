import React from 'react';
import './Header.css';
import logoDark from './logo-dark.png';
import logoLight from './logo-light.png';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo-section">
        <img src={logoDark} alt="TorqueTalks Logo" className="logo light-logo" />
        <img src={logoLight} alt="TorqueTalks Logo" className="logo dark-logo" />
        <div className="blog-title">
          <h1><span>T</span>orque<span>T</span>alks</h1>
          <p className="tagline">The automobile blogging pioneer</p>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">CAR NEWS</a></li>
          <li><a href="#">REVIEWS</a></li>
          <li><a href="#">FEATURED</a></li>
          <li><a href="#">GALLERY</a></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;