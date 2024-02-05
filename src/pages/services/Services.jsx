import React from "react";
import img1 from "./assets/img/consult.jpg";
import OwlCarousel from "react-owl-carousel";
import BreadCrumb from "../../components/Breadcrumb/BreadCrumb";
import Slider from "react-slick";

function Services() {
  const pageDetails = {
    title: "Services we Provide",
    subTitle: "Services",
    previousTitle: "Home",
    previousUrl: "/home",
  };

  const serviceCardDetails = [
    {
      header: "Orthopaedic rehabilitation ",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore",
    },
    {
      header: "Neurological rehabilitation",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore",
    },
    {
      header: "Musculoskeletal injury rehabilitation ",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore",
    },
    {
      header: "Paediatric rehabilitation ",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore",
    },
    {
      header: "Geriatric rehabilitation ",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore",
    },
    {
      header: "Obstetric and gynaecology ",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore",
    },
    {
      header: "Cardio thoracic rehabilitation",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore",
    },
    {
      header: "Sports injury rehabilitation",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore",
    },
    {
      header: "Corporate wellness",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore",
    },
    {
      header: "Bobath",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore",
    },
    {
      header: "PNF",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore",
    },
    {
      header: "Posture Correction",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore",
    },
    {
      header: "Ergonomic Correction",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore",
    },
    {
      header: "Resisted Exercises",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore",
    },
  ];
  const renderServiceCards = (header, description) => {
    return (
      <div style={{ padding: "0 15px" }}>
        <div className="services-item-two">
          <div className="icon">
            <i className="flaticon-shield"></i>
          </div>
          <div style={{ minHeight: "60px" }}>
            <h3>{header}</h3>
          </div>
          <div style={{ minHeight: "90px" }}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <BreadCrumb page={pageDetails} />
      <section className="services-section bg-f4f6fe pt-100 pb-100">
        <div className="container-fluid" style={{ padding: "0 40px" }}>
          <div className="section-title">
            <span>Our Services</span>
            <h2>Our Healthcare Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse
            </p>
          </div>

          <div className="slider-container">
            <Slider
              className="testimonials-slider"
              infinite={true}
              autoplay={true}
              slidesToScroll={1}
              slidesToShow={3}
              rows={2}
              responsive={[
                {
                  breakpoint: 1900,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {serviceCardDetails.map((details, idx) => (
                <React.Fragment key={idx}>
                  {renderServiceCards(details.header, details.description)}
                </React.Fragment>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="step-three ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="step-three-image">
                <img src={img1} alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="step-three-content">
                <span>Step 3</span>
                <h3>Pick Up Your Prescription from Your Local Doctor.</h3>
                <p>
                  Many healthcare systems around the world together with
                  government agencies and startup companies are building and
                  delivering Telehealth
                </p>
                <b>
                  We can send your prescription directly to your local pharmacy
                  for easy pick-up. Many healthcare systems around the world
                  together with government agencies and startup companies are
                  building and delivering Telehealth
                </b>

                <div className="step-btn">
                  <a href="services.html#" className="default-btn">
                    Make Appointment
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
