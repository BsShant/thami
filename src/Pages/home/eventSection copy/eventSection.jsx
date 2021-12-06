import React, { useEffect } from "react";
import GoToTop from "../../goToTop";
import slider from "../../../assests/slider.jpg";
import style from "../../style.css";
import imgwhoweare from "../../../assests/imgwhoweare.png";
import munamadan from "../../../assests/munamadan.jpg";
import aboutcard1 from "../../../assests/aboutcard1.jpg";
import fourthimg from "../../../assests/fourthimg.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBiking,
  faBars,
  faBookmark,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import thamigirl from "../../../assests/thamigirls.jpg";
import bookcover from "../../../assests/bookcover.jpg";
import sponsor from "../../../assests/sponsor.jpg";
import support from "../../../assests/support.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Button } from "react-bootstrap";
import ContactUs from "../../ContactUs";
import { useSelector } from "react-redux";

import { fetchingHomeContentStarts } from "../../../store/homeStore/home.action";

const EventSection = () => {
  let history = useHistory();
  const ourEventSection = useSelector(
    (state) => state.homeStore.ourEventSection
  );

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return (
    <div
      className="text-center section"
      style={{
        background: "#f6b745",
      }}
    >
      <Container>
        <h3
          style={{
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          {ourEventSection ? ourEventSection.topTitle : null}
        </h3>
        <h2
          style={{
            marginBottom: "30px",
          }}
        >
          {ourEventSection ? ourEventSection.heading : null}
        </h2>

        <div className="row mt-5">
          <div
            className="col-md-4 col-sm-12 col-xs-12 col-lg-4 align-middle"
            style={{ padding: "30px 15px" }}
            data-aos="fade-up"
          >
            <div className="d-flex justify-content-center">
              <div
                className="rounded-circle align-middle"
                style={{
                  background: "black",
                  width: "150px",
                  height: "150px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="85"
                  height="85"
                  fill="#f6b745"
                  class="bi bi-newspaper"
                  viewBox="0 0 16 16"
                  style={{ marginTop: "2rem" }}
                >
                  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                </svg>
              </div>
            </div>
            <h3
              style={{
                marginTop: "30px",
              }}
            >
              {ourEventSection ? ourEventSection.newsCardName : null}
            </h3>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "50px",
              }}
            >
              {ourEventSection ? ourEventSection.newsCardDetail : null}

              {/* We distributes new from around a nation or the world to
            news-paper, periodical, radio and television.{" "} */}
            </p>
            <button
              className="buttonReverse"
              onClick={() => history.push("/event/news")}
            >
              {ourEventSection ? ourEventSection.newsButtonName : null}

              {/* Learn More */}
            </button>
          </div>
          <div
            className="col-md-4 col-sm-12 col-xs-12 col-lg-4  align-middle"
            style={{ padding: "30px 15px" }}
            data-aos="fade-down"
          >
            <div className="d-flex justify-content-center">
              <div
                className="rounded-circle align-middle"
                style={{
                  background: "black",
                  width: "150px",
                  height: "150px",
                }}
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{ color: "#f6b745", height: "100%", width: "49%" }}
                />
              </div>
            </div>
            <h3
              style={{
                marginTop: "30px",
              }}
            >
              {ourEventSection ? ourEventSection.blogsCardName : null}
            </h3>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "50px",
              }}
            >
              {ourEventSection ? ourEventSection.blogsCardDetail : null}

              {/* We distributes new from around a nation or the world to
            news-paper, periodical, radio and television.{" "} */}
            </p>
            <button
              className="buttonReverse"
              onClick={() => history.push("/event/blogs")}
            >
              {ourEventSection ? ourEventSection.blogsButtonName : null}

              {/* Learn More */}
            </button>
          </div>
          <div
            className="col-md-4 col-sm-12 col-xs-12 col-lg-4  align-middle"
            style={{ padding: "30px 15px" }}
            data-aos="fade-up"
          >
            <div className="d-flex justify-content-center">
              <div
                className="rounded-circle align-middle"
                style={{
                  background: "black",
                  width: "150px",
                  height: "150px",
                }}
              >
                <FontAwesomeIcon
                  icon={faScroll}
                  style={{ color: "#f6b745", height: "100%", width: "49%" }}
                />
              </div>
            </div>
            <h3
              style={{
                marginTop: "30px",
              }}
            >
              {ourEventSection ? ourEventSection.ourArticlesCardName : null}
            </h3>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "50px",
              }}
            >
              {ourEventSection ? ourEventSection.ourArticlesCardDetail : null}

              {/* We distributes new from around a nation or the world to
            news-paper, periodical, radio and television.{" "} */}
            </p>
            <button
              className="buttonReverse"
              onClick={() => history.push("/event/our-articles")}
            >
              {ourEventSection ? ourEventSection.ourArticlesButtonName : null}

              {/* Learn More */}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default EventSection;
