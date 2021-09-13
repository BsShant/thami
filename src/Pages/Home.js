import React from "react";
import slider from "../assests/slider.jpg";
import imgwhoweare from "../assests/imgwhoweare.png";
import style from "../Pages/style.css";
import thamigirl from "../assests/thamigirls.jpg";
import bookcover from "../assests/bookcover.jpg";
import sponsor from "../assests/sponsor.jpg";
import support from "../assests/support.jpg";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${slider})`,
          width: "100%",
          height: "650px",
        }}
      >
        <div className="color-overlay">
          <Container>
            <Container>
              <div className="col-6">
                <h1
                  className="h1tag"
                  style={{ paddingTop: "10rem", fontWeight: "bold" }}
                >
                  WELCOME TO <br /> NEPAL THAMI SOCIETY
                </h1>
                <p
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Protect culture, protect ourselves
                </p>
                <button
                  style={{
                    background: "#f6b745",
                    border: "none",
                    padding: "15px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    fontWeight: "bold",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  Learn more
                </button>
              </div>
            </Container>
          </Container>
        </div>
      </div>
      <Container>
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div
            className="row"
            style={{ paddingTop: "90px", paddingBottom: "90px" }}
          >
            <div className="col-6">
              <img
                src={thamigirl}
                style={{ width: "100%", height: "100%" }}
              ></img>
            </div>
            <div className="col-6">
              <h2
                style={{
                  color: "#f6b745",
                  fontWeight: "bold",
                  fontSize: "24px",
                  fontFamily: "sans-serif",
                  marginLeft: "10px",
                }}
              >
                About Us
              </h2>
              <h1
                style={{
                  fontSize: "29px",
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginLeft: "10px",
                }}
              >
                Know About Our Thami Society
              </h1>
              <p
                style={{
                  fontFamily: "20px",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                We are a social unit commonality such as norms,
                <br /> religion, values, custom or indentity. Our communicaty
                may share a sance of place situated in a given geographical area
                or in virtual space through communication platform.
              </p>
              <button
                style={{
                  background: "#f6b745",
                  border: "none",
                  padding: "15px",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  fontWeight: "bold",
                  marginLeft: "10px",
                  marginTop: "20px",
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div
        className="text-center"
        style={{
          background: "#f6b745",
          paddingBottom: "50px",
        }}
      >
        <Container>
          <h3
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "25px",
              fontFamily: "sans-serif",
              paddingTop: "50px",
            }}
          >
            Events
          </h3>
          <h2
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "45px",
            }}
          >
            About Our Events
          </h2>

          <div className="row mt-5">
            <div className="col-4 align-middle">
              <div className="d-flex justify-content-center">
                <div
                  className="rounded-circle align-middle"
                  style={{
                    background: "#808080",
                    width: "150px",
                    height: "150px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="85"
                    height="85"
                    fill="#FFFFFF"
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
                  marginTop: "2rem",
                  color: "#FFFFFF",
                  fontSize: "30px",
                }}
              >
                News
              </h3>
              <p>
                We distributes new from around a nation or the world to
                news-paper, periodical, radio and television.{" "}
              </p>
            </div>
            <div className="col-4 align-middle">
              <div className="d-flex justify-content-center">
                <div
                  className="rounded-circle align-middle"
                  style={{
                    background: "#808080",
                    width: "150px",
                    height: "150px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="85"
                    height="85"
                    fill="#FFFFFF"
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
                  marginTop: "2rem",
                  color: "#FFFFFF",
                  fontSize: "30px",
                }}
              >
                News
              </h3>
              <p>
                We distributes new from around a nation or the world to
                news-paper, periodical, radio and television.{" "}
              </p>
            </div>
            <div className="col-4 align-middle">
              <div className="d-flex justify-content-center">
                <div
                  className="rounded-circle align-middle"
                  style={{
                    background: "#808080",
                    width: "150px",
                    height: "150px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="85"
                    height="85"
                    fill="#FFFFFF"
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
                  marginTop: "2rem",
                  color: "#FFFFFF",
                  fontSize: "30px",
                }}
              >
                News
              </h3>
              <p>
                We distributes new from around a nation or the world to
                news-paper, periodical, radio and television.{" "}
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="row mt-2 mb-5">
          <div
            className="col-6"
            style={{ fontFamily: "sans-serif", marginTop: "150px" }}
          >
            <p style={{ fontSize: "30px", color: "#f6b745" }}>Publication</p>
            <h1>
              What we are <br /> publicing
            </h1>
            <h4>
              In the broadest sense, the publishing industry would include
              newspaper publishing, magazine publishing, music publishing, map
              publishing, government information publishing, comic book
              publishing, and book publishing.
            </h4>
            <button
              type="button"
              style={{
                backgroundColor: "#f6b745",
                padding: "15px",
                border: "none",
                width: "200px",
              }}
            >
              Read More
            </button>
          </div>
          <div className="col-6" style={{ marginTop: "100px" }}>
            <img src={bookcover} style={{ width: "600px", height: "500px" }} />
          </div>
        </div>
      </Container>

      <div style={{ backgroundColor: "#f6b745", padding: "1rem" }}>
        <Container>
          <div className="row ">
            <div
              className="col-8"
              style={{ fontFamily: "sans-serif", marginTop: "125px" }}
            >
              <div className="row">
                <div className="col-4 ">
                  <div
                    class="card"
                    style={{ width: "20rem", height: "34rem", border: "none" }}
                  >
                    <img src={sponsor} style={{ height: "19rem" }} />
                    <div class="card-body">
                      <h5
                        class="card-title d-flex justify-content-center"
                        style={{
                          fontWeight: "bold",
                          marginTop: "1.5rem",
                          marginBottom: "1rem",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Sponsor a community
                      </h5>
                      <p class="card-text">
                        Sponsors commit to providing financial, emotional and
                        resettlement suppot to help the community.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    class="card"
                    style={{
                      width: "20rem",
                      height: "34rem",
                      border: "none",
                      marginLeft: "3rem",
                    }}
                  >
                    <img src={support} style={{ height: "19rem" }} />
                    <div class="card-body">
                      <h5
                        class="card-title d-flex justify-content-center"
                        style={{
                          fontWeight: "bold",
                          marginTop: "1.5rem",
                          marginBottom: "1rem",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Support a community
                      </h5>
                      <p class="card-text">
                        Support for community organisat ions. We can help you
                        deliver the services people in our community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-4"
              style={{ marginTop: "100px", color: "white", marginTop: "130px" }}
            >
              <p
                style={{
                  fontSize: "30px",
                  color: "white",
                  fontFamily: "sans-serif",
                }}
              >
                Get involved
              </p>
              <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>
                An open <br />
                community
              </h1>
              <p
                style={{
                  marginTop: "2rem",
                  fontFamily: "sans-serif",
                  marginBottom: "3rem",
                  fontSize: "19px",
                }}
              >
                Several of our sites were originally started by volunteers. Over
                time, they have become Core Thami Society projects that are, for
                the most part, maintained and administered by paid staff.
              </p>
              <button
                type="button"
                style={{
                  backgroundColor: "white",
                  padding: "18px",
                  border: "none",
                  width: "15rem",
                  marginBottom: "170px",
                  color: "#f6b745",
                  fontSize: "22px",
                  fontFamily: "sans-serif",
                }}
              >
                Be a Member
              </button>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Home;
