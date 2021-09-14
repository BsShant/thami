import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import card2image from "../assests/card2image.jpg";
import "../Pages/style.css";

const Card2 = () => {
  return (
    <React.Fragment>
      <div style={{ background: "#f6b745" }}>
        <Container>
          <div className="row section">
            <div
              className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{margin:"30px 0"}}
              
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
                Sponsor a community
              </h3>
              <h2
                            className="middleTitle"

                style={{
                  fontWeight: "bold",
                }}
              >
                Join the build on Movement
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
                  to="/supportcommunity"
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
                  Get Statered
                </Link>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card2;
