import React from "react";

function Services() {
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
      <div class="col-lg-4 col-md-6">
        <div class="services-item-two">
          <div class="icon">
            <i class="flaticon-pregnancy"></i>
          </div>

          <h3>{header}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <section className="services-section bg-f4f6fe pt-100 pb-100">
        <div className="container-fluid">
          <div className="section-title">
            <span>Our Services</span>
            <h2>Our Healthcare Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse
            </p>
          </div>

          <div className="row">
            {serviceCardDetails.map((details, idx) => (
              <React.Fragment key={idx}>
                {renderServiceCards(details.header, details.description)}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
