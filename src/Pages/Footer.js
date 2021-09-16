import React from "react";
import footerStyle from "../Pages/footerStyle.css";
import style from "../Pages/style.css";
import Logo from "../assests/Logo.png";
import facebook from "../assests/facebook.png";
import youtube from "../assests/youtube.png";
import twitter from "../assests/twitter.png";
import instagram from "../assests/instagram.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
const Footer = () => {
  let history = useHistory();

  return (
    <React.Fragment>
      <footer
        id="footer"
        className="footer-1 section"
        style={{ backgroundColor: "black", margin:"0px 0px", paddingBottom:"0", minHeight:"auto" }}
      >
        <div className="main-footer widgets-dark typo-light" >
          <div className="container">
            <div
              className="row"
              style={{
                fontFamily: "sans-serif",
                color: "white",
              }}
            >
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" style={{marginBottom:"50px"}}>
                <div className="widget fBox no-box" style={{ textAlign: "left" }}>
                  <img src={Logo} style={{ height: "12rem" }} />
                  <p style={{ fontSize: "20px" }}>
                    We are a social unit with commonality <br /> such as norms,
                    religion, values, customs, <br /> or identity.
                  </p>
                </div>
                <ul className="social-footer2">
                <li className="">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    title="Facebook"
                  >
                    <img alt="Facebook" width="30" height="30" src={facebook} />
                  </a>
                </li>
                <li className="">
                  <a href="https://twitter.com" target="_blank" title="Twitter">
                    <img alt="Twitter" width="30" height="30" src={twitter} />
                  </a>
                </li>
                <li className="">
                  <a
                    title="instagram"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <img
                      alt="instagram"
                      width="30"
                      height="30"
                      src={instagram}
                    />
                  </a>
                </li>
                <li className="">
                  <a
                    title="youtube"
                    target="_blank"
                    href="https://www.youtube.com/"
                  >
                    <img alt="youtube" width="35" height="35" src={youtube} />
                  </a>
                </li>
              </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{marginBottom:"50px"}}>
                <div className="widget fBox no-box" style={{ textAlign: "left" }}>
                  <h2 className="title" style={{ color:"white" }}>
                    Navigation<span></span>
                  </h2>
                  <br />
                  <ul
                    className="thumbnail-widget"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <li>
                      <div className="thumb-content">
                        <a
                          style={{ textDecoration: "none", fontSize: "18px" }}
                          href="#."
                        >
                          Home
                        </a>
                      </div>
                    </li>
                    <br />
                    <li>
                      <div className="thumb-content">
                        <a
                          style={{ textDecoration: "none", fontSize: "18px" }}
                          href="#."
                        >
                          About
                        </a>
                      </div>
                    </li>
                    <br />
                    <li>
                      <div className="thumb-content">
                        <a
                          style={{ textDecoration: "none", fontSize: "18px" }}
                          href="#."
                        >
                          Event
                        </a>
                      </div>
                    </li>
                    <br />
                    <li>
                      <div className="thumb-content">
                        <a
                          style={{ textDecoration: "none", fontSize: "19px" }}
                          href="#."
                        >
                          Publication
                        </a>
                      </div>
                    </li>
                    <br />
                    <li>
                      <div className="thumb-content">
                        <a
                          style={{ textDecoration: "none", fontSize: "17px" }}
                          href="#."
                        >
                          Contact
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{marginBottom:"50px"}}>
                <div className="widget fBox no-box" style={{ textAlign: "left" }}>

                  <h2 className="title" style={{ color:"white" }}>
                    Contact Us<span></span>
                  </h2>
                  <br />
                  <ul
                    className="thumbnail-widget"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <li>
                      <div
                        className="thumb-content"
                        style={{ fontSize: "17px" }}
                      >
                        Shamkhusi, kathmandu <br /> Nepal
                      </div>
                    </li>
                    <br />
                    <li>
                      <div
                        className="thumb-content"
                        style={{ fontSize: "17px" }}
                      >
                        +9779849724596
                      </div>
                    </li>
                    <br />
                    <li>
                      <div
                        classname="thumb-content"
                        style={{ fontSize: "17px" }}
                      >
                        thamisociety@gmail.com
                      </div>
                    </li>

                    <br />
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div className="widget fBox no-box" style={{ textAlign: "left" }}>
                  <h2 className="title" style={{ color:"white" }}>
                    Get Involved<span></span>
                  </h2>
                  <br />
                  <p style={{ fontSize: "1.2rem", fontSize: "17px" }}>
                    An open community several of our sites were orginallly
                    started by volunteers.
                  </p>
                  <br />
                  <button
                    type="button"
                   className="buttonNormal"
                   onClick={()=>history.push('/getinvolved/be-member')}

                  >
                    Be a Member
                  </button>
                </div>
              </div>
             
              <hr
                className="col-md-12 mx-auto mb-5"
                style={{ padding: "1.5px" }}
              ></hr>
            </div>

          </div>

        </div>
        <div className="footer-copyright" style={{ color: "white", borderTop:"1px solid white", marginTop:"-100px",  padding: "20px 0 0"}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  Copyright © 2021 all rights reserved | this website is made by <br />
                  LOGIN Corporation
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
