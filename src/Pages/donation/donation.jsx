import React from 'react';
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import card3image from "../../assests/card3image.jpg";
import thamigirls from "../../assests/thamigirls.jpg";
import aboutcard3 from "../../assests/aboutcard3.jpg";
import aboutcard4 from "../../assests/aboutcard4.jpg";
import aboutcard5 from "../../assests/aboutcard5.jpg";
import GoTOTop  from '../goToTop';
import card1image from "../../assests/fourthimg.jpeg";
import card2image from "../../assests/card2image.jpg";
import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { server } from '../../utils/fetch';
const SupportCommunity=()=>{
  const donateSection= useSelector(state=>state.getInvolvedStore.donateSection)
  const donatePageHeading= useSelector(state=>state.getInvolvedStore.donatePageHeading)
    const history = useHistory();

    return(
        <div>
               <div className="sponserBanner" style={{backgroundImage:`url(${donatePageHeading? donatePageHeading.image:null})`}}>
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
                  {donatePageHeading? donatePageHeading.pageHeading : null}
 {/* Donation for community events      */}
  </h2>
  <p style={{color:"white" }}>
       {donatePageHeading? donatePageHeading.pageSubHeading : null}

       </p>


               
              </div>    
              </Container>
              </div> 
              <div style={{ background: "#f6b745" }}>
        <Container>
          <div className="row section">
            <div
              className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{margin:"0 0 30px 0"}}
              
            >
            <div style={{backgroundImage:`url(${donateSection? donateSection.image : null})`, width:"100%", height:"100%", minHeight:'400px',backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}></div>
              {/* <img
                src={card2image}
                style={{ height: "445px", width: "100%" }}
              ></img> */}
            </div>
            <div
             className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
              style={{
                
              }}
            >
              <h3
              className="topTitle"
                style={{
                  marginTop:"50px"
                }}
              >
                {donateSection? donateSection.topTitle : null}
                {/* Donate to our community events */}
              </h3>
              <h2
                            className="middleTitle"

                style={{
                  fontWeight: "bold",
                }}
              >
                                {donateSection? donateSection.heading : null}

                {/* You can now donate us */}
              </h2>
              <p
                            className="paragraph"

                style={{
                  
                }}
              >
                                {donateSection? donateSection.detail : null}

                {/* Together, we can break the cycle of proverty, illiteracy, and
                low expectations. Support our service learning and education
                programs, serve with build on at home or abroad with your
                company, school, or family; sign up for build on updates so you
                never miss a chance to make difference. */}
              </p>
              
                <Link
                  to="/getinvolved/donate-us"
                  className="buttonReverse"

                  style={{
                    // fontWeight: "bold",
                    // border: "none",
                    // background: "#000000",
                    // marginTop: "20px",
                    // padding: "15px",
                    // color: "#f6b745",
                    // paddingLeft: "45px",
                    // paddingRight: "45px",
                  }}
                >
                                  {donateSection? donateSection.buttonName : null}

                  {/* Donate Us */}
                </Link>
            </div>
          </div>
        </Container>
      </div>      <GoTOTop />
          </div>
)
}
export default SupportCommunity;
