import React from "react";
import choose1 from "./assets/img/banners/choose-01.svg";
import choose2 from "./assets/img/banners/choose-02.svg";
import choose3 from "./assets/img/banners/choose-03.svg";
import choose4 from "./assets/img/banners/choose-04.svg";
import shape1 from "./assets/img/banners/shape-06.png";
import shape2 from "./assets/img/banners/shape-07.png";
import way from "./assets/img/banners/way-img.png";
import Testimonals from "./testimonals";

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
                      <img src={choose1} alt />
                    </span>
                  </div>
                  <div className="why-choose-content">
                    <h4>Qualified Staff of Doctors</h4>
                    <p>
                      Lorem ipsum sit amet consectetur incididunt ut labore et
                      exercitation ullamco laboris nisi dolore magna enim veniam
                      aliqua.{" "}
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
                      <img src={choose2} alt />
                    </span>
                  </div>
                  <div className="why-choose-content">
                    <h4>Qualified Staff of Doctors</h4>
                    <p>
                      Lorem ipsum sit amet consectetur incididunt ut labore et
                      exercitation ullamco laboris nisi dolore magna enim veniam
                      aliqua.{" "}
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
                      <img src={choose3} alt />
                    </span>
                  </div>
                  <div className="why-choose-content">
                    <h4>Qualified Staff of Doctors</h4>
                    <p>
                      Lorem ipsum sit amet consectetur incididunt ut labore et
                      exercitation ullamco laboris nisi dolore magna enim veniam
                      aliqua.{" "}
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
                      <img src={choose4} alt />
                    </span>
                  </div>
                  <div className="why-choose-content">
                    <h4>Qualified Staff of Doctors</h4>
                    <p>
                      Lorem ipsum sit amet consectetur incididunt ut labore et
                      exercitation ullamco laboris nisi dolore magna enim veniam
                      aliqua.{" "}
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
                <img src={shape1} alt />
              </div>
              <div className="way-shapes-right">
                <img src={shape2} alt />
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-lg-7 col-md-12">
                <div className="section-inner-header way-inner-header mb-0">
                  <h2>Be on Your Way to Feeling Better with the Doccure</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a href="contact-us.html" className="btn btn-primary">
                    Contact With Us
                  </a>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="way-img">
                  <img src={way} className="img-fluid" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonals />
    </>
  );
}

export default Banners;
