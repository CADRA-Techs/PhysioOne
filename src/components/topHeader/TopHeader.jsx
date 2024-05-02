export default function TopHeader() {
  return (
    <header className="header-area">
      <div className="top-header" style={{ padding: "10px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="top-list">
                <li style={{ fontSize: "12px", marginBottom: "5px" }}>
                  <i className="flaticon-clock"></i>
                  Mon-Sat 09:00AM - 09:00PM
                </li>
                <li style={{ fontSize: "12px", marginBottom: "5px" }}>
                  <i className="flaticon-phone-call"></i>
                  <a href="tel:+919360746496">Call Us: +91 93607 46496</a>
                </li>
                <li style={{ fontSize: "12px", marginBottom: "5px" }}>
                  <i className="flaticon-paper-plane"></i>
                  <a href="mailto:physioone.ak@gmail.com">
                    physioone.ak@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
