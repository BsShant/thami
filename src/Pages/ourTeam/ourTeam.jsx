import React from 'react';
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import thamigirls from "../../assests/thamigirls.jpg";
import aboutcard3 from "../../assests/aboutcard3.jpg";
import aboutcard4 from "../../assests/aboutcard4.jpg";
import aboutcard5 from "../../assests/aboutcard5.jpg";
import GoTOTop  from '../goToTop';

const OurTeam=()=>{

    return(
        <div>
               <div className="ourTeamBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
 Our Team        </h2>

               
              </div>    
              </Container>
              </div> 
              <div style={{ background: "#f6b745" }}>
        <div className="text-center" style={{ padding: "80px" }}>
          <h2>Our Team</h2>
          <p style={{ fontSize: "20px" }}>
            We are a social unit commonality such as norms, religion, values,
            custom or indentity. Our communicaty may share a sance of place
            situated in a given geographical area or in virtual space through
            communication platform.
          </p>
          <Container>
            <div className="row">
              <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">Name Here</h3>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>Founder</p>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>
                  Short description will be here from the founder.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">Name Here</h3>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>Founder</p>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>
                  Short description will be here from the founder.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">Name Here</h3>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>Founder</p>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>
                  Short description will be here from the founder.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">Name Here</h3>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>Founder</p>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>
                  Short description will be here from the founder.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <GoTOTop />
             </div>
    )}
    export default OurTeam;