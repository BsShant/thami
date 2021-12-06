import React from "react";
import publicationcard1 from "../assests/airpolution.jpg";
import { Container } from "react-bootstrap";
import { useSelector } from 'react-redux';

import "../Pages/style.css";

const Card1 = () => {
  const resourcesPageHeading = useSelector(state=>state.publicationStore.resourcesPageHeading)

  return (
    <React.Fragment>
      <div className="resourcesBanner" style={{backgroundImage:`url(${resourcesPageHeading? resourcesPageHeading.image:null})`}}>
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
                                    {resourcesPageHeading? resourcesPageHeading.pageHeading:null}

 {/* We publish lots of resources         */}
 </h2>
 <p style={{color:"white"}}>
     {resourcesPageHeading? resourcesPageHeading.subHeading : null}
</p>

               
              </div>    
              </Container>
              </div> 
    </React.Fragment>
  );
};
export default Card1;
