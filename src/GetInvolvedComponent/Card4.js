import React from "react";
import card4image from "../assests/card4image.jpg";
const Card4 = () => {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${card4image})`,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="color-overlay"></div>
      </div>
    </React.Fragment>
  );
};
export default Card4;
