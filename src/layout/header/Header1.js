import Link from "next/link";
import Search from "../Search";
import Menu from "./Menu";
import React, { useEffect, useRef } from "react";

const Header1 = () => {
  /* atacan logo döngü 
  const logoRef = useRef(null);

  // Array of image sources
  const images = [
    'assets/images/logos/logo-one.gif',
    'assets/images/logos/logo-one1.png'
  ];

  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      logoRef.current.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length; // Cycle through the images
    }, 7000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []); */

  return (
    <header className="main-header header-one menu-white">
      <div className="header-top-wrap bgc-gray">
        <div className="container">
          <div className="header-top">
            <ul>
              <li>
                <i className="far fa-envelope" />{" "}
                <a href="mailto:info@oxodes.com">info@oxodes.com</a>
              </li>
              <li>
                <i className="far fa-phone" />{" "}
                <a href="callto:+905529424957">+90 552 942 49 57</a>
              </li>
              <li>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper bgc-black">
        <div className="container clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/index">
                  <a>
                    <img
                      /*ref={logoRef} atacan logo döngü */
                      className="center-vertical"
                      src="assets/images/logos/logo-one.gif"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="nav-outer mx-auto clearfix">
              {/* Main Menu */}
              <Menu />
              {/* Main Menu End*/}
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default Header1;
