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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { server } from '../../utils/fetch';

const SupportCommunity=()=>{
    const history = useHistory();
    const supportSection= useSelector(state=>state.getInvolvedStore.supportSection)
    const supportPageHeading= useSelector(state=>state.getInvolvedStore.supportPageHeading)
    return(
        <div>
               <div className="supportBanner" style={{backgroundImage:`url(${supportPageHeading? supportPageHeading.image:null})`}}>
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
                  {supportPageHeading? supportPageHeading.pageHeading : null}
 {/* Support Our Community      */}
  </h2>
  <p style={{color:"white" }}>
       {supportPageHeading? supportPageHeading.pageSubHeading : null}

       </p>

               
              </div>    
              </Container>
              </div> 
              <div>
        <Container>
          <div
            className="row section"
            
          >
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-2 order-lg-1 order-sm-2 order-2"style={{margin:"30px 0"}}>
              <h3
                className="topTitle"
                style={{
                  marginTop:"50px", color:"#f6b745"
                }}
              >
                {supportSection? supportSection.topTitle : null}
                {/* Support us */}
              </h3>
              <h2
                className="middleTitle"
                style={{
                }}
              >
                                {supportSection? supportSection.heading : null}

                {/* Learn how you can support us */}
              </h2>
              <p
              className="paragraph"
                style={{
                  
                }}
              >
                                {supportSection? supportSection.detail : null}

                {/* Together, we can break the cycle of proverty, illiteracy, and
                low expectations. Support our service learning and education
                programs, serve with build on at home or abroad with your
                company, school, or family; sign up for build on updates so you
                never miss a chance to make difference. */}
              </p>
              <button
                className="buttonNormal" onClick={()=>history.push("/SupportCommunity")}
              >
                                {supportSection? supportSection.buttonName : null}

{/* Support Us              */}
 </button>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-1 order-lg-2 order-sm-1 order-1">
            <div style={{backgroundImage:`url(${supportSection? supportSection.image : null})`
              , backgroundSize:'cover'
              , backgroundPosition:'center', backgroundRepeat:'no-repeat', width:'100%', height:'100%',minHeight:'400px'}}>

              </div>
              {/* <img src={`${supportSection? supportSection.image:null}`} style={{ height: "100%", width: "100%" }} /> */}
            </div>
          </div>
        </Container>
      </div>
      <GoTOTop />
          </div>
)
}
export default SupportCommunity;
