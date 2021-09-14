import React from "react";
import getinvolvedheader from "../assests/getinvolvedheader.jpg";
import { Container } from "react-bootstrap";

import "../Pages/style.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="getInvolvedBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
Get Involved        </h2>

               
              </div>      
</Container>
     </div>
    </React.Fragment>
  );
};
export default Header;
