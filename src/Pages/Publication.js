import React from "react";
import PubliciationCard1 from "../PublicationComponent/PublicationCard1";
import PubliciationCard2 from "../PublicationComponent/PublicationCard2";
import PublicationCard3 from "../PublicationComponent/PublicationCard3";
import publicationImage from "../assests/publicationcard1.jpg";
import { Container, Button } from "react-bootstrap";
import "./style.css";

const Publication = () => {
  return (
    <React.Fragment>
      <div className="publicationBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
What we have published?                </h2>
                
               
              </div>      
</Container>
     </div>
      <PubliciationCard2 />
      <PublicationCard3 />
    </React.Fragment>
  );
};
export default Publication;
