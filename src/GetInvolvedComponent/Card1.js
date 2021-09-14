import React from "react";
import { Container } from "react-bootstrap";
import card1image from "../assests/card1image.jpg";
import "../Pages/style.css";

const Card1 = () => {
  return (
    <React.Fragment>
      <div>
        <Container>
          <div
            className="row section"
            
          >
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12"style={{margin:"30px 0"}}>
              <h3 className="topTitle"
                style={{
                  fontWeight: "bold",
                  color: "#f6b745",
                }}
              >
                Be a Member
              </h3>
              <h2
              className="middleTitle"
                style={{
                  fontWeight: "bold",
                }}
              >
                Join the Build on Movement
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
              className="buttonNormal"
                
              >
                Join Now
              </button>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <img src={card1image} style={{ height: "100%", width: "100%" }} />
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card1;
