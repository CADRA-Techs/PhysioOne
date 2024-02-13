import React from "react";
import hexagonImg from "./assets/img/hexagen-group-3.png";
import handImg from "./assets/img/hand.png";
import heartImg from "./assets/img/heart-plus.png";

function HomeContactBanner() {
  return (
    <section class="book-appointment-section aos" data-aos="fade-up">
      <div class="container">
        <div class="book-appointment-ten text-center">
          <div class="book-section-bg">
            <img src={hexagonImg} alt />
            <img src={handImg} alt />
            <img src={heartImg} alt />
          </div>
          <h2>Book An Appointment Today</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div class="appointment-btn-group">
            <a href="booking.html" class="appointment-blue-btn">
              Start a Consult
            </a>
            <a href="pricing.html">Click Our Plan</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContactBanner;
