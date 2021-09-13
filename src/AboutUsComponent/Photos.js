import React from "react";
import firstimage from "../assests/firstimage.jpeg";
import secondimage from "../assests/secondimage.jpeg";
import thirdimage from "../assests/thirdimage.JPG";
import fourthimg from "../assests/fourthimg.jpeg";
import fifthimg from "../assests/fifthimg.jpeg";
import sixthimg from "../assests/sixthimg.jpeg";
const Photos = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={firstimage}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={secondimage}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={thirdimage}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={fourthimg}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={fifthimg}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={sixthimg}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <button
          style={{
            background: "#f6b745",
            border: "none",
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontWeight: "bold",
          }}
        >
          See more
        </button>
      </div>
    </React.Fragment>
  );
};
export default Photos;
