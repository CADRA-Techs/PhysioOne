import React from "react";
import choose1 from "./assets/img/banners/choose-01.svg";
import choose2 from "./assets/img/banners/choose-02.svg";
import choose3 from "./assets/img/banners/choose-03.svg";
import choose4 from "./assets/img/banners/choose-04.svg";
import shape1 from "./assets/img/banners/shape-06.png";
import shape2 from "./assets/img/banners/shape-07.png";
import way from "./assets/img/banners/way-img.png";

function Banners() {
  return (
    <>
      <section className="why-choose-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-inner-header text-center">
                <h2>Why Choose Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card why-choose-card w-100">
                <div className="card-body">
                  <div className="why-choose-icon">
                    <span>
                      <img src={choose1} alt="Why Choose Icon" />
                    </span>
                  </div>
                  <div className="why-choose-content">
                    <h4>Expertise and Experience</h4>
                    <p>
                      Highlight the qualifications and experience of your
                      physiotherapists, showcasing their expertise in various
                      treatment modalities and specialties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card why-choose-card w-100">
                <div className="card-body">
                  <div className="why-choose-icon">
                    <span>
                      <img src={choose2} alt="Why Choose Icon" />
                    </span>
                  </div>
                  <div className="why-choose-content">
                    <h4>Personalized Care</h4>
                    <p>
                      Emphasize your commitment to providing individualized
                      treatment plans tailored to each patient's unique needs
                      and goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card why-choose-card w-100">
                <div className="card-body">
                  <div className="why-choose-icon">
                    <span>
                      <img src={choose3} alt="Why Choose Icon" />
                    </span>
                  </div>
                  <div className="why-choose-content">
                    <h4>Evidence-Based Practices</h4>
                    <p>
                      Assure potential clients that your treatments are based on
                      the latest research and evidence-based practices, ensuring
                      the most effective and safest interventions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card why-choose-card w-100">
                <div className="card-body">
                  <div className="why-choose-icon">
                    <span>
                      <img src={choose4} alt="Why Choose Icon" />
                    </span>
                  </div>
                  <div className="why-choose-content">
                    <h4>Patient-Centered Approach</h4>
                    <p>
                      Communicate your focus on patient satisfaction and
                      comfort, with a compassionate and supportive environment
                      that prioritizes open communication and collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="way-section">
        <div className="container">
          <div className="way-bg">
            <div className="way-shapes-img">
              <div className="way-shapes-left">
                <img src={shape1} alt="Why Choose Icon" />
              </div>
              <div className="way-shapes-right">
                <img src={shape2} alt="Why Choose Icon" />
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-lg-7 col-md-12">
                <div className="section-inner-header way-inner-header mb-0">
                  <h2>Where one step leads to infinite wellness: physio-one</h2>
                  <p>
                    Committed to personalized care and holistic wellness
                    solutions. At Physio-One, we're dedicated to helping you
                    achieve your health goals with expert guidance and
                    compassionate support. Experience the difference in your
                    journey to optimal well-being today
                  </p>
                  <a href="/contact" className="btn btn-primary">
                    Contact With Us
                  </a>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="way-img">
                  <img src={way} className="img-fluid" alt="Why Choose Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banners;
