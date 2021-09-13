import React from "react";
import { Container } from "react-bootstrap";
import card1image from "../assests/card1image.jpg";
const Card1 = () => {
  return (
    <React.Fragment>
      <div>
        <Container>
          <div
            className="row"
            style={{ marginTop: "150px", marginBottom: "150px" }}
          >
            <div className="col-1"></div>
            <div className="col-5">
              <p
                style={{
                  fontWeight: "bold",
                  color: "#f6b745",
                  fontSize: "19px",
                }}
              >
                Be a Member
              </p>
              <h1
                style={{
                  fontWeight: "bold",
                  marginTop: "15px",
                }}
              >
                Join the Build on Movement
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  marginTop: "30px",
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
                  background: "#f6b745",
                  marginTop: "20px",
                  padding: "15px",
                  paddingLeft: "45px",
                  paddingRight: "45px",
                }}
              >
                Join Now
              </button>
            </div>
            <div className="col-5">
              <img src={card1image} style={{ height: "110%", width: "100%" }} />
            </div>
            <div className="col-1"></div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card1;
