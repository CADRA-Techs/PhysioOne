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
    <section class="footer-area pt-100 pb-70">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>Physio One</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua.
              </p>
              <ul class="footer-social">
                <li>
                  <a href="team.html#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a href="team.html#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/_physio_one_/"
                    target="_blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="team.html#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>Instagram</h3>

              <ul class="instagram">
                <li>
                  <a href="team.html#">
                    <img src="assets/img/instagram/1.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="team.html#">
                    <img src="assets/img/instagram/2.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="team.html#">
                    <img src="assets/img/instagram/3.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="team.html#">
                    <img src="assets/img/instagram/4.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="team.html#">
                    <img src="assets/img/instagram/1.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="team.html#">
                    <img src="assets/img/instagram/2.jpg" alt="image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget pl-5">
              <h3>Useful Links</h3>

              <ul class="footer-quick-links">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="solution.html">Solution</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="https://templates.envytheme.com/tinzer/default/blog.html">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>Contact</h3>

              <div class="footer-info-contact">
                <i class="flaticon-call"></i>
                <h3>Phone</h3>
                <span>
                  <a href={`tel:${footerConfig.phone.value}`}>
                    {footerConfig.phone.value}
                  </a>
                </span>
              </div>

              <div class="footer-info-contact">
                <i class="flaticon-email"></i>
                <h3>Email</h3>
                <span>
                  <a href={`mailto:${footerConfig.email}`}>
                    {footerConfig.email}
                  </a>
                </span>
              </div>

              <div class="footer-info-contact">
                <i class="flaticon-pin"></i>
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

      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </section>
  );
}

export default Footer;