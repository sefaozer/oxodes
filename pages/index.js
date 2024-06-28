import Layout from "@/layout";
import { TestimonialsSlider2 } from "@/src/components/slider/TestimonialsSlider";
import { projectSliderActive } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import Typewriter from "typewriter-effect";
import { Nav, Tab } from "react-bootstrap";
import img1 from "../public/assets/images/user/img-1.jpg";
import home4 from "../public/assets/images/home/home-4.png";
/*import homeImage1 from "../public/assets/images/home/home1.png"
import homeImage2 from "../public/assets/images/home/home2.png"*/
import img2 from "../public/assets/images/user/img-2.jpg";
import img3 from "../public/assets/images/user/img-3.jpg";
import img4 from "../public/assets/images/user/img-4.jpg";
import img5 from "../public/assets/images/user/img-5.jpg";
import videoHome from "../public/assets/images/header-background-video.mp4";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  const sliderOptions = {
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Enable fade effect
    speed: 1000,
    arrows: false, // Set the speed of the fade effect
    // Add other options as needed
  };
  const options = {
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 },
    },
  };

  return (
    <Layout header={1}>
      {/* Hero Section Start */}

      <section className="hero-area rel" style={{ position: "relative" }}>
        {/* Video Etiketi */}
        <div
          className="hero-video-wrapper"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: "-1",
          }}
        >
          <video
            autoPlay
            muted
            loop
            className="hero-video"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          >
            <source src={videoHome} type="video/mp4" />
            {/* Diğer video formatları için gerekli source etiketlerini ekleyin */}
          </video>
        </div>

        {/* İçerik Konteyneri */}
        <div
          className="container"
          style={{ position: "relative", zIndex: "1" }}
        >
          <div className="row align-items-center">
            <div className="col-lg-6 align-self-center">
              <div className="hero-content pt-115 pb-125 rpb-0 wow fadeInUp delay-0-4s">
                <div className="home-heading">
                  <h3 className="home-title" style={{ color: "white" }}>
                    MERHABA!
                  </h3>
                  <h3 className="sub-title mb-3">
                    <span style={{ color: "Black" }}>
                      Üretimde Mükemmeliyet İçin{" "}
                    </span>
                    {/* Static text */}
                    <span
                      className="typewrite d-none d-sm-inline-block"
                      style={{ color: "#5F49DF" }}
                      data-period="2000"
                    >
                      <Typewriter
                        options={{
                          strings: ["Teknoloji", "OXODES"],
                          autoStart: true,
                          loop: true,
                          delay: 200,
                        }}
                      />
                      <span className="wrap"></span>
                    </span>
                  </h3>
                  <p style={{ color: "white" }}>
                    OXODES Teknoloji, üretim tesislerindeki kalite kontrol ve
                    montaj hatalarını yüksek hassasiyet ve doğrulukla tespit
                    eder. Böylece üreticilerin maliyet, prestij ve zaman gibi
                    önemli kayıpları önleyen çözümler sunarak üretiminizi öne
                    çıkarır. Bu teknoloji, gerçek zamanlı konum tespiti ve
                    geometri analizi gibi özellikleri içerir.
                  </p>
                  <p
                    style={{
                      color: "#674df3",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Daha Fazla
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-end">
              <div className="hero-images mt-80 wow fadeInLeft">
                <Slider {...sliderOptions} className="hero-slider">
                  <div>
                    <img src="/assets/images/home/homee1.png" alt="Slide 1" />
                  </div>
                  <div>
                    <img src="/assets/images/home/homee2.png" alt="Slide 2" />
                  </div>
                  <div>
                    <img src="/assets/images/home/homee3.png" alt="Slide 3" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section End */}

      {/* Project Area start */}
      <section className="project-area overflow-hidden bgc-lighter pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Oxodes'i Keşfedin</span>
            <h2>Ürün Çeşitlerimiz</h2>
          </div>
          <Slider {...projectSliderActive} className="project-slider-active">
            <div className="project-slider-item">
              <div className="video">
                <img
                  src="assets/images/projects/project-video.png"
                  alt="Video"
                />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                  tabIndex={-1}
                >
                  <i className="fas fa-play" />
                </a>
              </div>
              <div className="content">
                <h4>
                  OXO Serisi <br />
                  Gerçek Zamanlı Konum Tespiti
                </h4>
                <p>
                  OXO, fabrikaların montaj hatlarında çalışan operatörlerin
                  eline ya da kullandıkları montaj cihazlarının üzerine
                  yerleştirilen özel donanım ve kameralar sayesinde milimetrik
                  düzeyde konum tespit edip operatörlerin proses adımlarının
                  takibini ve kontrolünü yapar.
                </p>
                <ul className="list-style-one">
                  <li>Proses Doğruluk Takibi</li>
                  <li>Esnek Konfigürasyon</li>
                  <li>Kararlı Sistem</li>
                </ul>
                <Link legacyBehavior href="/project-details">
                  <a className="theme-btn style-two mt-15">
                    Detaylı Bilgi <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="project-slider-item">
              <div className="content">
                <h4>
                  O-SCANNER <br /> Tarama ve Geometri Analizi
                </h4>
                <p>
                  O-SCANNER, üretim tesislerinde kalite depertmanlarında
                  kullanabileceği, üretilen ya da satın alınan ürünlerin
                  kalitesinin değerlendirilmesinin yapılabileceği personelden
                  bağımsız 3 boyutlu tarama ve geometri analiz sistemidir.
                </p>
                <ul className="list-style-one">
                  <li>Yüksek Tarama Verimliliği</li>
                  <li>Personelden Bağımsız</li>
                  <li>Kolay Kurulum</li>
                </ul>
                <Link legacyBehavior href="/project-details">
                  <a className="theme-btn style-two mt-15">
                    Detaylı Bilgi <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="video">
                <img
                  src="assets/images/projects/project-video.png"
                  alt="Video"
                />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                  tabIndex={-1}
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
        <div className="project-shapes">
          <img
            className="shape one"
            src="assets/images/shapes/project-left.png"
            alt="shape"
          />
          <img
            className="shape two"
            src="assets/images/shapes/project-right.png"
            alt="shape"
          />
        </div>
      </section>
      {/* Project Area end */}
      {/* Services Area start */}
      <section className="services-area bgc-gray text-white pt-75 pb-10 rel z-1">
        <div className="container">
          <div className="row medium-gap">
            <div className="col-xl-4 col-md-6">
              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15"></span>
                <h2>Sunduğumuz Hizmetler</h2>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-networking" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Digital Consulting
                    </Link>
                  </h4>
                  <p>
                    On the other hand we denounce withteous indignation and
                    dislike men who beguilede demoralized by the charms pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-coding" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Design &amp; Development
                    </Link>
                  </h4>
                  <p>
                    On the other hand we denounce withteous indignation and
                    dislike men who beguilede demoralized by the charms pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="flaticon-app-development" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Mobile App Solutions
                    </Link>
                  </h4>
                  <p>
                    On the other hand we denounce withteous indignation and
                    dislike men who beguilede demoralized by the charms pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="flaticon-logo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      UX/UI Design Strategy
                    </Link>
                  </h4>
                  <p>
                    On the other hand we denounce withteous indignation and
                    dislike men who beguilede demoralized by the charms pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon-seo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      SEO Optimization
                    </Link>
                  </h4>
                  <p>
                    On the other hand we denounce withteous indignation and
                    dislike men who beguilede demoralized by the charms pleasure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area end */}
      {/* Work Process Area start */}
      <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Yolculuğumuz</span>
          <h2>Başlangıçtan Bu Güne</h2>
        </div>
        <div className="work-process-line text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">2018</div>
                <div className="content">
                  <h4>Kuruluş</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-10 wow fadeInDown delay-0-2s">
                <div className="number">2018</div>
                <div className="content">
                  <h4>İlk Yatırım</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">2020</div>
                <div className="content">
                  <h4>İlk Partnerlik</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item wow fadeInDown delay-0-2s">
                <div className="number">2021</div>
                <div className="content">
                  <h4>İlk Ürün</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-50 wow fadeInUp delay-0-2s">
                <div className="number">2023</div>
                <div className="content">
                  <h4>İlk Satış</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* About Area start */}
      <section className="about-area pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Hakkımızda</span>
                  <h2>Oxodes Kimdir?</h2>
                </div>
                <p>
                  2019 yılında olgunlaşmaya başlayan fikirler, mühendislik ve
                  ekip ruhuyla 2021 yılı ağustos ayında "Oxodes Bilişim
                  Teknoloji A.Ş." ismiyle Bursa Ulutek Teknoloji Geliştirme
                  Bölgesi'nde TÜBİTAK desteği ile kuruldu. Oxodes ekibi, Uludağ
                  Üniversitesi ve Boğaziçi Üniversitesi öğrenci topluluklarında
                  bir araya gelerek hem ulusal hem de uluslararası çalışmalara
                  ve mühendislik yarışmalarına katılarak çeşitli alanlarda
                  ödüller kazanmıştır. Bu sayede ekip kültürünü oluşturmuş ve
                  birikimlerini Oxodes Bilişim Teknoloji çatısı altında
                  birleştirmiştir.
                </p>
                <div className="about-btns mb-45">
                  <Link legacyBehavior href="/about">
                    <a className="theme-btn mt-15">
                      Daha Fazla <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="row no-gap for-active">
                  <div className="col-sm-6">
                    <div className="service-item active">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon1.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Yükselen Değer
                        </Link>
                      </h4>
                      <p>
                        Sit amet consectetur adiisc elit sed eiusmod temp diunts
                        ut labore et dolore magna
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon2.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          İş Geliştirme
                        </Link>
                      </h4>
                      <p>
                        Sit amet consectetur adiisc elit sed eiusmod temp diunts
                        ut labore et dolore magna
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-images">
                <div className="top-part">
                  <img
                    className="wow fadeInRight delay-0-3s"
                    src="assets/images/testimonials/Fuar1.png"
                    alt="About"
                  />
                  <img
                    className="wow zoomIn delay-0-5s"
                    src="assets/images/about/about-logo.png"
                    alt="About"
                  />
                </div>
                <div className="bottom-part">
                  <img
                    className="wow fadeInDown delay-0-5s"
                    src="assets/images/about/about-dots.png"
                    alt="About"
                  />
                  <img
                    className="wow fadeInDown delay-0-3s"
                    src="assets/images/about/about2.jpg"
                    alt="About"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Statistics Area start */}

      {/* Statistics Area end */}
      {/* Partners Area start */}
      <section className="partners-area mt-50 pt-150 pb-100 rmt-30 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Global Partnerler</span>
            <h2 style={{ color: "white" }}>Çözüm Ortaklarımız</h2>
          </div>
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-3s">
                  <img
                    src="assets/images/partners/partner1.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-4s">
                  <img
                    src="assets/images/partners/partner2.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-5s">
                  <img
                    src="assets/images/partners/partner3.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-6s">
                  <img
                    src="assets/images/partners/partner4.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-7s">
                  <img
                    src="assets/images/partners/partner5.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Partners Area end */}
      {/* Pricing Plan Area start Atacan 
      <section className="price-plan-area bgc-lighter mt-30 rmt-0 pt-220 pb-100 rpb-70 rel z-1">
        
      </section>*/}
      {/* Pricing Plan Area end */}
      {/* Testimonials Area start Atacan 
      <section className="testimonials-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="testimonial-left-part rmb-85 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-15">Our Testimonials</span>
                  <h2>What Our Clients Say About Solutions</h2>
                </div>
                <TestimonialsSlider2 />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-right-part wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonial.jpg"
                  alt="Testimonial"
                />
                <div className="testi-image-over">
                  <h3>We Have More 3248+ Reviews From Global Clients</h3>
                  <img
                    src="assets/images/testimonials/signature.png"
                    alt="Signature"
                  />
                </div>
                <div className="dot-shapes">
                  <img
                    src="assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                  <img
                    src="assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Testimonials Area end */}
      {/* Blog Area start Atacan 
      <section className="blog-area pb-150 mb-30 rmb-0 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Our Blog &amp; News</span>
            <h2>Latest Blog, New &amp; Articles</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Jule 26, 2022</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (25)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link legacyBehavior href="blog-details">
                      Voice Usabilit Consideration Partially Visually Hidden
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author.jpg" alt="Author" />
                    <i>Post By </i>
                    <a href="#">John M. Brecht</a>
                  </div>
                  <p>
                    We denounce righteou indignation and dislike men beguile and
                    demoralize charms
                  </p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Jule 26, 2022</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (25)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link legacyBehavior href="blog-details">
                      How Create Vanil Java Script Gant Chart Adding Task
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author.jpg" alt="Author" />
                    <i>Post By </i>
                    <a href="#">John M. Brecht</a>
                  </div>
                  <p>
                    We denounce righteou indignation and dislike men beguile and
                    demoralize charms
                  </p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Jule 26, 2022</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (25)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link legacyBehavior href="blog-details">
                      Smashing Podcast Episode 47 Soueidan Accessibility
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author.jpg" alt="Author" />
                    <i>Post By </i>
                    <a href="#">John M. Brecht</a>
                  </div>
                  <p>
                    We denounce righteou indignation and dislike men beguile and
                    demoralize charms
                  </p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      {/* Blog Area end */}

      {/*------------------index2 */}

      {/* services area start */}
      {/*
      <section className="services-area-two rel mt-100 z-2" style={{marginBottom:'5%'}}>
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">What We Provides</span>
            <h2>Digital Core Services</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/services/service1.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Digital Marketing</h4>
                  <ul className="list-style-three">
                    <li>Paid Marketing</li>
                    <li>CRO</li>
                    <li>Content Marketing</li>
                    <li>Email Marketing</li>
                    <li>SMO</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/services/service2.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Mobile Application</h4>
                  <ul className="list-style-three">
                    <li>Unique UI Design</li>
                    <li>Clean Development</li>
                    <li>Swift</li>
                    <li>Kotlin</li>
                    <li>React Native</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/services/service3.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Web Development</h4>
                  <ul className="list-style-three">
                    <li>Development Consulting</li>
                    <li>UX/UI Cool Design</li>
                    <li>Software Engineering</li>
                    <li>Product Development</li>
                    <li>Enhancement</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/services/service4.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title">Technical Support</h4>
                  <ul className="list-style-three">
                    <li>Security Management </li>
                    <li>Automated Deployments </li>
                    <li>Incident Management(SLA)</li>
                    <li>Compliance Monitoring</li>
                    <li>CI/CD and DevOps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> Atacan */}
      {/* services area end */}

      {/* Why Choose Us Area start */}

      <section
        className="why-choose-us-area py-130 rpy-100 rel z-1"
        style={{ marginBottom: "5%" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">
                  Neden OXODES'i Tercih Etmelisiniz?
                </span>
                <h2>Endüstriyel Yazılım ve Donanım Çözümlerimiz</h2>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"wc-tap1"}>
            <div className="why-choose-tab">
              <Nav
                as={"ul"}
                className="nav nav-pills nav-fill mb-80 rmb-50 wow fadeInUp delay-0-4s"
              >
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap1"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap1"
                  >
                    <i className="flaticon-creativity" />{" "}
                    <span>Oxo System</span>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap2"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap2"
                  >
                    <i className="flaticon-test" /> <span>Moxo</span>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap3"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap3"
                  >
                    <i className="flaticon-cyber-security-1" />{" "}
                    <span>Oxo-Scanner</span>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap4"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap4"
                  >
                    <i className="flaticon-support" /> <span>Tech Support</span>
                  </Nav.Link>
                </li>
              </Nav>
              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap1">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/oxo/oxo1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>
                          Milimetrik düzeyde konum tespiti ile operatörlerin
                          proses adımlarının takibini ve kontrolü
                        </h3>
                        <p>
                          Moxo System Nedir: 3 boyutlu uzayda konfigüre edilmiş
                          koordinatları milimetre altı hassasiyetle tespit
                          ederek ölçüm işlemleri yapmaktadır. M-oxo sistemi
                          içerisinde yer alan hassas ölçüm probu ile herhangi
                          bir referans noktası (ve/veya düzlem) ile: mesafe,
                          açı, düzlemsellik, paralellik, eğrilik gibi
                          parametrelerin boyuttan bağımsız şekilde 30µm
                          hassasiyetle ve fikstüre ihtiyaç duymadan tamamen
                          taşınabilir şekilde ölçüm işlemlerini yapabilen bir
                          ölçüm makinesidir.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Proses Doğruluk Takibi</li>
                          <li>Esnek Konfigürasyon</li>
                          <li>Kararlı Sistem</li>
                          <li>Hareketli Montaj İstasyonlarında Çalışabilme</li>
                        </ul>
                        <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Daha Fazla <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap2">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>
                          An impactful Application Needs an innovative and
                          interactive.
                        </h3>
                        <p>
                          Moxo System Nedir: 3 boyutlu uzayda konfigüre edilmiş
                          koordinatları milimetre altı hassasiyetle tespit
                          ederek ölçüm işlemleri yapmaktadır. M-oxo sistemi
                          içerisinde yer alan hassas ölçüm probu ile herhangi
                          bir referans noktası (ve/veya düzlem) ile: mesafe,
                          açı, düzlemsellik, paralellik, eğrilik gibi
                          parametrelerin boyuttan bağımsız şekilde 30µm
                          hassasiyetle ve fikstüre ihtiyaç duymadan tamamen
                          taşınabilir şekilde ölçüm işlemlerini yapabilen bir
                          ölçüm makinesidir.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Yüksek Ölçüm Verimliliği</li>
                          <li>Personel Bazlı Ölçüm Hatalarını Önler</li>
                          <li>Kolay Kurulum</li>
                        </ul>
                        <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Daha Fazla <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap3">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>
                          An impactful Application Needs an innovative and
                          interactive.
                        </h3>
                        <p>
                          Our experts help create the right website for across
                          all major platforms and devices. Taking into
                          consideration your user behavior volu promotey the
                          optimal experience we design responsive performance
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Comprehensive UI/UX Assessment</li>
                          <p>
                            Geliştirilen yazılım ve donanım çözümü sayesinde, 20
                            mikron hassiyette ölçüm yapılabilmektedir.
                          </p>
                          <li>Deep Contextual Research and 360° Planning</li>
                          <li>Wireframing &amp; Prototyping</li>
                        </ul>
                        <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap4">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>
                          An impactful Application Needs an innovative and
                          interactive.
                        </h3>
                        <p>
                          Our experts help create the right website for across
                          all major platforms and devices. Taking into
                          consideration your user behavior volu promotey the
                          optimal experience we design responsive performance
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Comprehensive UI/UX Assessment</li>
                          <li>Deep Contextual Research and 360° Planning</li>
                          <li>Wireframing &amp; Prototyping</li>
                        </ul>
                        <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
      </section>
      {/* Why Choose Us Area end */}

      {/*index3*/}

      <section className="services-area-three py-100 rpy-70 rel z-1">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-5">
              <div className="services-content-three mb-30 rmb-65 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Servis Hizmetlerimiz</span>
                  <h2>
                    Sektör içinde bir çok alanda yenilikçi çözümler sunuyoruz{" "}
                  </h2>
                </div>
                <p>
                  Oxodes endüstriyel otomasyonun gücünü kullanarak işletmenizi
                  geleceğe taşımak, makinalarınıza ve sistemlerinize yazılım
                  desteği vermek ve süreçlerinizi optimize etmek için buradayız.
                </p>
                <ul className="list-style-one pt-5">
                  <li>İşletme Verimliliğinin Artırılması</li>
                  <li>Rekabet Avantajı Sağlama</li>
                  <li>
                    Endüstri 4.0 ve IoT Teknolojileriyle İşletme Akıllılaştırma
                  </li>
                </ul>
                <Link legacyBehavior href="/services">
                  <a className="theme-btn mt-45">
                    Hizmet Detayları <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="service-item-four wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-networking" />
                    </div>
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Görüntü İşleme Çözümleri
                      </Link>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                  </div>
                  <div className="service-item-four wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-app-development" />
                    </div>
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Yapay Zeka Servisleri
                      </Link>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-item-four mt-60 wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="flaticon-coding" />
                    </div>
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Kalite Kontrol İstasyonları
                      </Link>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                  </div>
                  <div className="service-item-four wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="flaticon-seo" />
                    </div>
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Görüntü İşleme Sistem Tasarımları
                      </Link>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servcies-bg-shape">
          <img src="assets/images/shapes/services-bg-shape.png" alt="Shape" />
        </div>
      </section>

      <section className="testimonials-area-two pb-115 rpb-85 rel z-1">
        <div className="container">
          <TestimonialsSlider />
        </div>
      </section>
    </Layout>
  );
};
export default Index;
