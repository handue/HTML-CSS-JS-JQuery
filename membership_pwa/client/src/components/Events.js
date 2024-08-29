// src/components/Events.js
import React from 'react';

function Events() {
  return (
    <div id="eventsSection" className="content-section">
      <h2>Upcoming Exclusive Events</h2>
      <div className="event-item">
        <i className="fas fa-spa"></i>
        <div className="item-content">
          <div className="item-title">Massage Experience</div>
          <div className="item-description">
            Indulge in a luxurious full-body massage by our expert
            therapists - June 15, 2024
          </div>
        </div>
      </div>
      <div className="event-item">
        <i className="fas fa-pump-soap"></i>
        <div className="item-content">
          <div className="item-title">Skincare Service</div>
          <div className="item-description">
            Revitalize your skin with our premium facial treatments - July
            22, 2024
          </div>
        </div>
      </div>
      <div className="event-item">
        <i className="fas fa-coffee"></i>
        <div className="item-content">
          <div className="item-title">Enjoy Cafe For Free</div>
          <div className="item-description">
            Savor complimentary gourmet coffee and pastries in our exclusive
            lounge - August 5, 2024
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
