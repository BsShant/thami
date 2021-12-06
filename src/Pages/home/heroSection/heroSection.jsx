import React, { useEffect } from "react";
import "../../style.css";
import { Container, Button } from "react-bootstrap";
import slider from "../../../assests/bnw.jpg";
import { useHistory } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const heroSection = useSelector((state) => state.homeStore.heroSection);

  let history = useHistory();

  let hero = { heading: "", subHeading: "", buttonName: "" };
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${slider})`,
        width: "100%",
        height: "100vh",
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'
      }}
    >
      <div className="color-overlay">
        <Container>
          <div className="headerinfo col-md-12 col-sm-12">
            <h1
              className="h1tag"
              data-aos="fade-down"
              style={{
                paddingTop: "10rem",
                fontWeight: "bold",
                whiteSpace: "pre-line",
                textTransform:"uppercase"
              }}
            >
              {heroSection ? heroSection.heading : null}
              {/* WELCOME TO <br /> NEPAL THAMI SOCIETY */}
            </h1>
            <p
              data-aos="fade-up"
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "50px",
              }}
            >
              {heroSection ? heroSection.subHeading : null}

              {/* Protect culture, protect ourselves */}
            </p>
            <button
              data-aos="fade-up"
              className="buttonNormal"
              onClick={() => history.push("/about/our-story")}
            >
              {heroSection ? heroSection.buttonName : null}

              {/* Learn more */}
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
