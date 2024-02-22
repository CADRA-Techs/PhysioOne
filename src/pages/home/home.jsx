import "./assets/styles/home.css";
import OwlCarousel from "react-owl-carousel";
import headerIcon from "./assets/img/header-icon.svg";
import downArrowImg from "./assets/img/down-arrow-img.png";
import bannerImg from "./assets/img/banner-img.png";
import bannerImg2 from "./assets/img/banner-img2.png";
import featureService1 from "./assets/img/feature-service-1.jpg";
import { TeamOfDocsComponent } from "../teamOfDocs/TeamOfDocs";
import NeedToKnow from "../../components/NeedToKnow/NeedToKnow";
import Testimonals from "../../components/Testimonials/Testimonals";
import HomeContactBanner from "../../components/HomeContactBanner/HomeContactBanner";

function Home() {
  const featured_service = [
    {
      image: featureService1,
      tittle: "Mommy Makeover",
      discription: (
        <p>
          Facial procedures are popular because of their ability to give
          patients a youthful appearance, reduce the signs of aging and by
          improving existing features for more aesthetically pleasing results.
          These methods are in two separate categories and are commonly known as
          facial rejuvenation and facial contouring. Facial rejuvenation
          consists of facelift, eyelid lift, neck lift and brow lift .
        </p>
      ),
    },
    {
      image: featureService2,
      tittle: "Mommy Makeover2",
      discription: (
        <p>
          Facial procedures are popular because of their ability to give
          patients a youthful appearance, reduce the signs of aging and by
          improving existing features for more aesthetically pleasing results.
          These methods are in two separate categories and are commonly known as
          facial rejuvenation and facial contouring. Facial rejuvenation
          consists of facelift, eyelid lift, neck lift and brow lift .
        </p>
      ),
    },
    {
      image: featureService3,
      tittle: "Mommy Makeover3",
      discription: (
        <p>
          Facial procedures are popular because of their ability to give
          patients a youthful appearance, reduce the signs of aging and by
          improving existing features for more aesthetically pleasing results.
          These methods are in two separate categories and are commonly known as
          facial rejuvenation and facial contouring. Facial rejuvenation
          consists of facelift, eyelid lift, neck lift and brow lift .
        </p>
      ),
    },
    {
      image: featureService1,
      tittle: "Mommy Makeover",
      discription: (
        <p>
          Facial procedures are popular because of their ability to give
          patients a youthful appearance, reduce the signs of aging and by
          improving existing features for more aesthetically pleasing results.
          These methods are in two separate categories and are commonly known as
          facial rejuvenation and facial contouring. Facial rejuvenation
          consists of facelift, eyelid lift, neck lift and brow lift .
        </p>
      ),
    },
    {
      image: featureService2,
      tittle: "Mommy Makeover2",
      discription: (
        <p>
          Facial procedures are popular because of their ability to give
          patients a youthful appearance, reduce the signs of aging and by
          improving existing features for more aesthetically pleasing results.
          These methods are in two separate categories and are commonly known as
          facial rejuvenation and facial contouring. Facial rejuvenation
          consists of facelift, eyelid lift, neck lift and brow lift .
        </p>
      ),
    },
    {
      image: featureService3,
      tittle: "Mommy Makeover3",
      discription: (
        <p>
          Facial procedures are popular because of their ability to give
          patients a youthful appearance, reduce the signs of aging and by
          improving existing features for more aesthetically pleasing results.
          These methods are in two separate categories and are commonly known as
          facial rejuvenation and facial contouring. Facial rejuvenation
          consists of facelift, eyelid lift, neck lift and brow lift .
        </p>
      ),
    },
  ];

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
                <a href="booking.html" className="btn">
                  Start a Consult
                </a>
                <div className="banner-arrow-img">
                  <img src={downArrowImg} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="search-box-one aos">
                <form action="search-2.html">
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
          <div className="row" style={{ justifyContent: "center" }}>
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
      {/* <section className="step-two ptb-100">
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
                  <a href="index-4.html#" className="default-btn">
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
      </section> */}
      <NeedToKnow />
      <TeamOfDocsComponent />
      <Testimonals />
      <HomeContactBanner />
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
          <OwlCarousel
            className="owl-carousel features-slider-sixteen owl-theme"
            loop
            autoplay
            autoplayTimeout={3500}
            dots
            items={3}
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 3,
                nav: true,
              },
            }}
          >
            {featured_service.map((ele) => (
              <div
                className="feature-sixteen-main"
                style={{ marginRight: "10px" }}
              >
                <div className="feature-six-img">
                  <img src={ele.image} alt="image" className="img-fluid" />
                  <div className="feature-content-six">
                    <div className="feature-content-one">
                      <h5>{ele.tittle}</h5>
                      <span>
                        <i className="fa-solid fa-angle-up"></i>
                      </span>
                    </div>
                    <div className="feature-content-two">
                      <p>{ele.discription}</p>
                      <span>
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}

export default Home;
