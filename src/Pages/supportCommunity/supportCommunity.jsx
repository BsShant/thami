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
               <div className="supportBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
 Support Our Community      </h2>

               
              </div>    
              </Container>
              </div> 
              <div>
        <Container>
          <div
            className="row section"
            
          >
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12"style={{margin:"30px 0"}}>
              <h3
                className="topTitle"
                style={{
                  marginTop:"50px", color:"#f6b745"
                }}
              >
                Support us
              </h3>
              <h2
                className="middleTitle"
                style={{
                }}
              >
                Learn how you can support us
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
              <button
                className="buttonNormal" onClick={()=>history.push("/SupportCommunity")}
              >
               Learn More
              </button>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <img src={card3image} style={{ height: "100%", width: "100%" }} />
            </div>
          </div>
        </Container>
      </div>
      <GoTOTop />
          </div>
)
}
export default SupportCommunity;
