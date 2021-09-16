import React from 'react';
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import esewa from "../../assests/esewa_logo.png";
import ime from "../../assests/ime-red.png";
import khalti from "../../assests/khalti.jpeg";
import global from "../../assests/global.png";
import GoToTop from '../goToTop'; 
const ContactUs = ()=>{

    return(
<div>
               <div className="contactUsBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
Contact Us    </h2>

               
              </div>    
              </Container>
              </div> 
              <GoToTop />
              </div>
    )}
    export default ContactUs;