import React from "react";

function NeedToKnow() {
  return (
    <section class="need-to-know-section">
      <div class="floating-bg">
        <img src="assets/img/bg/health-care.png" />
      </div>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-8 col-sm-12 aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <div class="section-header-one section-header-slider">
              <h2 class="section-title">
                Need To Know <span>Cardiac Conditions</span>
              </h2>
              <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link tag-list active"
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
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link tag-list"
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
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link tag-list"
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
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="content_1"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div class="need-to-know-content">
                    <h3>Heart valve disease</h3>
                    <p>
                      If one of the valves in your heart becomes diseased it can
                      affect the flow of blood. This can happen in one of two
                      ways: valve stenosis (where the valve does not fully open
                      and obstructs or restricts flow) or valve incompetence
                      (where the valve does not close properly and blood is
                      allowed to leak backwards)....
                    </p>
                    <a href="booking.html" class=" need-to-know-content-btn">
                      Read More
                    </a>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="content_2"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div class="need-to-know-content">
                    <h3>Heart failure</h3>
                    <p>
                      If one of the valves in your heart becomes diseased it can
                      affect the flow of blood. This can happen in one of two
                      ways: valve stenosis (where the valve does not fully open
                      and obstructs or restricts flow) or valve incompetence
                      (where the valve does not close properly and blood is
                      allowed to leak backwards)....
                    </p>
                    <a href="booking.html" class=" need-to-know-content-btn">
                      Read More
                    </a>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="content_3"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div class="need-to-know-content">
                    <h3>Pacemakers and defibrillators</h3>
                    <p>
                      If one of the valves in your heart becomes diseased it can
                      affect the flow of blood. This can happen in one of two
                      ways: valve stenosis (where the valve does not fully open
                      and obstructs or restricts flow) or valve incompetence
                      (where the valve does not close properly and blood is
                      allowed to leak backwards)....
                    </p>
                    <a href="booking.html" class=" need-to-know-content-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 aos" data-aos="fade-up">
            <div class="gallery-box-block">
              <div class="gallery-box-left">
                <div class="box-detail mb-2 ">
                  <img
                    src="assets/img/features/feature-13.jpg"
                    class="img-fluid"
                  />
                </div>
                <div class="box-detail">
                  <img
                    src="assets/img/features/feature-14.jpg"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="gallery-box-right">
                <div class="box-detail">
                  <img
                    src="assets/img/features/feature-15.jpg"
                    class="img-fluid"
                  />
                </div>
                <div class="box-detail">
                  <img
                    src="assets/img/features/feature-16.jpg"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NeedToKnow;
