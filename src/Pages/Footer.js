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
import { useDispatch, useSelector } from "react-redux";


const Footer = () => {
  let history = useHistory();
  const getInvolvedSection = useSelector(state=>state.footerStore.getInvolvedSection)
  const contactSection = useSelector(state=>state.footerStore.contactSection)
  const aboutUsSection = useSelector(state=>state.footerStore.aboutUsSection)
  const socialMediaSection = useSelector(state=>state.footerStore.socialMediaSection)

  return (
    <React.Fragment>
      <footer
        id="footer"
        className="footer-1 section footerSection"
      >
        <div className="main-footer widgets-dark typo-light footerWidget" >
          <div className="container">
            <div
              className="row"
              style={{
                fontFamily: "sans-serif",
                color: "white",
              }}
            >
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" style={{marginBottom:"30px"}}>
                <div className="widget fBox no-box" style={{ textAlign: "left" }}>
                  <img src={Logo} style={{ height: "12rem" }} />
                  <p style={{ fontSize: "20px" }}>
                    {aboutUsSection? aboutUsSection.detail : null}
                    {/* We are a social unit with commonality <br /> such as norms,
                    religion, values, customs, <br /> or identity. */}
                  </p>
                </div>
                <ul className="social-footer2">
                <li className="socialIconList">
                  <a
                    href={`${socialMediaSection? socialMediaSection.facebook : null}`}
                    target="_blank"
                    title="Facebook"
                  >
                    <img alt="Facebook" width="30" height="30" src={facebook} />
                  </a>
                </li>
                <li className="socialIconList">
                  <a 
                    href={`${socialMediaSection? socialMediaSection.twitter : null}`}
                    target="_blank" 
                    title="Twitter">
                    <img alt="Twitter" width="30" height="30" src={twitter} />
                  </a>
                </li>
                <li className="socialIconList">
                  <a
                    title="instagram"
                    target="_blank"
                    href={`${socialMediaSection? socialMediaSection.instagram : null}`}
                  >
                    <img
                      alt="instagram"
                      width="30"
                      height="30"
                      src={instagram}
                    />
                  </a>
                </li>
                <li className="socialIconList">
                  <a
                    title="youtube"
                    target="_blank"
                    href={`${socialMediaSection? socialMediaSection.youtube : null}`}
                  >
                    <img alt="youtube" width="35" height="35" src={youtube} />
                  </a>
                </li>
              </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{marginBottom:"30px"}}>
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
                          onClick={()=>history.push('/')}
                          className="footerNav"

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
                          onClick={()=>history.push('/about/our-story')}
                          className="footerNav"

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
                          onClick={()=>history.push('/event/news')}
                          className="footerNav"

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
                          onClick={()=>history.push('/publication/our-books')}
                          className="footerNav"

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
                          onClick={()=>history.push('/contact-us')}
                          className="footerNav"
                        >
                          Contact Us
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{marginBottom:"30px"}}>
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
                        {contactSection? contactSection.address : null}
                        {/* Shamkhusi, kathmandu <br /> Nepal */}
                      </div>
                    </li>
                    <br />
                    <li>
                      <div
                        className="thumb-content"
                        style={{ fontSize: "17px" }}
                      >
                                                {contactSection? contactSection.phone : null}

                        {/* +9779849724596 */}
                      </div>
                    </li>
                    <br />
                    <li>
                      <div
                        classname="thumb-content"
                        style={{ fontSize: "17px" }}
                      >
                                                {contactSection? contactSection.email : null}

                        {/* thamisociety@gmail.com */}
                      </div>
                    </li>

                    <br />
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" style={{marginBottom:"30px"}}>
                <div className="widget fBox no-box" style={{ textAlign: "left" }}>
                  <h2 className="title" style={{ color:"white" }}>
                    Get Involved<span></span>
                  </h2>
                  <br />
                  <p style={{ fontSize: "1.2rem", fontSize: "17px" }}>
                    {getInvolvedSection? getInvolvedSection.detail : null}
                    {/* An open community several of our sites were orginallly
                    started by volunteers. */}
                  </p>
                  <br />
                  <button
                    type="button"
                   className="buttonNormal"
                   onClick={()=>history.push('/getinvolved/be-a-member')}

                  >
                    {getInvolvedSection? getInvolvedSection.buttonName : null}
                    {/* Be a Member */}
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
        <div className="footer-copyright" >
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
