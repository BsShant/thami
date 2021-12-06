import React from 'react';
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import esewa from "../../assests/esewa_logo.png";
import ime from "../../assests/ime-red.png";
import khalti from "../../assests/khalti.jpeg";
import global from "../../assests/global.png";
import GoToTop from '../goToTop';
import { useSelector } from 'react-redux';
import { List, Card } from 'antd';
import { server } from '../../utils/fetch';

const Donate = ()=>{
  const donateInfoSection= useSelector(state=>state.getInvolvedStore.donateInfoSection)
  const donateInfoPageHeading= useSelector(state=>state.getInvolvedStore.donateInfoPageHeading)
  const donateInfoHeadingSection= useSelector(state=>state.getInvolvedStore.donateInfoHeadingSection)

    return(
<div>
               <div className="donateUsBanner" style={{backgroundImage:`url(${donateInfoPageHeading? donateInfoPageHeading.image:null})`}}>
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
                  {donateInfoPageHeading? donateInfoPageHeading.pageHeading : null}
{/* Donate Today     */}
 </h2>
 <p style={{color:"white" }}>
       {donateInfoPageHeading? donateInfoPageHeading.pageSubHeading : null}

       </p>
               
              </div>    
              </Container>
              </div> 
        <div className="text-center" style={{padding:"80px 0"  }} >
          <Container>
          <h3 style={{color:"#f6b745 "}}>
            {/* You can make a difference! */}
            {donateInfoHeadingSection? donateInfoHeadingSection.topTitle : null}
          </h3>
          <h2>{donateInfoHeadingSection? donateInfoHeadingSection.heading : null}</h2>
          <p style={{marginLeft:"9px"  }}>
          {donateInfoHeadingSection? donateInfoHeadingSection.detail : null}

            {/* We are a social unit commonality such as norms, <br />religion, values,
            custom or indentity. Your generous support will go to providing our society. */}
          </p>
          </Container>
        
          </div>
          <div>
              <Container>
                  <div className="row normalPagination" style={{display:"flex",flexDirection:"column", padding:"0", marginLeft:"9px"}}>
                      <div className="col text-left" style={{marginBottom: "30px",
padding: "20px 0",
borderBottom: "1px solid gray"}}>
                          <h2>

                            Payment Method
                            </h2>
                      </div>
                      <List
   
    pagination={{
      onChange: page => {
        window.scrollTo(0,0);
        console.log(page);
      },
      pageSize: 9,
      position:"bottom"
    }}
    dataSource={donateInfoSection? donateInfoSection: []}
    renderItem={item => (
      <List.Item>
       <div className="payment-option col text-left" style={{marginBottom: "30px",
padding: "20px 0",
borderBottom: "1px solid gray"}}>
                          <img src={`${server}/${item.logo}`} style={{ width: "150px", marginBottom:"30px" }}></img>
                          <h3>
                            {/* Esewa Id: */}
                            {item.heading}:
                          </h3>
                          <p style={{marginTop: "-7px",marginBottom: "0px"}}>
                            {/* 9812345678, thamisociety@gmai.com */}
                            {item.detail}
                            </p>
                          </div>
      </List.Item>
    )}
  />
                          {/* <div className="payment-option col text-left" style={{marginBottom: "30px",
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
                           */}
                         
                  </div>
              </Container>

                        </div>
                       
                        <GoToTop />
          </div>
    )
}

export default Donate;