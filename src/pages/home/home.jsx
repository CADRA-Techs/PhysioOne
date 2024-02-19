import "./assets/styles/home.css";
import headerIcon from "./assets/img/header-icon.svg";
import downArrowImg from "./assets/img/down-arrow-img.png";
import bannerImg from "./assets/img/banner-img.png";
import bannerImg2 from "./assets/img/banner-img2.png";
import featureService1 from "./assets/img/feature-service-1.jpg";
import { TeamOfDocsComponent } from "../teamOfDocs/TeamOfDocs";

function Home() {
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content aos">
                <h1>
                  Consult <span>Best Doctors</span> Your Nearby Location.
                </h1>
                <img
                  src={headerIcon}
                  className="header-icon"
                  alt="header-icon"
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <a href="#" className="btn">
                  Start a Consult
                </a>
                <div className="banner-arrow-img">
                  <img src={downArrowImg} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="search-box-one aos">
                <form action="#">
                  <div className="search-input search-line">
                    <i className="feather-search bficon"></i>
                    <div className="form-group mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search doctors, clinics, hospitals, etc"
                      />
                    </div>
                  </div>
                  {/* Other input fields */}
                  <div className="form-search-btn">
                    <button className="btn" type="submit">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img aos">
                <img src={bannerImg} className="img-fluid" alt="" />
                <div className="banner-img2">
                  <img src={bannerImg2} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="top-services-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="top-services-content two">
                <div className="icon">
                  <i className="flaticon-relationship"></i>
                </div>
                <h3>Reduce Health Care Cost</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="top-services-content two">
                <div className="icon">
                  <i className="flaticon-insurance"></i>
                </div>
                <h3>Reduce Pressure on Medical Staff</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="top-services-content two">
                <div className="icon">
                  <i className="flaticon-clinic"></i>
                </div>
                <h3>Continuum Of Care</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="step-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="step-two-content">
                <span>Step 2</span>
                <h3>Use Our App to Talk to One of Our Doctor now.</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
                <b>
                  Get quality care right from your smartphone. It’s quick and
                  easy to sign up and start talking to a doctor to get diagnosed
                  right now.
                </b>

                <div className="step-btn">
                  <a href="#" className="default-btn">
                    Download
                    <span></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="step-two-image">
                <img src={bannerImg} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamOfDocsComponent />

      <div className="features-section-sixteen">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-sixteen text-center">
                <p>Our services</p>
                <h2>Featured Services</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="feature-sixteen-main col">
              <div className="feature-six-img">
                <img src={featureService1} alt="image" className="img-fluid" />
                <div className="feature-content-six">
                  <div className="feature-content-one">
                    <h5>Mommy Makeover</h5>
                    <span>
                      <i className="fa-solid fa-angle-up"></i>
                    </span>
                  </div>
                  <div className="feature-content-two">
                    <p>
                      Facial procedures are popular because of their ability to
                      give patients a youthful appearance, reduce the signs of
                      aging and by improving existing features for more
                      aesthetically pleasing results. These methods are in two
                      separate categories and are commonly known as facial
                      rejuvenation and facial contouring. Facial rejuvenation
                      consists of facelift, eyelid lift, neck lift and brow
                      lift.
                    </p>
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-sixteen-main col">
              <div className="feature-six-img">
                <img src={featureService1} alt="image" className="img-fluid" />
                <div className="feature-content-six">
                  <div className="feature-content-one">
                    <h5>Face Makeover</h5>
                    <span>
                      <i className="fa-solid fa-angle-up"></i>
                    </span>
                  </div>
                  <div className="feature-content-two">
                    <p>
                      Facial procedures are popular because of their ability to
                      give patients a youthful appearance, reduce the signs of
                      aging and by improving existing features for more
                      aesthetically pleasing results. These methods are in two
                      separate categories and are commonly known as facial
                      rejuvenation and facial contouring. Facial rejuvenation
                      consists of facelift, eyelid lift, neck lift and brow
                      lift.
                    </p>
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-sixteen-main col">
              <div className="feature-six-img">
                <img src={featureService1} alt="image" className="img-fluid" />
                <div className="feature-content-six">
                  <div className="feature-content-one">
                    <h5>BodyTite</h5>
                    <span>
                      <i className="fa-solid fa-angle-up"></i>
                    </span>
                  </div>
                  <div className="feature-content-two">
                    <p>
                      Facial procedures are popular because of their ability to
                      give patients a youthful appearance, reduce the signs of
                      aging and by improving existing features for more
                      aesthetically pleasing results. These methods are in two
                      separate categories and are commonly known as facial
                      rejuvenation and facial contouring. Facial rejuvenation
                      consists of facelift, eyelid lift, neck lift and brow
                      lift.
                    </p>
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Add more similar elements for other features */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
