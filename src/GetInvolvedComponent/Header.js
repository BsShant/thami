import React from "react";
import getinvolvedheader from "../assests/getinvolvedheader.jpg";
const Header = () => {
  return (
    <React.Fragment>
      <diV>
        <div
          style={{
            backgroundImage: `url(${getinvolvedheader})`,
          }}
        >
          <div className="color-header-overlay"></div>
        </div>
      </diV>
    </React.Fragment>
  );
};
export default Header;
