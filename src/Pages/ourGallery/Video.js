import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBiking, faBars, faBookmark, faScroll, faPlay } from '@fortawesome/free-solid-svg-icons';
import video from "../../assests/video.jpeg";
import firstimage from "../../assests/firstimage.jpeg";
import secondimage from "../../assests/secondimage.jpeg";
import thirdimage from "../../assests/thirdimage.JPG";
import fourthimg from "../../assests/fourthimg.jpeg";
import fifthimg from "../../assests/fifthimg.jpeg";
import sixthimg from "../../assests/sixthimg.jpeg";
import "../../Pages/style.css";
const Video = () => {
  return (
    <React.Fragment>
      <div className="row" style={{marginBottom:"50px"}}>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6 gridBox show" style={{background:`url(${firstimage})`}}>
            <div className="videoDescription">
            <h3>Cultural program</h3>
            <p>This video contains our culture.</p>
          </div>
            <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "20px",
width: "20px"}} />          </div></div>
            <div className="col-md-6 gridBox show" style={{background:`url(${fourthimg})`}}>
            <div className="videoDescription">
            <h3>Cultural program</h3>
            <p>This video contains our culture.</p>
          </div>
            <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "20px",
width: "20px"}} />          </div>
            </div>
            <div className="col-md-6 gridBox show" style={{background:`url(${fifthimg})`}}>
            <div className="videoDescription">
            <h3>Cultural program</h3>
            <p>This video contains our culture.</p>
          </div>
            <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "20px",
width: "20px"}} />          </div>
            </div>
            <div className="col-md-6 gridBox show" style={{background:`url(${sixthimg})`}}>
            <div className="videoDescription">
            <h3>Cultural program</h3>
            <p>This video contains our culture.</p>
          </div>
            <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "20px",
width: "20px"}} />          </div>
            </div>
            <div className="col-md-12 flatBox show">
            <div className="videoDescription">
            <h3>Cultural program</h3>
            <p>This video contains our culture.</p>
          </div>
            <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "20px",
width: "20px"}} />          </div>
            </div>

          </div>
        </div>
        <div className="col-md-6 massiveBox show">
        <div className="videoDescription">
            <h3>Cultural program</h3>
            <p>This video contains our culture.</p>
          </div>
        <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "20px",
width: "20px"}} />          </div>
        </div>
        <div className="col-md-12 lastBox show">
          <div className="videoDescription">
            <h3>Cultural program</h3>
            <p>This video contains our culture.</p>
          </div>
        <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "20px",
