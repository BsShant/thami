import React from "react";
import { Container } from "react-bootstrap";
import publicationcard2 from "../../../assests/publicationcard2.jpg";
const Card2 = () => {
  return (
    <React.Fragment>
      <div className="articleHeader">
          <img
            src={publicationcard2}
            style={{ height: "80%", width: "100%"}}
          ></img>
      </div>
    </React.Fragment>
  );
};
export default Card2;
