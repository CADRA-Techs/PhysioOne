import React from "react";
import img1 from "./assets/img/step-three-image.png";
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
        "  Restoring movement and function after bone or joint injuries.",
    },
    {
      header: "Neurological rehabilitation",
      description:
        " Regaining independence and mobility following neurological conditions.",
    },
    {
      header: "Musculoskeletal injury rehabilitation ",
      description: " Healing and strengthening muscles, bones, and joints",
    },
    {
      header: "Paediatric rehabilitation ",
      description:
        " Supporting children in reaching their developmental milestones.",
    },
    {
      header: "Geriatric rehabilitation ",
      description: " Enhancing mobility and quality of life for seniors.",
    },
    {
      header: "Obstetric and gynaecology ",
      description:
        " Tailored care for women's health needs during and after pregnancy.",
    },
    {
      header: "Cardio thoracic rehabilitation",
      description:
        "  Rehabilitating heart and lung function for improved cardiovascular health.",
    },
    {
      header: "Sports injury rehabilitation",
      description: " Getting athletes back to peak performance safely.",
    },
    {
      header: "Corporate wellness",
      description:
        " Promoting employee health and productivity through tailored programs.",
    },
    {
      header: "Bobath",
      description:
        " Specialized therapy for individuals with neurological conditions like cerebral palsy.",
    },
    {
      header: "PNF(Proprioceptive Neuromuscular Facilitation)",
      description:
        " Utilizing patterns of movement to improve flexibility and strength.",
    },
    {
      header: "Posture Correction",
      description:
        " Correcting alignment to prevent pain and improve posture-related issues.",
    },
    {
      header: "Ergonomic Correction",
      description:
        "Enhancing workspace comfort and safety to prevent musculoskeletal issues.",
    },
    {
      header: "Resisted Exercises",
      description:
        " Strengthening muscles and improving endurance through resistance training.",
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
                <h3>Pick Up Your Prescription from Your Local Doctor.</h3>
                <p>
                  Many healthcare systems around the world together with
                  government agencies and startup companies are building and
                  delivering Telehealth We can send your prescription directly
                  to your local pharmacy for easy pick-up. Many healthcare
                  systems around the world together with government agencies and
                  startup companies are building and delivering Telehealth
                </p>
                {/* <b></b> */}

                <div className="step-btn">
                  <a href="#" className="default-btn">
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
