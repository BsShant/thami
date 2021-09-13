import React from "react";
import publicationcard1 from "../assests/publicationcard1.jpg";
import { Container } from "react-bootstrap";
const Card1 = () => {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${publicationcard1})`,
          width: "100%",
          height: "350px",
        }}
      >
        <div className="color-header-overlay">
          <Container>
            <h1
              style={{
                fontSize: "50px",
                color: "#FFFFFF",
              }}
            >
              Resources
            </h1>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Card1;
