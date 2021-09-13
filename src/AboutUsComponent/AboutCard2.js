import React from "react";
import { Container } from "react-bootstrap";
import thamigirls from "../assests/thamigirls.jpg";
const AboutCard2 = () => {
  return (
    <React.Fragment>
      <div style={{ marginTop: "80px", padding: "90px", marginBottom: "60px" }}>
        <Container>
          <div className="row">
            <div className="col-6">
              <p
                style={{
                  fontSize: "22px",
                  color: "#f6b745",
                  fontWeight: "bold",
                }}
              >
                Our Story
              </p>
              <h1
                style={{
                  fontWeight: "bold",
                }}
              >
                Know About Our <br /> Thami Society
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginBottom: "120px",
                }}
              >
                We are a social unit commonality such as norms, religion,
                values, custom or indentity. Our communicaty may share a sance
                of place situated in a given geographical area or in virtual
                space through communication platform.
              </p>
            </div>
            <div className="col-6">
              <img
                src={thamigirls}
                style={{ height: "100%", width: "100%" }}
              ></img>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default AboutCard2;
