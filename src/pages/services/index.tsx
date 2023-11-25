import { useEffect } from "react";

import "./style.scss";
// import "./aos.scss";
// import animater from "./aos.js";
import DigitalMarketing from "@app/components/animated-svgs/digital-marketing/digital-marketing-svg";
import Designing from "@app/components/animated-svgs/designing/designing-svg";
import Development from "@app/components/animated-svgs/development/development-svg";

export default function Service() {
  function reveal() {
    let reveals =  document.querySelectorAll(".reveals");

    reveals.forEach((element) => {
      let windowHeight = window.innerHeight;
      let elementTop = element?.getBoundingClientRect().top!;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element?.classList.add("aos-animate");
      } else {
        element?.classList.remove("aos-animate");
      }
    });
  }
  useEffect(() => {
    document.querySelector("body")?.addEventListener("scroll", reveal);
  });
  return (
    <section className="services-wrapper">
      <a id="about"></a>
      <div className="container">
        <div className="row-service">
          <div className="col-service">
            <h2
              className="homepage-heading reveals"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              Digital Destiny: Your <br />
              Journey to <b>Online</b> Prominence
            </h2>
          </div>
          <div className="col-service-1">
            <a
              data-aos="fade-left"
              data-aos-delay={200}
              href="services/index.html"
              className="more-btn reveals"
            >
              View More
              <span />
              <span />
            </a>
          </div>
        </div>
        <div className="row home-service-btns">
          <div
            className="col-lg-4 col-md-4"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <a
              href="service/digital-marketing/index.html"
              className="digital-marketing"
            >
              <span>
                <span className="digitalmarketing-svg">
                  <DigitalMarketing />
                </span>
                <h6>Digital</h6>
                <h4>Marketing</h4>
              </span>
            </a>
          </div>
          <div
            className="col-lg-4 col-md-4"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <a
              href="service/website-designing/index.html"
              className="website-designing"
            >
              <span>
                <span className="websitedesigning-svg">
                  <Designing />
                </span>
                <h6>Website</h6>
                <h4>Designing</h4>
              </span>
            </a>
          </div>
          <div
            className="col-lg-4 col-md-4"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <a
              href="service/software-development/index.html"
              className="software-development"
            >
              <span>
                <span className="softwaredevelopment-svg">
                  <Development />
                </span>
                <h6>Software</h6>
                <h4>Development</h4>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