width: "20px"}} />          </div>
        </div>


      </div>
      <div className="row d-flex justify-content-center">
        <button
          style={{
            background: "#f6b745",
            border: "none",
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontWeight: "bold",
          }}
        >
          See more
        </button>
      </div>
      {/* <div className="row" style={{display:"flex", justifyContent:"center"}}>
        <div className="card p-2 shadow-lg" style={{ width: "22rem", position:"relative" }}>
          <img src={video} />
          <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "40px",
width: "50px"}} />          </div>
          <div className="card-body" style={{ padding: "0rem" }}>
            <div className="col-12">
              <div className="row pt-3">
                <div className="col-2 ">
                  <h5
                    style={{
                      width: "2rem",
                      background: "#f6b745",
                      textAlign: "center",
                    }}
                  >
                    <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                    <br />
                  </h5>
                </div>
                <div className="col-10 d-flex justify-content-start">
                  <h4 style={{}}>
                    World runs out of time{" "}
                    <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                      proin in nisi pretium, ultrices <br /> massa non,
                      sollicitudin urna.
                      <br />
                      phasellus rutrum luctus...
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card p-2 ml-2 shadow-lg" style={{ width: "22rem", display:"flex", justifyContent:"center"}}>
          <img src={video} />
          <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "40px",
width: "50px"}} />          </div>
          <div className="card-body" style={{ padding: "0rem" }}>
            <div className="col-12">
              <div className="row pt-3">
                <div className="col-2 ">
                  <h5
                    style={{
                      width: "2rem",
                      background: "#f6b745",
                      textAlign: "center",
                    }}
                  >
                    <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                    <br />
                  </h5>
                </div>
                <div className="col-10 d-flex justify-content-start">
                  <h4 style={{}}>
                    World runs out of time{" "}
                    <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                      proin in nisi pretium, ultrices <br /> massa non,
                      sollicitudin urna.
                      <br />
                      phasellus rutrum luctus...
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card p-2 ml-2 shadow-lg" style={{ width: "22rem",display:"flex", justifyContent:"center" }}>
          <img src={video} />
          <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "40px",
width: "50px"}} />          </div>
          <div className="card-body" style={{ padding: "0rem" }}>
            <div className="col-12">
              <div className="row pt-3">
                <div className="col-2 ">
                  <h5
                    style={{
                      width: "2rem",
                      background: "#f6b745",
                      textAlign: "center",
                    }}
                  >
                    <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                    <br />
                  </h5>
                </div>
                <div className="col-10 d-flex justify-content-start">
                  <h4 style={{}}>
                    World runs out of time{" "}
                    <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                      proin in nisi pretium, ultrices <br /> massa non,
                      sollicitudin urna.
                      <br />
                      phasellus rutrum luctus...
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card p-2 shadow-lg" style={{ width: "22rem", display:"flex", justifyContent:"center" }}>
          <img src={video} />
          <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "40px",
width: "50px"}} />          </div>
          <div className="card-body" style={{ padding: "0rem" }}>
            <div className="col-12">
              <div className="row pt-3">
                <div className="col-2 ">
                  <h5
                    style={{
                      width: "2rem",
                      background: "#f6b745",
                      textAlign: "center",
                    }}
                  >
                    <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                    <br />
                  </h5>
                </div>
                <div className="col-10 d-flex justify-content-start">
                  <h4 style={{}}>
                    World runs out of time{" "}
                    <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                      proin in nisi pretium, ultrices <br /> massa non,
                      sollicitudin urna.
                      <br />
                      phasellus rutrum luctus...
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card p-2 ml-2 shadow-lg" style={{ width: "22rem", display:"flex", justifyContent:"center" }}>
          <img src={video} />
          <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "40px",
width: "50px"}} />          </div>
          <div className="card-body" style={{ padding: "0rem" }}>
            <div className="col-12">
              <div className="row pt-3">
                <div className="col-2 ">
                  <h5
                    style={{
                      width: "2rem",
                      background: "#f6b745",
                      textAlign: "center",
                    }}
                  >
                    <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                    <br />
                  </h5>
                </div>
                <div className="col-10 d-flex justify-content-start">
                  <h4 style={{}}>
                    World runs out of time{" "}
                    <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                      proin in nisi pretium, ultrices <br /> massa non,
                      sollicitudin urna.
                      <br />
                      phasellus rutrum luctus...
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card p-2 ml-2 shadow-lg" style={{ width: "22rem", display:"flex", justifyContent:"center" }}>
          <img src={video} />
          <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "40px",
width: "50px"}} />          </div>
          <div className="card-body" style={{ padding: "0rem" }}>
            <div className="col-12">
              <div className="row pt-3">
                <div className="col-2 ">
                  <h5
                    style={{
                      width: "2rem",
                      background: "#f6b745",
                      textAlign: "center",
                    }}
                  >
                    <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                    <br />
                  </h5>
                </div>
                <div className="col-10 d-flex justify-content-start">
                  <h4 style={{}}>
                    World runs out of time{" "}
                    <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                      proin in nisi pretium, ultrices <br /> massa non,
                      sollicitudin urna.
                      <br />
                      phasellus rutrum luctus...
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <button
          style={{
            background: "#f6b745",
            border: "none",
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          See more
        </button>
      </div> */}
    </React.Fragment>
  );
};
export default Video;
