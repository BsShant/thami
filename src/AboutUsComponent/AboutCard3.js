import React from "react";
import { Container } from "react-bootstrap";
import aboutcard3 from "../assests/aboutcard3.jpg";
const AboutCard3 = () => {
  return (
    <React.Fragment>
      <div
        style={{
          background: "#f6b745",
          paddingTop: "90px",
          paddingBottom: "90px",
        }}
      >
        <Container>
          <div className="row">
            <div className="col-6">
              <img
                src={aboutcard3}
                style={{ width: "100%", height: "100%" }}
              ></img>
            </div>
            <div className="col-1"></div>
            <div className="col-5" style={{ marginTop: "30px" }}>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Our Vision
              </p>
              <h1
                style={{
                  fontWeight: "bold",
                  marginTop: "25px",
                }}
              >
                A Community Vision is an image of a community's future
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "25px",
                  marginBottom: "120px",
                }}
              >
                We are a social unit commonality such as norms, religion,
                values, custom or indentity. Our communicaty may share a sance
                of place situated in a given geographical area or in virtual
                space through communication platform.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default AboutCard3;
