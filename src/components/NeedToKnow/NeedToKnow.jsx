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
  const [activeTab, setActiveTab] = useState("why_physio");
  const needToKnowContent = {
    why_physio: {
      buttonLabel: "Why Physio",
      header: "Heart valve disease",
      description:
        "If one of the valves in your heart becomes diseased it can affect the flow of blood. This can happen in one of two ways: valve stenosis (where the valve does not fully open and obstructs or restricts flow) or valve incompetence (where the valve does not close properly and blood is allowed to leak backwards)....",
    },
    what_physio: {
      buttonLabel: "What Physio",
      header: "Heart failure",
      description:
        " If one of the valves in your heart becomes diseased it can affect the flow of blood. This can happen in one of two ways: valve stenosis (where the valve does not fully open and obstructs or restricts flow) or valve incompetence (where the valve does not close properly and blood is allowed to leak backwards)....",
    },
    when_physio: {
      buttonLabel: "When Physio",
      header: "Pacemakers and defibrillators",
      description:
        " If one of the valves in your heart becomes diseased it can affect the flow of blood. This can happen in one of two ways: valve stenosis (where the valve does not fully open and obstructs or restricts flow) or valve incompetence (where the valve does not close properly and blood is allowed to leak backwards)....",
    },
  };
  return (
    <div className="main-wrapper home-ten">
      <section className="need-to-know-section">
        <div class="section-floating-bg">
          <img src={hexagen} alt />
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
                    <li className="nav-item" role="presentation">
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
                      <a
                        href="booking.html"
                        className=" need-to-know-content-btn"
                      >
                        Read More
                      </a>
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
