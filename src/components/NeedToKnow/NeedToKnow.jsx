import React, { useState } from "react";
import "./assets/css/NeedToKnow.css";
import hexagen from "./assets/img/hexagen-group-1.png";
import Img1 from "./assets/img/1.png";
import img2 from "./assets/img/2.png";
import img3 from "./assets/img/3.png";
import img4 from "./assets/img/4.png";
// import hexagon from "./assets/img/hexagon-group-2.png";
import img1 from "./assets/img/hreat-pulse.svg";
function NeedToKnow() {
  const [activeTab, setActiveTab] = useState("Musculoskeletal");
  const needToKnowContent = {
    Musculoskeletal: {
      buttonLabel: "Musculoskeletal",
      header: "Musculoskeletal Injuries",
      description:
        "Physiotherapy is often prescribed for injuries to muscles, bones, joints, ligaments, or tendons. This includes conditions such as sprains, strains, fractures, arthritis, and post-surgical rehabilitation.",
    },
    Neurological: {
      buttonLabel: "Neurological",
      header: "Neurological Disorders",
      description:
        "Physiotherapy plays a crucial role in managing neurological conditions such as stroke, Parkinson's disease, multiple sclerosis, spinal cord injuries, and traumatic brain injuries. It focuses on improving mobility, balance, coordination, and functional independence.",
    },
    Cardiorespiratory: {
      buttonLabel: "Cardiorespiratory",
      header: "Cardiorespiratory Conditions",
      description:
        "Physiotherapy interventions are beneficial for individuals with cardiorespiratory disorders like chronic obstructive pulmonary disease (COPD), asthma, cystic fibrosis, and post-cardiac surgery rehabilitation. It involves breathing exercises, airway clearance techniques, and aerobic conditioning to enhance respiratory function and endurance.",
    },
    Chronic: {
      buttonLabel: "Chronic Pain",
      header: "Chronic Pain Management",
      description:
        "Physiotherapy offers non-pharmacological approaches to manage chronic pain conditions such as low back pain, neck pain, fibromyalgia, and osteoarthritis. Treatment may include manual therapy, therapeutic exercise, electrotherapy modalities, and pain education to reduce pain intensity and improve functional abilities.",
    },
  };
  return (
    <div className="main-wrapper home-ten">
      <section className="need-to-know-section">
        <div className="section-floating-bg">
          <img src={hexagen} alt="hexagon" />
          {/* <img src={hexagon} alt /> */}
        </div>

        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 col-sm-12 aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="section-header-one section-header-slider">
                <h2 className="section-title-one">
                  Need To Know <span>Physiotheraphy Conditions</span>
                </h2>
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  {Object.entries(needToKnowContent).map(([key, bText]) => (
                    <li key={key} className="nav-item" role="presentation">
                      <button
                        className={`nav-link tag-list ${
                          activeTab === key ? "active" : ""
                        }`}
                        id="pills-home-tab"
                        onClick={() => {
                          setActiveTab(key);
                        }}
                      >
                        {bText.buttonLabel}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="content_1"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="need-to-know-content">
                      <h3>{needToKnowContent[activeTab].header}</h3>
                      <p>{needToKnowContent[activeTab].description}</p>
                      {/* <a
                        href="booking.html"
                        className=" need-to-know-content-btn"
                      >
                        Read More
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 aos">
              <div className="gallery-box-block">
                <div className="gallery-box-right">
                  <div
                    className="box-detail"
                    style={{
                      background: `url(${Img1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    className="box-detail"
                    style={{
                      background: `url(${img2})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <div className="gallery-box-left">
                  <div
                    className="box-detail mb-4 "
                    style={{
                      background: `url(${img3})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* <div className="steps-list-box">
                      <div className="steps-list-img">
                        <span>2</span>
                        <img
                          src={Img1}
                          className="img-fluid"
                          alt="img-set-appointment"
                        />
                      </div>
                      <h6>Set Appointment</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing..</p>
                    </div> */}
                  </div>
                  <div
                    className="box-detail"
                    style={{
                      background: `url(${img4})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NeedToKnow;
