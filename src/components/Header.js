import React from 'react';
import './Header.css';  // Import the CSS

const Header = () => {
  return (
    <div className="header">
      <h1>CogniSteer</h1>
      <button className="menu-button" onClick={() => { /* Logic for opening menu */ }}>
        Menu
      </button>
    </div>
  );
};

export default Header;
