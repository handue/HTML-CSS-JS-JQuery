// src/components/Profile.js
import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector(state => state.auth.user);

  return (
    <div id="profileSection" className="content-section">
      <h2>Your Membership Profile</h2>
      <div className="profile-item">
        <i className="fas fa-crown"></i>
        <div className="item-content">
          <div className="item-title">Membership Tier</div>
          <div className="item-description">Platinum Elite</div>
        </div>
      </div>
      <div className="profile-item">
        <i className="fas fa-calendar-check"></i>
        <div className="item-content">
          <div className="item-title">Member Since</div>
          <div className="item-description">January 2022</div>
        </div>
      </div>
      <div className="profile-item">
        <i className="fas fa-gem"></i>
        <div className="item-content">
          <div className="item-title">Reward Points</div>
          <div className="item-description">75,000 points</div>
        </div>
      </div>
      <div className="profile-item">
        <i className="fas fa-user"></i>
        <div className="item-content">
          <div className="item-title">Member ID</div>
          <div className="item-description">{user ? user.memberID : 'N/A'}</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;