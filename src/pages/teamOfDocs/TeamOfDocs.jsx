import React from "react";
import Kaleeswaran from "./assets/img/Kaleeswaran.jpeg";
import Kartheepan from "./assets/img/Kartheepan.png";
import Sakirtharaj from "./assets/img/Sakirtharaj.jpeg";
import Sivaramakrishnan from "./assets/img/Sivaramakrishnan.jpeg";
import Vignesh from "./assets/img/Vignesh.jpg";

import BreadCrumb from "../../components/Breadcrumb/BreadCrumb";
import "./assets/styles/TeamOfDocs.css";

export const TeamOfDocsComponent = () => {
  const docDetails = [
    {
      profileImage: Kaleeswaran,
      fullName: "Dr. KALEESWARAN A",
      desig: "B.P.T, M.P.T (Neuro)",
      embedSocial: false,
      qualifications: [
        "Certified Dry needling therapist(CDNT)",
        "Certified in Instrument Assisted Soft Tissue Mobilisation (CIASTM)",
        "Certified on-field therapeutic tapping therapist (COFTTT)",
        "Advanced biomechanical correction of spine and peripheral joints",
      ],
    },
    {
      profileImage: Kartheepan,
      fullName: "Dr.KARTHEEPAN K",
      desig: "B.P.T, M.P.T (Cardio)",
      embedSocial: false,
      qualifications: [
        "Exercise prescription Specialised in shoulder rehabilitation",
      ],
    },
    {
      profileImage: Sivaramakrishnan,
      fullName: "Dr.SIVARAMAKRISHNAN K",
      desig: "B.P.T, M.P.T (Neuro)",
      embedSocial: false,
      qualifications: ["Specialized in frozen shoulder and Geriatric care"],
    },
    {
      profileImage: Vignesh,
      fullName: "Dr.VIGNESH N.",
      desig: "B.P.T, M.P.T (Neuro)",
      embedSocial: false,
      qualifications: [
        "DYHE Neuro Rehabilitation , Paediatric Care and Neuromuscular Exercise Rehabilitation",
      ],
    },
    {
      profileImage: Sakirtharaj,
      fullName: "Dr. SAKIRTHARAJ M",
      desig: " B.P.T, M.P.T (Sports)",
      embedSocial: false,
      qualifications: [
        "Sports injury and rehabilitation Certified on-field therapeutic tapping therapist (COFTTT)",
      ],
    },

    // {
    //   profileImage: Image3,
    //   fullName: "Dr. Sample Text",
    //   desig: "Sample Text",
    //   embedSocial: true,
    //   facebookUrl: "www.facebook.com",
    //   instagramUrl: "www.instagram.com",
    // },
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
          <ul className="social qualification-list">
            {doctorDetails.qualifications &&
              doctorDetails.qualifications.map((qual, idx) => (
                <React.Fragment key={idx}>
                  <li className="qualification-seperator"></li>
                  <li>{qual}</li>
                </React.Fragment>
              ))}
          </ul>
          {/* {doctorDetails.embedSocial && (
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
          )} */}
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
              Our specialized doctors: Offering focused care to meet your
              individual needs.
            </p>
          </div>
        </div>

        <div className="row" style={{ justifyContent: "center" }}>
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
