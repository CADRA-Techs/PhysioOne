import React, { useState } from "react";
import BreadCrumb from "../../components/Breadcrumb/BreadCrumb";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    msg_subject: "",
    message: "",
  });

  const pageDetails = {
    title: "Contact Us",
    subTitle: "Contact",
    previousTitle: "Home",
    previousUrl: "/home",
  };

  const contactConfig = {
    email: "physioone.ak@gmail.com",
    instaUrl: "https://www.instagram.com/_physio_one_/",
    phone: { label: "+91 93607 46496", value: "+919360746496" },
    address: {
      0: "Thudiyalur Rd, Near Sankara College bus stop,",
      1: "V.N, Pudur, Near Reliance Smart,",
      2: "Saravanampatti, Coimbatore,",
      3: "Tamil Nadu - 641035.",
    },
    addressUrl: "https://maps.app.goo.gl/jSuo4WvQKFNCuxaS6",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone_number") {
      const cleanedInput = value.replace(/\D/g, "");
      value = cleanedInput.replace(/^(\d{5})(\d{5})$/, "+91 $1 $2");
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here using the formData state
    console.log("Form submitted:", formData);
    // Reset form data if needed
    setFormData({
      name: "",
      email: "",
      phone_number: "",
      msg_subject: "",
      message: "",
    });
  };
  return (
    <>
      <BreadCrumb page={pageDetails} />
      <section className="contact-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-email"></i>
                </div>

                <h3>Email Here</h3>
                <p>
                  <a href={`mailto:${contactConfig.email}`}>
                    {contactConfig.email}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${contactConfig.email}`}>
                    {contactConfig.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-pin"></i>
                </div>
                <h3>Location Here</h3>
                <a href={contactConfig.addressUrl} target="_blank">
                  <p>
                    {Object.values(contactConfig.address).map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-phone-call"></i>
                </div>

                <h3>Call Here</h3>
                <p>
                  <a href={`tel:${contactConfig.phone.value}`}>
                    {contactConfig.phone.label}
                  </a>
                </p>
                <p>
                  <a href={`tel:${contactConfig.phone.value}`}>
                    {contactConfig.phone.label}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="section-title">
            <span>Contact Us</span>
            <h2>Drop us Message for any Query</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => handleChange(e)}
                      value={formData.name}
                      className="form-control"
                      required
                      data-error="Please enter your name"
                      placeholder="Name"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => handleChange(e)}
                      value={formData.email}
                      className="form-control"
                      required
                      data-error="Please enter your email"
                      placeholder="Email"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      onChange={(e) => handleChange(e)}
                      value={formData.phone_number}
                      required
                      data-error="Please enter your number"
                      className="form-control"
                      placeholder="Phone"
                      pattern="^[0-9]{10}$"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="msg_subject"
                      id="msg_subject"
                      onChange={(e) => handleChange(e)}
                      value={formData.msg_subject}
                      className="form-control"
                      required
                      data-error="Please enter your subject"
                      placeholder="Subject"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      onChange={(e) => handleChange(e)}
                      value={formData.message}
                      cols="30"
                      rows="5"
                      required
                      data-error="Write your message"
                      placeholder="Your Message"
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="default-btn">
                    Send Message
                    <span></span>
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden"></div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <center>
        <div id="google_map" style={{ width: "100%", height: "500px" }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.985681352466!2d77.33375001469823!3d11.114444092092679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907a52e380aff%3A0x15457ba0fab7546d!2sRK%20Residency!5e0!3m2!1sen!2sin!4v1572006867944!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
          >
            GLADIS
          </iframe>
        </div>
      </center>
    </>
  );
}
