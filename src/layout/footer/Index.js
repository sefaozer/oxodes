import Link from "next/link";

const Footer = () => {
  return (
    <footer className="main-footer bgc-gray footer-white rel z-1">
      <div className="footer-cta-wrap">
        <div className="container">
          <div
            className="footer-cta-inner bgs-cover"
            style={{
              backgroundImage: "url(assets/images/footer/footer1.png)",
            }}
          >
            <div className="section-title wow fadeInLeft delay-0-2s">
              <span className="sub-title">
                Herhangi bir ihtiyacınız mı var ?
              </span>
              <h3>Size Yardımcı Olmaktan Mutluluk Duyarız</h3>
            </div>
            <Link legacyBehavior href="/contact">
              <a className="theme-btn style-three wow fadeInRight delay-0-2s">
                İletişim Adreslerimiz <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
            <div className="hotline wow fadeInRight delay-0-2s">
              <i className="fas fa-phone" />
              <div className="content">
                <span>İletişim Numarası</span>
                <br />
                <a href="callto:+905529424957">+90 552 942 49 57</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row medium-gap">
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget widget_about wow fadeInUp delay-0-2s">
              <div className="footer-logo mb-30">
                <Link legacyBehavior href="/index">
                  <a>
                    <img src="assets/images/logos/logo-one.gif" alt="Logo" />
                  </a>
                </Link>
              </div>
              <p>
                OXODES <br />
                Size en doğru çözümü ulaştıracağız.
              </p>
              <Link legacyBehavior href="/about">
                <a className="read-more">
                  Hakkımızda <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 order-xl-2">
            <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
              <h5>Follow Us</h5>
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
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-3s">
                  <h4 className="footer-title">Sayfalar</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="about">{`Hakkımızda`}</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">{`Hizmetler`}</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="contact">{`İletişim`}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                  <h4 className="footer-title">Hizmetler</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="service-details">
                        <a>Product Design</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="service-details">
                        <a>Design &amp; Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="service-details">
                        <a>Machine Vision</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="service-details">
                        <a>Search Engine</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="service-details">
                        <a>IT Consulting</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-5s">
                  <h4 className="footer-title">Ürünler</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="about">
                        OXO
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="404">
                        <a>MOXO</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="contact">
                        <a>O-Scanner</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bgc-black mt-20 pt-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="footer-bottom-menu mb-10 wow fadeInRight delay-0-2s"></div>
            </div>
            <div className="col-lg-4">
              <div className="copyright-text text-lg-end wow fadeInLeft delay-0-2s">
                <p>© 2024 OXODES. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shapes">
        <img
          className="shape one"
          src="assets/images/footer/footer-bg-weve-shape.png"
          alt="Shape"
        />
      </div>
    </footer>
  );
};
export default Footer;
