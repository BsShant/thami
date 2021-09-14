import React from 'react';
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import thamigirls from "../../assests/thamigirls.jpg";

const AboutUs=()=>{

    return(
        <div>
               <div className="aboutUsBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
 Who are we?         </h2>

               
              </div>    
              </Container>
              </div> 
              <div style={{ marginTop: "50px"}}>
        <Container>
          <div className="row" style={{padding:"10px  0 70px"}}>
            <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12" style={{marginBottom:"30px"}}>
              <h3
              className="topTitle"
                style={{
                  color: "#f6b745",
                  fontWeight: "bold",
                  marginTop:"50px"
                }}
              >
                Our Story
              </h3>
              <h2
              className="middleTitle"
                style={{
                  fontWeight: "bold",
                }}
              >
                Know About Our <br /> Thami Society
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
            <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12">
              <img
                src={thamigirls}
                style={{ height: "100%", width: "100%" }}
              ></img>
            </div>
          </div>
          <hr class="col-md-12 mx-auto mb-5" style={{padding: "0.01rem", background: "grey none repeat scroll 0% 0%"}}/>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row" style={{marginTop:"100px"}}>
            <div className="col">
              <h3 className="topTitle" style={{color: "#f6b745", textAlign:"center", marginBottom:"30px"
}}>Our History</h3>
<p className="paragraph">
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
s containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
<p className="paragraph">
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
s containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
            </div>
          </div>
        </Container>
      </div>
        </div>
    )
}

export default AboutUs;