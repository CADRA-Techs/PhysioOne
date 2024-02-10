import React from "react";
import img1 from "./assets/img/about-img1.jpg";
import img2 from "./assets/img/about-img2.jpg";
import img3 from "./assets/img/about-img3.jpg";
import img4 from "./assets/img/phone-icon.svg";
import partner1 from "../about/assets/img/partners/1.jpg";
import partner2 from "../about/assets/img/partners/2.jpg";
import partner3 from "../about/assets/img/partners/3.jpg";
import partner4 from "../about/assets/img/partners/4.jpg";
import partner5 from "../about/assets/img/partners/5.jpg";
import partner6 from "../about/assets/img/partners/6.jpg";
import partner7 from "../about/assets/img/partners/7.jpg";
import Banners from "./banners";
import FullScreenTestimonals from "../../components/FullScreenTestimonals/FullScreenTestimonals";
import BreadCrumb from "../../components/Breadcrumb/BreadCrumb";

function About() {
  const partnetImage = [partner1, partner2, partner3, partner4, partner5];

  const pageDetails = {
    title: "About Us",
    subTitle: "About",
    previousTitle: "Home",
    previousUrl: "/home",
  };

  const PartnerDetails = () => (
    <section className="partner-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Partners</span>
          <h2>Featured Customer & Partners</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse
          </p>
        </div>

        <div className="partner-list">
          {partnetImage.map((imageSrc, idx) => (
            <div key={idx} className="partner-item">
              <img src={imageSrc} alt="image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <>
      <BreadCrumb page={pageDetails} />
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
                        <img src={img2} alt="About Image 2" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-inner-img">
                      <div className="about-box">
                        <h4>Over 25+ Years Experience</h4>
                      </div>
                      <div className="about-img">
                        <img
                          src={img3}
                          className="img-fluid"
                          alt="Image Fuild"
                        />
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
                  Cultivating the philosophy that movement is indeed medicine, Physio One is dedicated to empowering individuals on their journey to wellness. 
                  Through our comprehensive approach to physiotherapy, we harness the inherent healing potential of the human body.
                   Whether recovering from injury, managing chronic conditions, or striving for peak performance, 
                   our expert team crafts tailored treatment plans that prioritize movement as the cornerstone of rehabilitation and vitality.
                  </p>
                  <p>
                  At Physio One, we don't just treat symptoms; we ignite the body's innate capacity to heal through motion,
                   guiding our patients toward restored function, enhanced well-being, and a life in motion.
                  </p>
                </div>
                <div className="about-contact">
                  <div className="about-contact-icon">
                    <span>
                      <img src={img4} alt="Contact Image" />
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
      <Banners />
      <FullScreenTestimonals />
      <PartnerDetails />
    </>
  );
}

export default About;
