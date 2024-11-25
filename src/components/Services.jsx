import React from 'react';
import '../styles/services.css'
export default function Services() {
  return (
    <div>
      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">My services</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">Web Design</div>
                <p>Crafting responsive and visually appealing websites.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-chart-line"></i>
                <div className="text">Advertising</div>
                <p>Strategic advertising campaigns to boost your business.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-mobile-alt"></i>
                <div className="text">Apps Design</div>
                <p>Creating user-friendly and feature-rich mobile app designs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
