import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./assets/Navbar.css";

export default function Navbar() {
  const CustomLink = ({ to, children }) => {
    const resolve = useResolvedPath(to);
    const isUrlMatch = useMatch({ path: resolve.pathname, end: true });
    return (
      <li className={isUrlMatch ? "has-submenu active" : "has-submenu"}>
        <Link to={to}>{children}</Link>
      </li>
    );
  };

  return (
    <header className="header header-fixed header-one">
      <div className="container custom-container">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </a>
            <Link to="index.html" className="navbar-brand logo">
              {/* <img src= className="img-fluid" alt="Logo"/> */}
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="index.html" className="menu-logo">
                {/* <img src= className="img-fluid" alt="Logo"/> */}
              </Link>
              <a
                id="menu_close"
                className="menu-close"
                href="javascript:void(0);"
              >
                <i className="fas fa-times"></i>
              </a>
            </div>
            <ul className="main-nav">
              <CustomLink to="/">Home </CustomLink>
              <CustomLink to="/doctors">Doctors </CustomLink>
              <CustomLink to="/services">Services </CustomLink>
              <CustomLink to="/testimonials">Testimonials</CustomLink>
              <CustomLink to="/about">About us </CustomLink>
              <CustomLink to="/blog">Blog </CustomLink>
              <CustomLink to="/contact">Contact </CustomLink>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
