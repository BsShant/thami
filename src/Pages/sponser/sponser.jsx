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
import card2image from "../../assests/card2image.jpg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
const SupportCommunity=()=>{
    const history = useHistory();

    return(
        <div>
               <div className="sponserBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
 Sponser Our Community      </h2>

               
              </div>    
              </Container>
              </div> 
              <div style={{ background: "#f6b745" }}>
        <Container>
          <div className="row section">
            <div
              className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{margin:"0 0 30px 0"}}
              
            >
              <img
                src={card2image}
                style={{ height: "100%", width: "100%" }}
              ></img>
            </div>
            <div
             className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
              style={{
                
              }}
            >
              <h3
              className="topTitle"
                style={{
                  marginTop:"50px"
                }}
              >
                Sponsor our community events
              </h3>
              <h2
                            className="middleTitle"

                style={{
                  fontWeight: "bold",
                }}
              >
                You can now sponser us
              </h2>
              <p
                            className="paragraph"

                style={{
                  
                }}
              >
                Together, we can break the cycle of proverty, illiteracy, and
                low expectations. Support our service learning and education
                programs, serve with build on at home or abroad with your
                company, school, or family; sign up for build on updates so you
                never miss a chance to make difference.
              </p>
              
                <Link
                  to="/getinvolved/donate-us"
                  className="buttonReverse"

                  style={{
                    // fontWeight: "bold",
                    // border: "none",
                    // background: "#000000",
                    // marginTop: "20px",
                    // padding: "15px",
                    // color: "#f6b745",
                    // paddingLeft: "45px",
                    // paddingRight: "45px",
                  }}
                >
                  Sponser Us
                </Link>
            </div>
          </div>
        </Container>
      </div>      <GoTOTop />
          </div>
)
}
export default SupportCommunity;
