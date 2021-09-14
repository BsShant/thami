import React from "react";
import slider from "../assests/slider.jpg";
import style from "../Pages/style.css";
import imgwhoweare from "../assests/imgwhoweare.png";
import fourthimg from "../assests/fourthimg.jpeg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import thamigirl from "../assests/thamigirls.jpg";
import bookcover from "../assests/bookcover.jpg";
import sponsor from "../assests/sponsor.jpg";
import support from "../assests/support.jpg";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  let history = useHistory();

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${slider})`,
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="color-overlay">
          <Container>
            <Container>
              <div className="headerinfo col-md-12 col-sm-12">
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
                    fontSize: "18px",
                    marginBottom:"50px"
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
                 fontSize:"18px"
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
          
          }}
          className="section"
        >
          <div
            className="row"
            
          >
            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-6">
                <img
                src={thamigirl}
                style={{ width: "100%", height: "100%" }}
               ></img>
              
             
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-6" style={{padding:"0 15px", marginTop:"50px"}} >
              <h3
                style={{
                  color: "#f6b745",
                  fontWeight: "bold", marginBottom:"20px"
                  
                }}
              >
                About Us
              </h3>
              <h2
                style={{
                  marginBottom:"30px"
                }}
              >
                Know About Our Thami Society
              </h2>
              <p
                style={{
                 fontSize:"18px",    marginBottom:"50px"

                }}
              >
                We are a social unit commonality such as norms,
                <br /> religion, values, custom or indentity. Our communicaty
                may share a sance of place situated in a given geographical area
                or in virtual space through communication platform.
              </p>
              <button
                              className="buttonNormal"

              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div
        className="text-center section"
        style={{
          background: "#f6b745",
        }}
      >
        <Container>
          <h3
            style={{
             
              fontWeight: "bold", marginBottom:"20px"

            }}
          >
            Events
          </h3>
          <h2
            style={{
              marginBottom:"30px"

            }}
          >
            About Our Events
          </h2>

          <div className="row mt-5" >
            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4 align-middle" style={{padding: "30px 0"}}>
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
                  marginTop:'30px'
                }}
              >
                News
              </h3>
              <p  style={{
                 fontSize:"18px",    marginBottom:"50px"

                }}>
                We distributes new from around a nation or the world to
                news-paper, periodical, radio and television.{" "}
              </p>
              <button
                               className="buttonReverse"

              >
                Learn More
              </button>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4  align-middle" style={{padding: "30px 0"}}>
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
                News
              </h3>
              <p  style={{
                 fontSize:"18px",    marginBottom:"50px"

                }}>
                We distributes new from around a nation or the world to
                news-paper, periodical, radio and television.{" "}
              </p>
              <button
                               className="buttonReverse"

              >
                Learn More
              </button>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4  align-middle" style={{padding: "30px 0"}}>
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
                News
              </h3>
              <p  style={{
                 fontSize:"18px",    marginBottom:"50px"

                }}>
                We distributes new from around a nation or the world to
                news-paper, periodical, radio and television.{" "}
              </p>
              <button
               className="buttonReverse"
              >
                Learn More
              </button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="row section">
          <div
            className="col-md-12 col-sm-12 col-xs-12 col-lg-6 "
            style={{ margin: "50px 0" }}
          >
            <h3 style={{ color: "#f6b745" }} className="topTitle">Publication</h3>
            <h2 className="middleTitle">
              What we are <br /> publicing
            </h2>
            <p className="paragraph">
              In the broadest sense, the publishing industry would include
              newspaper publishing, magazine publishing, music publishing, map
              publishing, government information publishing, comic book
              publishing, and book publishing.
            </p>
            <button
              type="button"
              className="buttonNormal"

            >
              Read More
            </button>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-6" style={{matginTop:"30px"}}>
            <img src={bookcover} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </Container>

      <div style={{ backgroundColor: "#f6b745", padding: "100px 0 ", marginTop:"100px"}}>
        <Container>
          <div className="row " >
            <div
              className="col-md-12 col-sm-12 col-xs-12 col-lg-8"
            >
              <div className="row">
                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 " style={{padding: "0 10px 0 0"}} >
                  <div
                    class="card"
                    style={{ height: "600px", border: "none" }}
                  >
                    <img src={sponsor} style={{ height: "275px" }} />
                    <div class="card-body">
                      <h3
                        class="card-title d-flex "
                        style={{
                          marginTop: "1.5rem",
                          textAlign:"left"
                        }}
                      >
                        Sponsor a community
                      </h3>
                      <p class="card-text">
                        Sponsors commit to providing financial, emotional and
                        resettlement suppot to help the community.
                      </p>
                      <button
                type="button"
                className="buttonReverse"
              >
               Sponsor Us
              </button>                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6"  style={{padding: "0 10px 0 0"}}>
                  <div
                    class="card"
                    style={{
                      border: "none", height: "600px"
                    }}
                  >
                    <img src={support} style={{ height: "275px" }} />
                    <div class="card-body" style={{textAlign:"left"}}>
                      <h3
                        class="card-title d-flex"
                        style={{
                          marginTop: "1.5rem",
                          textAlign:"left!important"

                        }}
                      >
                        Support a community
                      </h3>
                      <p class="card-text">
                        Support for community organisat ions. We can help you
                        deliver the services people in our community.
                      </p>
                      <button
                type="button"
                className="buttonReverse"
              >
               Support Us
              </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-12 col-sm-12 col-xs-12 col-lg-4"
              style={{  marginTop:"50px", padding:"0px"}}
            >
              <h3
                style={{
                  
                }}
                className="topTitle"
              >
                Get involved
              </h3>
              <h2 className="middleTitle"
>
                An open <br />
                community
              </h2>
              <p
                style={{
                  
                }}
                className="paragraph"

              >
                Several of our sites were originally started by volunteers. Over
                time, they have become Core Thami Society projects that are, for
                the most part, maintained and administered by paid staff.
              </p>
              <button
                type="button"
                className="buttonReverse"
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
