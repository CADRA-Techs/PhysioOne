import React from "react";
import hexagonImg from "./assets/img/hexagen-group-3.png";
import handImg from "./assets/img/hand.png";
import heartImg from "./assets/img/heart-plus.png";

function HomeContactBanner() {
  return (
    <div className="main-wrapper home-ten">
      <section className="book-appointment-section aos">
        <div className="container">
          <div className="book-appointment-ten text-center">
            <div className="book-section-bg">
              <img src={hexagonImg} alt="Hexagen Group" />
              <img src={handImg} alt="Hand" />
              <img src={heartImg} alt="Heart Plus" />
            </div>
            <h2>Book An Appointment Today</h2>
            <p>
              Take the first step towards pain-free living. Click here to book
              your physiotherapy session now
            </p>
            <div className="appointment-btn-group">
              <a href="/contact" className="appointment-blue-btn">
                Contact-Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeContactBanner;
