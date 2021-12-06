import React from 'react';
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import esewa from "../../assests/esewa_logo.png";
import ime from "../../assests/ime-red.png";
import khalti from "../../assests/khalti.jpeg";
import global from "../../assests/global.png";
import GoToTop from '../goToTop'; 
import { server} from'../../utils/fetch'
import parsedToken from '../../utils/fetch';
import { Form, Input, Button, Checkbox, message } from 'antd';
import ContactForm from './contactForm'
import { useSelector } from 'react-redux';



const ContactUs = (props)=>{
  
  const contactPageHeading= useSelector(state=>state.contactStore.contactPageHeading)
    return(
        <div>
         <div className="contactUsBanner" style={{backgroundImage:`url(${contactPageHeading? contactPageHeading.image:null})`}}>
          <Container>
            <div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
                  {contactPageHeading? contactPageHeading.pageHeading:null}
                 </h2>
                <p  style={{ color:"white" }} >
                {contactPageHeading? contactPageHeading.pageSubHeading:null}

                </p>
              </div>    
              </Container>
              </div> 
    <ContactForm {...props}/>
              <GoToTop />
              </div>
    )}
    export default ContactUs;