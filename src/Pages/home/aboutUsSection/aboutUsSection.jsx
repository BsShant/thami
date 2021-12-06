import React, { useEffect } from "react";
import GoToTop from '../../goToTop';
import slider from "../../../assests/slider.jpg";
import style from "../../style.css";
import imgwhoweare from "../../../assests/imgwhoweare.png";
import munamadan from "../../../assests/munamadan.jpg";
import aboutcard1 from "../../../assests/aboutcard1.jpg";
import fourthimg from "../../../assests/fourthimg.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBiking, faBars, faBookmark, faScroll } from '@fortawesome/free-solid-svg-icons';
import {  
  useHistory,
} from "react-router-dom";
import thamigirl from "../../../assests/thamigirls.jpg";
import bookcover from "../../../assests/bookcover.jpg";
import sponsor from "../../../assests/sponsor.jpg";
import support from "../../../assests/support.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Container, Button } from "react-bootstrap";
import ContactUs from "../../ContactUs";
import { fetchingHomeContentStarts} from '../../../store/homeStore/home.action'
import { useSelector } from 'react-redux';
import { propTypes } from "react-bootstrap/esm/Image";


const AboutUsSection = () => {
    const aboutUsSection= useSelector(state=>state.homeStore.aboutUsSection)

  let history = useHistory();
useEffect(()=>{
  AOS.init({duration:1500,once: true,});

},[])
  return (
    <Container>
    <div
      style={{
      matgin:"25px 0"
      }}
      className="section"
    >
      <div
        className="row"
        
      >
        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-6" style={{display: "flex",
justifyContent: "center",
alignItems: "center"}}>
          <div className="about-image" data-aos="fade-right">
            <div className="aboutBefore" style={{backgroundImage:`url(${aboutUsSection? aboutUsSection.imageBefore : null})`}}></div>
            <div className="aboutAfter" style={{backgroundImage:`url(${aboutUsSection? aboutUsSection.imageAfter : null})`}}></div>

          </div>
            {/* <img
            src={thamigirl}
            style={{ width: "100%", height: "100%" }}
           ></img> */}
          
         
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-6" style={{padding:"0 15px", marginTop:"50px"}} data-aos="fade-left">
          <h3
            style={{
              color: "#f6b745",
              fontWeight: "bold", marginBottom:"20px"
              
            }}
          >
              {aboutUsSection? aboutUsSection.topTitle:null}
            {/* About Us */}
          </h3>
          <h2
            style={{
              marginBottom:"30px"
            }}
          >
                            {aboutUsSection? aboutUsSection.heading:null}

            {/* Know About Our Thami Society */}
          </h2>
          <p
            style={{
             fontSize:"18px",    marginBottom:"50px"

            }}
          >
                            {aboutUsSection? aboutUsSection.detail:null}

            {/* We are a social unit commonality such as norms,
            <br /> religion, values, custom or indentity. Our communicaty
            may share a sance of place situated in a given geographical area
            or in virtual space through communication platform. */}
          </p>
          <button
                          className="buttonNormal"
                          onClick={()=>history.push('/about/our-story')}


          >
                            {aboutUsSection? aboutUsSection.buttonName:null}

            {/* Read More */}
          </button>
        </div>
      </div>
    </div>
  </Container>
  )
}
export default AboutUsSection;