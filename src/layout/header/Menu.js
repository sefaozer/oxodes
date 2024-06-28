import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

import { Fragment } from "react";
const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg mobile-menu">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src="assets/images/logos/logo-one.gif"
                alt="Logo"
                title="Logo"
              />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix"
        >
          <ul className="navigation clearfix">
            <li className="dropdown">
              <a href="#" onClick={() => active("Anasayfa")}>
                Home
              </a>
              <ul style={activeSubMenu("Anasayfa")}>
                <li>
                  <Link href="/">Anasayfa</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("Anasayfa")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => active("services")}>
                services
              </a>
              <ul style={activeSubMenu("services")}>
                <li>
                  <Link href="services">Services One</Link>
                </li>
                <li>
                  <Link href="services2">Services Two</Link>
                </li>
                <li>
                  <Link href="service-details">service details</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("services")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => active("Project")}>
                Project
              </a>
              <ul style={activeSubMenu("Products")}>
                <li>
                  <Link href="project-details">Project Details</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("Project")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => active("shop")}>
                shop
              </a>
              <ul style={activeSubMenu("shop")}>
                <li>
                  <Link href="product-details">product details</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("shop")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => active("blog")}>
                blog
              </a>
              <ul style={activeSubMenu("blog")}>
                <li>
                  <Link href="blog">blog standard</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("blog")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => active("pages")}>
                pages
              </a>
              <ul style={activeSubMenu("pages")}>
                <li>
                  <Link href="about">About us</Link>
                </li>
                <li>
                  <Link href="contact">Contact us</Link>
                </li>
                <li>
                  <Link href="faqs">faqs</Link>
                </li>
                {/* Atacan comment 
                <li>
                  <Link href="404">404 error</Link>
                </li>
                 Atacan comment */}
              </ul>
              <div className="dropdown-btn" onClick={() => active("pages")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};
const DeskTopMenu = () => {
  return (
    <nav className="main-menu navbar-expand-lg desktop-menu">
      <div className="navbar-header">
        <div className="mobile-logo">
          <Link href="/">
            <img
              src="assets/images/logos/logo-one.gif"
              alt="Logo"
              title="Logo"
            />
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          <li className="dropdown">
            <a href="/">Anasayfa</a>
          </li>
          <li className="dropdown">
            <a href="services">Hizmetler</a>
          </li>
          <li className="dropdown">
            <a href="#">Ürünler</a>
            <ul>
              <li>
                <Link href="project-details">Oxo</Link>
              </li>
              <li>
                <Link href="project-details2">Moxo</Link>
              </li>
              <li>
                <Link href="project-details3">O-Scanner</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>

          <li className="dropdown">
            <a href="about">Hakkımızda</a>
          </li>
          <li className="dropdown">
            <a href="contact">İletişim</a>
            <ul>
              {/* Atacan comment 
              <li>
                <Link href="404">404 error</Link>
              </li>
               Atacan comment */}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
