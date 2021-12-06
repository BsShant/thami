import React, { useEffect } from "react";
import style from "../../style.css";

import aboutcard1 from "../../../assests/aboutcard1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBiking, faBars, faBookmark, faScroll } from '@fortawesome/free-solid-svg-icons';
import {  
  useHistory,
} from "react-router-dom";

import sponsor from "../../../assests/sponsor.jpg";
import support from "../../../assests/support.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useSelector } from 'react-redux';
import { Container, Button } from "react-bootstrap";

const GetInvolvedSection = () => {
    let history = useHistory();
    const getInvolvedSection= useSelector(state=>state.homeStore.getInvolvedSection)
    useEffect(()=>{
  AOS.init({duration:1500,once: true,});

},[])
  return (
    
      <div style={{ backgroundColor: "#f6b745", padding: " 10px 0 30px 0 "}}>
        <Container>
        <div
              className="text-center"
              style={{  marginTop:"0 0 80px", padding:"45px 0 0"}}
            >
              <h3
                style={{
                  
                }}
                className="topTitle"
              >
                  {getInvolvedSection? getInvolvedSection.topTitle : null}
                {/* Get Involved */}
              </h3>
              <h2 className="middleTitle"
>
                {getInvolvedSection? getInvolvedSection.heading : null}

                {/* An open
                community */}
              </h2>
              </div>
          <div className="row " >
          <div className="col-sm-12 col-xs-12 col-md-12 col-lg-4"  style={{padding: "0px 10px 0px 10px",
marginBottom: "30px"}}>
                  <div
                    class="card"
                    style={{
                      border: "none", 
                    }} data-aos="fade-down"
                  >
                    <img src={`${getInvolvedSection? getInvolvedSection.supportCardImage:null}`} style={{ height: "230px" }} />
                    <div class="card-body" style={{textAlign:"left"}}>
                      <h3
                        class="card-title d-flex"
                        style={{
                          marginTop: "1.5rem",
                          textAlign:"left!important"

                        }}
                      >
                    {getInvolvedSection? getInvolvedSection.supportCardName : null}

                        {/* Support our community */}
                      </h3>
                      <p class="card-text" style={{marginBottom:"25px"}}>
                      {getInvolvedSection? getInvolvedSection.supportCardDetail : null}

                        {/* Support for community organisat ions. We can help you
                        deliver the services people in our community. */}
                      </p>
                      <button
                type="button"
                className="buttonReverse"
                style={{marginBottom:"-5px"}}

                onClick={()=>history.push('/getInvolved/support')}

              >
                                      {getInvolvedSection? getInvolvedSection.supportButtonName : null}

{/* Support Us              */}
</button>
                    </div>
                  </div>
                </div>
             
                
                <div className="col-sm-12 col-xs-12 col-md-12 col-lg-4 " style={{padding: "0px 10px 0px 10px",
marginBottom: "30px"}} >
                  <div
                    class="card"
                    style={{  border: "none" }} data-aos="fade-up"
                  >
                    <img src={`${getInvolvedSection? getInvolvedSection.joinCardImage : null}`} style={{ height: "230px" }} />
                    <div class="card-body">
                      <h3
                        class="card-title d-flex "
                        style={{
                          marginTop: "1.5rem",
                          textAlign:"left"
                        }}
                      >
                                              {getInvolvedSection? getInvolvedSection.joinCardName : null}

                         {/* Get Involved */}
                      </h3>
                      <p class="card-text" style={{marginBottom:"25px"}}>
                      {getInvolvedSection? getInvolvedSection.joinCardDetail : null}

                      {/* Several of our sites were originally started by volunteers. Over
                time, they have become Core . */}
                      </p>
                      <button
                type="button"
                className="buttonReverse"
                style={{marginBottom:"-5px"}}

                onClick={()=>history.push('/getinvolved/be-a-member')}

              >
                                      {getInvolvedSection? getInvolvedSection.joinButtonName : null}

               {/* Join Us */}
              </button>                    </div>
                  </div>
                </div>
              
                <div className="col-sm-12 col-xs-12 col-md-12 col-lg-4 " style={{padding: "0px 10px 0px 10px",
marginBottom: "30px"}} >
                  <div
                    class="card"
                    style={{  border: "none" }} data-aos="fade-down"
                  >
                    <img src={`${getInvolvedSection? getInvolvedSection.sponserCardImage : null}`} style={{ height: "230px" }} />
                    <div class="card-body">
                      <h3
                        class="card-title d-flex "
                        style={{
                          marginTop: "1.5rem",
                          textAlign:"left"
                        }}
                      >
                          {getInvolvedSection? getInvolvedSection.sponserCardName : null}
                        {/* Sponsor our community */}
                      </h3>
                      <p class="card-text" style={{marginBottom:"25px"}}>
                      {getInvolvedSection? getInvolvedSection.sponserCardDetail : null}
                        {/* Sponsors commit to providing financial, emotional and
                        resettlement suppot to help the community. */}
                      </p>
                      <button
                type="button"
                className="buttonReverse"
                style={{marginBottom:"-5px"}}
                onClick={()=>history.push('/getinvolved/donation')}

              >
                  {getInvolvedSection? getInvolvedSection.sponserButtonName : null}
               {/* Sponsor Us */}
              </button>                    </div>
                  </div>
                </div>
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
          </div>
        </Container>
      </div>
     
  );
};
export default GetInvolvedSection;
