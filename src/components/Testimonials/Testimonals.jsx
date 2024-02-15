import React from "react";
import client1 from "./assets/img/client-01.jpg";
import client2 from "./assets/img/client-02.jpg";
import client3 from "./assets/img/client-03.jpg";
import client4 from "./assets/img/client-04.jpg";
import shape04 from "./assets/img/shape-04.png";
import shape05 from "./assets/img/shape-05.png";
import Slider from "react-slick";

function Testimonals() {
  const testimonialData = [
    {
      imageSrc: client1,
      feedback:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "John Doe",
      city: "New Year",
    },
    {
      imageSrc: client2,
      feedback:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "John Doe",
      city: "Cbe",
    },
    {
      imageSrc: client3,
      feedback:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "John Doe",
      city: "Florida",
    },
    {
      imageSrc: client4,
      feedback:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "John Doe",
      city: "Chennai",
    },
  ];

  const renderTestimonialCards = (data) => (
    <div className="testimonial-grid">
      <div className="testimonial-info">
        <div className="testimonial-img">
          <img src={data.imageSrc} className="img-fluid" alt="Fuild Image" />
        </div>
        <div className="testimonial-content">
          <div className="section-inner-header testimonial-header">
            <h6>Testimonials</h6>
            <h2>What Our Client Says</h2>
          </div>
          <div className="testimonial-details">
            <p>{data.feedback}</p>
            <h6>
              <span>{data.name}</span>
              &nbsp;{data.city}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="testimonial-section">
        <div className="testimonial-shape-img">
          <div className="testimonial-shape-left">
            <img src={shape04} alt="shape-04" />
          </div>
          <div className="testimonial-shape-right">
            <img src={shape05} alt="shape-05" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Slider className="testimonial-slider ">
                {testimonialData.map((_tData) =>
                  renderTestimonialCards(_tData)
                )}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonals;
