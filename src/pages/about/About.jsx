import React from "react";
import img1 from "./assets/img/about-img1.jpg";
import img2 from "./assets/img/about-img2.jpg";
import img3 from "./assets/img/about-img3.jpg";
import img4 from "./assets/img/phone-icon.svg";

function About() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img-info">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-inner-img">
                      <div className="about-img">
                        <img src={img1} alt="About Image 1" />
                      </div>
                      <div className="about-img">
                        <img src={img2} alt />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-inner-img">
                      <div className="about-box">
                        <h4>Over 25+ Years Experience</h4>
                      </div>
                      <div className="about-img">
                        <img src={img3} className="img-fluid" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-inner-header about-inner-header">
                <h6>About Our Company</h6>
                <h2>
                  We Are Always Ensure Best Medical Treatment For Your Health
                </h2>
              </div>
              <div className="about-content">
                <div className="about-content-details">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                    accusantium doloremque eaque ipsa quae architecto beatae
                    vitae dicta sunt explicabo.
                  </p>
                </div>
                <div className="about-contact">
                  <div className="about-contact-icon">
                    <span>
                      <img src={img4} alt />
                    </span>
                  </div>
                  <div className="about-contact-text">
                    <p>Need Emergency?</p>
                    <h4>+1 315 369 5943</h4>
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

export default About;
