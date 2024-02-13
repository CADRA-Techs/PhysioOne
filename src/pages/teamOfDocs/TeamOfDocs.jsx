import React from "react";
import Image1 from "./assets/img/image1.jpg";
import Image2 from "./assets/img/image2.jpg";
import Image3 from "./assets/img/image3.jpg";
import BreadCrumb from "../../components/Breadcrumb/BreadCrumb";
import Footer from "../../components/Footer/Footer";

export const TeamOfDocsComponent = () => {
  const docDetails = [
    {
      profileImage: Image1,
      fullName: "Dr. Sample Text",
      desig: "Sample Text",
      embedSocial: false,
    },
    {
      profileImage: Image2,
      fullName: "Dr. Sample Text",
      desig: "Sample Text",
      embedSocial: false,
    },
    {
      profileImage: Image3,
      fullName: "Dr. Sample Text",
      desig: "Sample Text",
      embedSocial: true,
      facebookUrl: "www.facebook.com",
      instagramUrl: "www.instagram.com",
    },
  ];

  const renderDoctorCard = (doctorDetails) => (
    <div className="col-lg-4 col-md-6">
      <div className="doctor-item">
        <div className="image">
          <img src={doctorDetails.profileImage} alt="image" />
        </div>
        <div className="content">
          <h3>{doctorDetails.fullName}</h3>
          <span>{doctorDetails.desig}</span>
          {doctorDetails.embedSocial && (
            <ul className="social">
              {doctorDetails.facebookUrl && (
                <li>
                  <a href={doctorDetails.facebookUrl} target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              )}
              {doctorDetails.twitterUrl && (
                <li>
                  <a href={doctorDetails.twitterUrl} target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              )}
              {doctorDetails.pinterestUrl && (
                <li>
                  <a href={doctorDetails.pinterestUrl} target="_blank">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
              )}
              {doctorDetails.instagramUrl && (
                <li>
                  <a href={doctorDetails.instagramUrl} target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
  return (
    <section className="doctor-area pt-100 pb-70">
      <div className="container-fluid">
        <div className="section-title">
          <div className="section-title">
            <span>Our Doctors</span>
            <h2>Specialized Doctors</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse
            </p>
          </div>
        </div>

        <div className="row">
          {docDetails.map((_d, index) => (
            <React.Fragment key={index}>{renderDoctorCard(_d)}</React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

function TeamOfDocs() {
  const pageDetails = {
    title: "Our Team of Doctors",
    subTitle: "Our Team",
    previousTitle: "Home",
    previousUrl: "/home",
  };

  return (
    <>
      <BreadCrumb page={pageDetails} />
      <TeamOfDocsComponent />
    </>
  );
}

export default TeamOfDocs;
