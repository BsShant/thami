import React from "react";
import { Container } from "react-bootstrap";
const PubliciationCard1 = () => {
  return (
    <React.Fragment>
      <div
      // style={{
      //   backgroundImage: `url(${publicationcard1})`,
      //   width: "100%",
      //   height: "350px",
      // }}
      >
        <div className="color-header-overlay">
          <Container>
            <h1
              style={{
                fontSize: "50px",
                color: "#FFFFFF",
              }}
            >
              What we have published?
            </h1>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PubliciationCard1;
