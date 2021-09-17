import React from 'react';
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import esewa from "../../assests/esewa_logo.png";
import ime from "../../assests/ime-red.png";
import khalti from "../../assests/khalti.jpeg";
import global from "../../assests/global.png";
import GoToTop from '../goToTop';
const Donate = ()=>{

    return(
<div>
               <div className="donateUsBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
Donate Today     </h2>

               
              </div>    
              </Container>
              </div> 
        <div className="text-center" style={{ padding: "80px" }}>
          <h3 style={{color:"#f6b745 "}}>You can make a difference!</h3>
          <p style={{ }}>
            We are a social unit commonality such as norms, religion, values,
            custom or indentity. Your generous support will go to providing our society.
          </p>
          </div>
          <div>
              <Container>
                  <div className="row" style={{display:"flex",flexDirection:"column", padding:"0 10px"}}>
                      <div className="col text-left" style={{marginBottom: "30px",
padding: "20px 0",
borderBottom: "1px solid gray"}}>
                          <h2>Payment Method</h2>
                      </div>
                          <div className="payment-option col text-left" style={{marginBottom: "30px",
padding: "20px 0",
borderBottom: "1px solid gray"}}>
                          <img src={esewa} style={{ width: "150px", marginBottom:"30px" }}></img>
                          <h3>Esewa Id:</h3>
                          <p style={{marginTop: "-7px",
marginBottom: "0px"}}>9812345678, thamisociety@gmai.com</p>
                          </div>
                          <div className="payment-option col text-left" style={{marginBottom: "30px",
padding: "20px 0",
borderBottom: "1px solid gray"}}>
                          <img src={khalti} style={{ width: "150px", marginBottom:"30px" }}></img>
                          <h3>Khalti Id:</h3>
                          <p style={{marginTop: "-7px",
marginBottom: "0px"}}>9812345678, thamisociety@gmai.com</p>
                          </div>
                          <div className="payment-option col text-left" style={{marginBottom: "30px",
padding: "20px 0",
borderBottom: "1px solid gray"}}>
                          <img src={ime} style={{ width: "150px", marginBottom:"30px" }}></img>
                          <h3>Ime pay Id:</h3>
                          <p style={{marginTop: "-7px",
marginBottom: "0px"}}>9812345678, thamisociety@gmai.com</p>
                          </div>
                          <div className="payment-option col text-left" style={{marginBottom: "30px",
padding: "20px 0",
}}>
                          <img src={global} style={{ width: "150px", marginBottom:"30px" }}></img>
                          <h3>Bank details:</h3>
                          <p style={{marginTop: "-4px",
marginBottom: "0px"}}>Name: Thami society</p>
                          <p style={{marginTop: "-4px",
marginBottom: "0px"}}>A/c No: 01000123000123</p>
                          <p style={{marginTop: "-4px",
marginBottom: "0px"}}>Bank: Global IME Bank</p>
                          <p style={{marginTop: "-4px",
marginBottom: "0px"}}>Branch: Koteshwor, Kathmandu</p>



                          </div>
                          
                         
                  </div>
              </Container>

                        </div>
                       
                        <GoToTop />
          </div>
    )
}

export default Donate;