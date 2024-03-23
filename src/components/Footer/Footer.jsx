import React from "react";

function Footer() {
  const footerConfig = {
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
  return (
    <section className="footer-area pt-100 pb-70">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3>Physio One</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua.
              </p>
              <ul className="footer-social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/_physio_one_/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div
              style={{
                borderRadius: "30px",
                overflow: "hidden",
                marginBottom: "30px",
              }}
            >
              <div id="google_map" style={{ width: "100%", height: "200px" }}>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.4038001037434!2d76.98491349999999!3d11.0832528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f734ec91a7e1%3A0x60fa142f3fe7efb0!2sPhysio%20one!5e0!3m2!1sen!2sin!4v1707462750219!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen={false}
                  disable="true"
                ></iframe>
              </div>
            </div>

            {/*<div className="single-footer-widget">
              <h3>Instagram</h3>

              <ul className="instagram">
                <li>
                  <a href="#">
                    <img src="assets/img/instagram/1.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/instagram/2.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/instagram/3.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/instagram/4.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/instagram/1.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/instagram/2.jpg" alt="image" />
                  </a>
                </li>
              </ul>
            </div>*/}
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Useful Links</h3>

              <ul className="footer-quick-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3>Contact</h3>

              <div className="footer-info-contact">
                <i className="flaticon-call"></i>
                <h3>Phone</h3>
                <span>
                  <a href={`tel:${footerConfig.phone.value}`}>
                    {footerConfig.phone.label}
                  </a>
                </span>
              </div>

              <div className="footer-info-contact">
                <i className="flaticon-email"></i>
                <h3>Email</h3>
                <span>
                  <a href={`mailto:${footerConfig.email}`}>
                    {footerConfig.email}
                  </a>
                </span>
              </div>

              <div className="footer-info-contact">
                <i className="flaticon-pin"></i>
                <h3>Address</h3>
                <a href={footerConfig.addressUrl} target="_blank">
                  {Object.values(footerConfig.address).map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div> */}
    </section>
  );
}

export default Footer;
