// src/components/Benefits.js
import React from 'react';

function Benefits() {
  return (
    <div id="benefitsSection" className="content-section">
      <h2>Your Exclusive Benefits</h2>
      <div className="benefit-item">
        <i className="fas fa-star"></i>
        <div className="item-content">
          <div className="item-title">Priority Access</div>
          <div className="item-description">
            Be first in line for new releases and limited editions.
          </div>
        </div>
      </div>
      <div className="benefit-item">
        <i className="fas fa-concierge-bell"></i>
        <div className="item-content">
          <div className="item-title">Personal Concierge</div>
          <div className="item-description">
            24/7 assistance for all your needs and inquiries.
          </div>
        </div>
      </div>
      <div className="benefit-item">
        <i className="fas fa-ticket-alt"></i>
        <div className="item-content">
          <div className="item-title">Exclusive Events</div>
          <div className="item-description">
            VIP invitations to high-profile gatherings and experiences.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;