import React from "react";
import publicationcard1 from "../../../assests/airpolution.jpg";
import { Container } from "react-bootstrap";
import "../../style.css";
import { useSelector } from 'react-redux';

const Card1 = () => {
  const ourArticlesPageHeading= useSelector(state=>state.eventStore.ourArticlesPageHeading)

  return (
    <React.Fragment>
     <div className="articleBanner" style={{backgroundImage:`url(${ourArticlesPageHeading? ourArticlesPageHeading.image:null})`}}>
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
                                    {ourArticlesPageHeading? ourArticlesPageHeading.pageHeading:null}  

{/* Latest Activities          */}
   </h2>
<p style={{color:"white"}}>
{ourArticlesPageHeading? ourArticlesPageHeading.pageSubHeading:null}

          {/* We are a social unit with community such as norms. */}
        </p>
               
              </div>      
</Container>
     </div>
    </React.Fragment>
  );
};
export default Card1;
