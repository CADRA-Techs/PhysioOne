import React from "react";
import "./assets/css/NeedToKnow.css";
import hexagen from "./assets/img/hexagen-group-1.png";
// import hexagon from "./assets/img/hexagon-group-2.png";
import img1 from "./assets/img/hreat-pulse.svg";
function NeedToKnow() {
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
                  Need To Know <span>Cardiac Conditions</span>
                </h2>
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tag-list active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#content_1"
                      type="button"
                      role="tab"
                      aria-controls="content_1"
                      aria-selected="true"
                    >
                      Heart valve disease
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tag-list"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#content_2"
                      type="button"
                      role="tab"
                      aria-controls="content_2"
                      aria-selected="false"
                    >
                      Heart failure
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tag-list"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#content_3"
                      type="button"
                      role="tab"
                      aria-controls="content_3"
                      aria-selected="false"
                    >
                      Pacemakers and defibrillators
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="content_1"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="need-to-know-content">
                      <h3>Heart valve disease</h3>
                      <p>
                        If one of the valves in your heart becomes diseased it
                        can affect the flow of blood. This can happen in one of
                        two ways: valve stenosis (where the valve does not fully
                        open and obstructs or restricts flow) or valve
                        incompetence (where the valve does not close properly
                        and blood is allowed to leak backwards)....
                      </p>
                      <a
                        href="booking.html"
                        className=" need-to-know-content-btn"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="content_2"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="need-to-know-content">
                      <h3>Heart failure</h3>
                      <p>
                        If one of the valves in your heart becomes diseased it
                        can affect the flow of blood. This can happen in one of
                        two ways: valve stenosis (where the valve does not fully
                        open and obstructs or restricts flow) or valve
                        incompetence (where the valve does not close properly
                        and blood is allowed to leak backwards)....
                      </p>
                      <a
                        href="booking.html"
                        className=" need-to-know-content-btn"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="content_3"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="need-to-know-content">
                      <h3>Pacemakers and defibrillators</h3>
                      <p>
                        If one of the valves in your heart becomes diseased it
                        can affect the flow of blood. This can happen in one of
                        two ways: valve stenosis (where the valve does not fully
                        open and obstructs or restricts flow) or valve
                        incompetence (where the valve does not close properly
                        and blood is allowed to leak backwards)....
                      </p>
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
                  <div className="box-detail">
                    <div className="steps-list-box">
                      <div className="steps-list-img">
                        <span>1</span>
                        <img
                          src={img1}
                          className="img-fluid"
                          alt="img-doctor"
                        />
                      </div>
                      <h6>Choose Your Doctor</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing..</p>
                    </div>
                  </div>
                  <div className="box-detail">
                    <div className="steps-list-box">
                      <div className="steps-list-img">
                        <span>3</span>
                        <img
                          src={img1}
                          className="img-fluid"
                          alt="img-doctor2"
                        />
                      </div>
                      <h6>Consult with doctor</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing..</p>
                    </div>
                  </div>
                </div>
                <div className="gallery-box-left">
                  <div className="box-detail mb-4 ">
                    <div className="steps-list-box">
                      <div className="steps-list-img">
                        <span>2</span>
                        <img
                          src={img1}
                          className="img-fluid"
                          alt="img-set-appointment"
                        />
                      </div>
                      <h6>Set Appointment</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing..</p>
                    </div>
                  </div>
                  <div className="box-detail">
                    <div className="steps-list-box">
                      <div className="steps-list-img">
                        <span>4</span>
                        <img
                          src={img1}
                          className="img-fluid"
                          alt="img-get-recommendation"
                        />
                      </div>
                      <h6>Get recommendation</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing..</p>
                    </div>
                  </div>
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
