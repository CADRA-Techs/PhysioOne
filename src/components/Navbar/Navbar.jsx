import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./assets/css/Navbar.css";
import "./assets/css/Sidebar.css";
import AppRoutes from "../../AppRoutes";
import React, { useState } from "react";
import closeIcon from "./assets/img/close.png";
import barIcon from "./assets/img/menu.png";
import navLogo from "./assets/img/nav-logo.png";

export default function Navbar() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  const CustomLink = ({ to, children, styleName }) => {
    const resolve = useResolvedPath(to);
    const isUrlMatch = useMatch({ path: resolve.pathname, end: true });
    return (
      <Link className={isUrlMatch ? `${styleName}-active` : styleName} to={to}>
        {children}
      </Link>
    );
  };

  const CustomNavbar = ({ toggle }) => {
    return (
      <nav>
        <Link to="/" className="link">
          <img src={navLogo} alt=""></img>
          PhysioOne
        </Link>
        <div className="menu-items">
          {AppRoutes.routes.map((route, index) => (
            <CustomLink key={index} to={route.path} styleName="link">
              {route.name}
            </CustomLink>
          ))}
        </div>
        <div className="icons">
          <div className="mobile-menu-icon">
            <img src={barIcon} onClick={toggle}></img>
          </div>
        </div>
      </nav>
    );
  };

  const CustomSidebar = ({ isopen, toggle }) => {
    let opacityClasses = ["sidebar-container"];
    if (isopen) {
      opacityClasses.push("opacity-on");
    } else {
      opacityClasses.push("opacity-off");
    }

    return (
      <div
        className={opacityClasses.join(" ")}
        isopen={isopen.toString()}
        onClick={toggle}
      >
        <div className="sidebar-icon">
          <img onClick={toggle} src={closeIcon}></img>
        </div>
        <div className="sidebar-wrapper">
          <div className="sidebar-menu">
            {AppRoutes.routes.map((route, index) => (
              <CustomLink key={index} to={route.path} styleName="sidebar-links">
                {route.name}
              </CustomLink>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <CustomNavbar toggle={toggle} />
      <CustomSidebar isopen={isopen} toggle={toggle} />
    </>
  );
}
