// src/components/BottomNav.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/home" className="nav-item" activeClassName="active">
        <i className="fas fa-home"></i>
        <span>Home</span>
      </NavLink>
      <NavLink to="/benefits" className="nav-item" activeClassName="active">
        <i className="fas fa-gift"></i>
        <span>Benefits</span>
      </NavLink>
      <NavLink to="/events" className="nav-item" activeClassName="active">
        <i className="fas fa-calendar-alt"></i>
        <span>Events</span>
      </NavLink>
      <NavLink to="/profile" className="nav-item" activeClassName="active">
        <i className="fas fa-user"></i>
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;