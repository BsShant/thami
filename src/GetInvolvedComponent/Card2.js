import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import card2image from "../assests/card2image.jpg";
const Card2 = () => {
  return (
    <React.Fragment>
      <div style={{ background: "#f6b745" }}>
        <Container>
          <div className="row">
            <div
              className="col-6"
              style={{ marginTop: "140px", marginBottom: "140px" }}
            >
              <img
                src={card2image}
                style={{ height: "110%", width: "100%" }}
              ></img>
            </div>
            <div className="col-1"></div>
            <div
              className="col-5"
              style={{
                marginTop: "140px",
                marginBottom: "140px",
                padding: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "19px",
                }}
              >
                Sponsor a community
              </p>
              <h1
                style={{
                  fontWeight: "bold",
                  marginTop: "15px",
                }}
              >
                Join the build on Movement
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                Together, we can break the cycle of proverty, illiteracy, and
                low expectations. Support our service learning and education
                programs, serve with build on at home or abroad with your
                company, school, or family; sign up for build on updates so you
                never miss a chance to make difference.
              </p>
              <button
                style={{
                  fontWeight: "bold",
                  border: "none",
                  background: "#000000",
                  marginTop: "20px",
                  padding: "15px",
                  color: "#f6b745",
                  paddingLeft: "45px",
                  paddingRight: "45px",
                }}
              >
                <Link
                  to="/supportcommunity"
                  style={{
                    fontWeight: "bold",
                    border: "none",
                    background: "#000000",
                    marginTop: "20px",
                    padding: "15px",
                    color: "#f6b745",
                    paddingLeft: "45px",
                    paddingRight: "45px",
                  }}
                >
                  Get Statered
                </Link>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card2;
