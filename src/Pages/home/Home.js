import React, { useEffect } from "react";
import GoToTop from '../goToTop';
import slider from "../../assests/slider.jpg";
import style from "../style.css";
import imgwhoweare from "../../assests/imgwhoweare.png";
import munamadan from "../../assests/munamadan.jpg";
import aboutcard1 from "../../assests/aboutcard1.jpg";
import fourthimg from "../../assests/fourthimg.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBiking, faBars, faBookmark, faScroll } from '@fortawesome/free-solid-svg-icons';
import {  
  useHistory,
} from "react-router-dom";
import thamigirl from "../../assests/thamigirls.jpg";
import bookcover from "../../assests/bookcover.jpg";
import sponsor from "../../assests/sponsor.jpg";
import support from "../../assests/support.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Container, Button } from "react-bootstrap";
import ContactUs from "../contactUs/contactForm";
import HeroSection from './heroSection/heroSection';
import AboutUsSection from './aboutUsSection/aboutUsSection';
import EventSection from "./eventSection copy/eventSection";
import PublicationSection from './publicationSection/publicationSection'
import GetInvolvedSection from './getInvolvedSection/getInvolvedSection'
import { fetchingHomeContentStarts} from '../../store/homeStore/home.action'
const Home = () => {
  let history = useHistory();
useEffect(()=>{
  AOS.init({duration:1500,once: true,});

},[])
  return (
    <React.Fragment>
     <HeroSection />
      <AboutUsSection />
<EventSection />
<PublicationSection />
     <GetInvolvedSection />
            {/* <div
              className="col-md-12 col-sm-12 col-xs-12 col-lg-4"
              style={{  marginTop:"50px", padding:"0 10px"}}
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
                An open
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
                onClick={()=>history.push('/getinvolved/membership')}

              >
                Be a Member
              </button>
            </div> */}
        
      <ContactUs sendButton='sendButton' background='black' frontContact='frontContact'/>
      <GoToTop />
    </React.Fragment>
  );
};
export default Home;
