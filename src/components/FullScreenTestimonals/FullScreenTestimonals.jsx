import React from "react";
import testimonals from "./assets/img/testimonials.jpg";
import OwlCarousel from "react-owl-carousel";
import client1 from "./assets/img/1.jpg";
import client2 from "./assets/img/2.jpg";
import client3 from "./assets/img/3.jpg";

function FullScreenTestimonals() {
  const testimonialData = [
    {
      imageSrc: client1,
      feedback:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "John Doe",
      city: "New Year",
    },
    {
      imageSrc: client2,
      feedback:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "John Doe",
      city: "Cbe",
    },
    {
      imageSrc: client3,
      feedback:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "John Doe",
      city: "Florida",
    },
  ];

  const renderTestimonialCards = (data) => (
    <div className="testimonials-item">
      <div className="content">
        <span>Testimonials</span>
        <h3>What Client’s Say About Us</h3>
        <div className="icon">
          <i className="flaticon-left-quote"></i>
        </div>
        <p>{data.feedback}</p>

        <div className="info">
          <img src={client1} alt="image" />
          <h4>{data.name}</h4>
          <p>{data.city}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="testimonials-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="testimonials-image">
                <div className="image">
                  <img src={testimonals} alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <OwlCarousel
                className="testimonials-slider owl-carousel owl-theme"
                loop
                autoplay
                autoplayTimeout={3500}
                dots
                items={1}
              >
                {testimonialData.map((_tData, index) => (
                  <React.Fragment key={index}>
                    {renderTestimonialCards(_tData)}
                  </React.Fragment>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FullScreenTestimonals;
