import React from "react";
import aboutcard1 from "../assests/aboutcard1.jpg";
import { Container } from "react-bootstrap";
const AboutCard1 = () => {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${aboutcard1})`,
        }}
      >
        <div className="color-header-overlay">
          <Container>
            <h1 style={{ color: "#FFFFFF" }}>Who Are We?</h1>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AboutCard1;
