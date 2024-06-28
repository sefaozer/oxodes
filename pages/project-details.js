import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";

const ProjectDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Project Details"} />
      <section className="project-details-area pt-130 rpt-100 pb-60 rpb-30">
        <div className="container">
          <div className="project-details-content">
            <div className="section-title mb-25">
              <h2>Oxo System Nedir</h2>
            </div>
            <p>
              3 boyutlu uzayda konfigüre edilmiş koordinatları milimetre altı
              hassasiyetle tespit ederek üretimde meydana gelebilecek hataların
              önüne geçmeye yarayan dijital poka-yoke sistemidir. Bir sıkıcının
              doğru noktada iş yapıp yapmadığı, bir parçanın doğru yere koyulup
              koyulmadığı, hareket eden bir alet ile sürekli işlemin yapılıp
              yapılmadığı ve gerçek zamanlı takip gerektiren uygulamaların
              yapılması gerektiği gibi yapılıp yapılmadığı sorularının cevabını
              Oxo-System verebilmektedir.
            </p>
            <div className="image my-45">
              <img src="assets/images/oxo/oxo3.jpg" alt="Project Details" />
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11">
                <h4>Özellikler</h4>
                <div className="project-information mt-20">
                  <div className="project-info-item">
                    <span>KABLOSUZ ÇALIŞMA</span>
                    <h5>EVET</h5>
                  </div>
                  <div className="project-info-item">
                    <span>ÇALIŞMA SÜRESİ</span>
                    <h5>ŞARJ İHTİYACI YOK</h5>
                  </div>
                  <div className="project-info-item">
                    <span>HAREKETLİ İSTASYONDA KONTROL ETME</span>
                    <h5>EVET</h5>
                  </div>
                  <div className="project-info-item">
                    <span>HAREKETLİ İSTASYON TESPİT HIZI</span>
                    <h5>4 m/s</h5>
                  </div>
                  <div className="project-info-item">
                    <span>VERİ ANALİZİ</span>
                    <h5>EVET</h5>
                  </div>
                  <div className="project-info-item">
                    <span>İZLENEBİLİRLİK</span>
                    <h5>%100</h5>
                  </div>
                  <div className="project-info-item">
                    <span>HASSASİYET</span>
                    <h5>1-5 mm</h5>
                  </div>
                  <div className="project-info-item">
                    <span>AKTİF EĞİTİM</span>
                    <h5>% 90</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-title mt-60 mb-25">
              <h3>Çalışma Sahaları</h3>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="row mt-50">
              <div className="col-xl-3 col-lg-4 mb-30">
                <img src="assets/images/oxo/oxo2.jpg" alt="Project" />
              </div>

              <div className="col-xl-3 col-lg-4 mb-30">
                <img src="assets/images/oxo/oxo4.jpg" alt="Project" />
              </div>
              <div className="col-xl-3 col-lg-4 mb-30">
                <img src="assets/images/oxo/oxo5.jpg" alt="Project" />
              </div>
            </div>
            <div className="section-title mt-20 mb-25">
              <h3>Referanslar</h3>
            </div>

            <ul className="list-style-one pt-5">
              <li>Vestel</li>
              <li>Hyundai</li>
              <li>Turkish Technic</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Project Details Area end */}
      {/* Next Prev Project start */}
      <div className="next-prev-project pb-80 rpb-50"></div>
    </Layout>
  );
};
export default ProjectDetails;
