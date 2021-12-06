import React from "react";
import publicationcard1 from "../../../assests/airpolution.jpg";
import { Container } from "react-bootstrap";
import "../../style.css";
import { useSelector } from 'react-redux';

const Card1 = () => {
  const newsPageHeading= useSelector(state=>state.eventStore.newsPageHeading)
  

  return (
    <React.Fragment>
      <div className="newsBanner" style={{backgroundImage:`url(${newsPageHeading? newsPageHeading.image:null})`}}>
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
{newsPageHeading? newsPageHeading.pageHeading:null}             </h2>
<p style={{color:"white"}}>
  {newsPageHeading? newsPageHeading.pageSubHeading:null}
          {/* We are a social unit with community such as norms. */}
        </p>
               
              </div>      
</Container>
     </div>
    </React.Fragment>
  );
};
export default Card1;
