import React from "react";
import publicationcard1 from "../../../assests/airpolution.jpg";
import { Container } from "react-bootstrap";
import "../../style.css";
import { useSelector } from 'react-redux';

const Card1 = () => {
  const pressReleasePageHeading = useSelector(state=>state.publicationStore.pressReleasePageHeading)

  return (
    <React.Fragment>
      <div className="pressReleaseBanner" style={{backgroundImage:`url(${pressReleasePageHeading? pressReleasePageHeading.image:null})`}}>
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
                                                      {pressReleasePageHeading? pressReleasePageHeading.pageHeading:null}

 {/* We routinely interact with press     */}
    </h2>
    <p style={{color:"white"}}>
     {pressReleasePageHeading? pressReleasePageHeading.subHeading : null}
</p>
               
              </div>    
              </Container>
              </div> 
    </React.Fragment>
  );
};
export default Card1;
