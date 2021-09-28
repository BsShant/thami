import React from 'react';
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import thamigirls from "../../assests/thamigirls.jpg";
import aboutcard3 from "../../assests/aboutcard3.jpg";
import aboutcard4 from "../../assests/aboutcard4.jpg";
import GoTOTop from '../goToTop';

const VisionAndMission=()=>{

    return(
        <div>
               <div className="visionAndMissionBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
 Our Vision and Mission         </h2>

               
              </div>    
              </Container>
              </div> 
              <div
        style={{
          paddingTop: "90px",
          paddingBottom: "90px",
        }}
      >
        <Container>
          <div className="row">
            <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12" style={{marginBottom:"30px"}}>
              <img
                src={aboutcard3}
                style={{ width: "100%", height: "100%" }}
              ></img>
            </div>
            <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12" style={{ marginTop: "30px" }}>
              <h3
                            className="topTitle"

                style={{
                 marginTop:"30px"
                }}
              >
                Our Vision
              </h3>
              <h2
              className="middleTitle"
                style={{
                  
                }}
              >
                A Community Vision is an image of a community's future
              </h2>
              <p
            className="paragraph"
                style={{
                  
                }}
              >
                We are a social unit commonality such as norms, religion,
                values, custom or indentity. Our communicaty may share a sance
                of place situated in a given geographical area or in virtual
                space through communication platform.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{
          background: "#f6b745",
          paddingTop: "90px",
          paddingBottom: "90px",
        }}
      >
        <Container>
          <div className="row">
           
            <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12" style={{ marginTop: "30px" }}>
              <h3
                            className="topTitle"

                style={{
                 marginTop:"30px"
                }}
              >
                Our Mission
              </h3>
              <h2
              className="middleTitle"
                style={{
                  
                }}
              >
                A Community Mission is an image of a community's future
              </h2>
              <p
            className="paragraph"
                style={{
                  
                }}
              >
                We are a social unit commonality such as norms, religion,
                values, custom or indentity. Our communicaty may share a sance
                of place situated in a given geographical area or in virtual
                space through communication platform.
              </p>
            </div>
            <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12" style={{marginBottom:"30px"}}>
            <img
                src={aboutcard4}
                style={{ height: "100%", width: "100%" }}
              ></img>
            </div>
          </div>
        </Container>
      </div>
      <GoTOTop />
              </div>
              )
              }

export default VisionAndMission;