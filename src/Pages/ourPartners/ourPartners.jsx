import React from 'react';
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import esewa from "../../assests/esewa_logo.png";
import ime from "../../assests/ime-red.png";
import khalti from "../../assests/khalti.jpeg";
import global from "../../assests/global.png";
import GoTOTop from '../goToTop';

const OurPartners =()=>{

    return(
        <div>
             <div className="ourPartnersBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
Our Partners    </h2>

               
              </div>    
              </Container>
              </div> 
             <div style={{padding:"70px 0"}}>
                        <Container>
                        <div style={{}}>
          <h2 style={{ padding: "40px 0 10px 0px" , margin:"0 0 40px",borderBottom:"1px solid grey" }}>Our Partners</h2>
         
          </div>
                          <div className="row">
                <div className="col-6 col-lg-2 col-md-3 col-sm-4" style={{cursor:"pointer"}}>                          <img src={global} style={{ width: "150px", marginBottom:"30px" }}></img>
</div>
                <div className="col-6 col-lg-2 col-md-3 col-sm-4" style={{cursor:"pointer"}}>                          <img src={global} style={{ width: "150px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer"}}>                          <img src={global} style={{ width: "150px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer"}}>                          <img src={global} style={{ width: "150px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer"}}>                          <img src={global} style={{ width: "150px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer"}}>                          <img src={global} style={{ width: "150px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer"}}>                          <img src={global} style={{ width: "150px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">                          <img src={global} style={{ width: "150px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">                          <img src={global} style={{ width: "150px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" >                          <img src={global} style={{ width: "150px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">                          <img src={global} style={{ width: "150px", marginBottom:"30px" }}></img>
</div>

<div className="col-lg-2 col-md-3 col-sm-4 col-6">                          <img src={global} style={{ width: "150px", marginBottom:"30px" }}></img>
</div>


              </div>
</Container>
                        </div>
                        <GoTOTop/>
        </div>
    )
}

export default OurPartners;