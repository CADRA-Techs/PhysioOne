import React from "react";
import testimonals from "./assets/img/testimonials.jpg";
import client1 from "./assets/img/1.jpg";
import client2 from "./assets/img/2.jpg";
import client3 from "./assets/img/3.jpg";

function FullScreenTestimonals() {
  return (
    <>
      <section className="testimonials-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="testimonials-image">
                <div className="image">
                  <img src={testimonals} alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonials-slider owl-carousel owl-theme">
                <div className="testimonials-item">
                  <div className="content">
                    <span>Testimonials</span>
                    <h3>What Client’s Say About Us</h3>
                    <div className="icon">
                      <i className="flaticon-left-quote"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem Ipsum is simply dummy text of the printing
                      and
                    </p>

                    <div className="info">
                      <img src={client1} alt="image" />
                      <h4>Alison Jack</h4>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>

                <div className="testimonials-item">
                  <div className="content">
                    <span>Testimonials</span>
                    <h3>What Client’s Say About Us</h3>
                    <div className="icon">
                      <i className="flaticon-left-quote"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem Ipsum is simply dummy text of the printing
                      and
                    </p>

                    <div className="info">
                      <img src={client2} alt="image" />
                      <h4>Alex Maxwell</h4>
                      <p>Web Designer</p>
                    </div>
                  </div>
                </div>

                <div className="testimonials-item">
                  <div className="content">
                    <span>Testimonials</span>
                    <h3>What Client’s Say About Us</h3>
                    <div className="icon">
                      <i className="flaticon-left-quote"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem Ipsum is simply dummy text of the printing
                      and
                    </p>

                    <div className="info">
                      <img src={client3} alt="image" />
                      <h4>Steven Smith</h4>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FullScreenTestimonals;
