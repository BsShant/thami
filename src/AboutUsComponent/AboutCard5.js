import React from "react";
import { Container } from "react-bootstrap";
import aboutcard5 from "../assests/aboutcard5.jpg";
const AboutCard5 = () => {
  return (
    <React.Fragment>
      <div style={{ background: "#f6b745" }}>
        <div className="text-center" style={{ padding: "80px" }}>
          <h2>Our Team</h2>
          <p style={{ fontSize: "20px" }}>
            We are a social unit commonality such as norms, religion, values,
            custom or indentity. Our communicaty may share a sance of place
            situated in a given geographical area or in virtual space through
            communication platform.
          </p>
          <Container>
            <div className="row">
              <div className="col-3 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">Name Here</h3>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>Founder</p>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>
                  Short description will be here from the founder.
                </p>
              </div>
              <div className="col-3 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">Name Here</h3>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>Founder</p>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>
                  Short description will be here from the founder.
                </p>
              </div>
              <div className="col-3 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">Name Here</h3>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>Founder</p>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>
                  Short description will be here from the founder.
                </p>
              </div>
              <div className="col-3 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">Name Here</h3>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>Founder</p>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>
                  Short description will be here from the founder.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AboutCard5;
