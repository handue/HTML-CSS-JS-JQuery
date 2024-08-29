// src/components/Header.js
import React from 'react';
import logo from '../images/Our_Logo_Combination_2023-01.png';

function Header() {
  return (
    <header>
      <div className="container">
        <img className="logo" src={logo} alt="Company Logo" />
      </div>
    </header>
  );
}

export default Header;