import React, { useEffect } from "react";
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
import { useSelector } from 'react-redux';
import { Container, Button } from "react-bootstrap";

const PublicationSection = () => {
    let history = useHistory();
    const publicationSection= useSelector(state=>state.homeStore.publicationSection)
    useEffect(()=>{
  AOS.init({duration:1500,once: true,});

},[])
  return (
    
      <Container>
        <div className="row section" >
          <div
            className="col-md-12 col-sm-12 col-xs-12 col-lg-6 order-md-2 order-lg-1 order-sm-2 order-2" data-aos="fade-left"
            style={{ margin: "50px 0" }}
          >
            <h3 style={{ color: "#f6b745" }} className="topTitle">
                {/* Publication */}{publicationSection? publicationSection.topTitle:null}
                </h3>
            <h2 className="middleTitle">
                {publicationSection? publicationSection.heading:null}
              {/* What we are <br /> publishing */}
            </h2>
            <p className="paragraph">
            {publicationSection? publicationSection.detail:null}

              {/* In the broadest sense, the publishing industry would include
              newspaper publishing, magazine publishing, music publishing, map
              publishing, government information publishing, comic book
              publishing, and book publishing. */}
            </p>
            <button
              type="button"
              className="buttonNormal"
              onClick={()=>history.push('/publication/our-books')}


            >
                                {publicationSection? publicationSection.buttonName:null}

              {/* Read More */}
            </button>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-6 order-md-1 order-lg-2 order-sm-1 order-1" style={{}} data-aos="fade-right">
            <div style={{backgroundImage:`url(${publicationSection? publicationSection.image: null})`, width:"100%", height:"100%", minHeight:"440px",backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}></div>
            {/* <img src={bookcover} style={{ width: "100%", height: "445px", marginTop:"15px" }} /> */}
          </div>
        </div>
      </Container>

     
  );
};
export default PublicationSection;
