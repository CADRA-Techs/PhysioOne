import React from "react";
import client1 from "./assets/img/testimonals/client-01.jpg";
import client2 from "./assets/img/testimonals/client-02.jpg";
import client3 from "./assets/img/testimonals/client-03.jpg";
import client4 from "./assets/img/testimonals/client-04.jpg";

function Testimonals() {
  return (
    <>
      <section className="testimonial-section">
        <div className="testimonial-shape-img">
          <div className="testimonial-shape-left">
            <img src="assets/img/shape-04.png" alt />
          </div>
          <div className="testimonial-shape-right">
            <img src="assets/img/shape-05.png" alt />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-slider slick">
                <div className="testimonial-grid">
                  <div className="testimonial-info">
                    <div className="testimonial-img">
                      <img src={client1} className="img-fluid" alt />
                    </div>
                    <div className="testimonial-content">
                      <div className="section-inner-header testimonial-header">
                        <h6>Testimonials</h6>
                        <h2>What Our Client Says</h2>
                      </div>
                      <div className="testimonial-details">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                        <h6>
                          <span>John Doe</span> New York
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-grid">
                  <div className="testimonial-info">
                    <div className="testimonial-img">
                      <img src={client2} className="img-fluid" alt />
                    </div>
                    <div className="testimonial-content">
                      <div className="section-inner-header testimonial-header">
                        <h6>Testimonials</h6>
                        <h2>What Our Client Says</h2>
                      </div>
                      <div className="testimonial-details">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                        <h6>
                          <span>Amanda Warren</span> Florida
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-grid">
                  <div className="testimonial-info">
                    <div className="testimonial-img">
                      <img src={client3} className="img-fluid" alt />
                    </div>
                    <div className="testimonial-content">
                      <div className="section-inner-header testimonial-header">
                        <h6>Testimonials</h6>
                        <h2>What Our Client Says</h2>
                      </div>
                      <div className="testimonial-details">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                        <h6>
                          <span>Betty Carlson</span> Georgia
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-grid">
                  <div className="testimonial-info">
                    <div className="testimonial-img">
                      <img src={client4} className="img-fluid" alt />
                    </div>
                    <div className="testimonial-content">
                      <div className="section-inner-header testimonial-header">
                        <h6>Testimonials</h6>
                        <h2>What Our Client Says</h2>
                      </div>
                      <div className="testimonial-details">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                        <h6>
                          <span>Veronica</span> California
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-grid">
                  <div className="testimonial-info">
                    <div className="testimonial-img">
                      <img src={client1} className="img-fluid" alt />
                    </div>
                    <div className="testimonial-content">
                      <div className="section-inner-header testimonial-header">
                        <h6>Testimonials</h6>
                        <h2>What Our Client Says</h2>
                      </div>
                      <div className="testimonial-details">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                        <h6>
                          <span>Richard</span> Michigan
                        </h6>
                      </div>
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

export default Testimonals;
