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
                        <h4>Over 10+ Years Experience</h4>
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
                    Welcome to Physio One, where rehabilitation meets
                    empowerment through movement. At the heart of our philosophy
                    lies the belief that movement is indeed medicine. With a
                    commitment to high-quality care at reasonable prices, we
                    specialize in evidence-based practices that ensure maximum
                    benefit for our patients.
                  </p>
                  <p>
                    Our dedicated team of experts excels in various domains
                    including manual therapy, exercise prescription,
                    biomechanical analysis, neurorehabilitation, advanced
                    therapeutics, cardiorespiratory rehabilitation, sports
                    injury prevention and management. Additionally, we offer
                    specialized care in geriatrics, pediatrics, and women's
                    health, along with academic-oriented programs and corporate
                    wellness initiatives.
                  </p>
                  <p>
                    Guided by the principle that the human body possesses
                    inherent healing potential, we tailor treatment plans to
                    prioritize movement as the cornerstone of rehabilitation and
                    vitality. Whether you're recovering from injury, managing
                    chronic conditions, or aiming for peak performance, we're
                    here to ignite your body's capacity to heal through motion.
                  </p>
                  <p>
                    At Physio One, we go beyond treating symptoms; we empower
                    our patients to embrace a life in motion, guiding them
                    towards restored function, enhanced well-being, and a
                    journey to wellness.
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
                    <h4>+91 93607 46496</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banners />
      <FullScreenTestimonals />
      {/* <PartnerDetails /> */}
    </>
  );
}

export default About;
