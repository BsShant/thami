import React from "react";
import publicationcard1 from "../../../assests/airpolution.jpg";
import { Container } from "react-bootstrap";
import "../../style.css";
import { useSelector } from 'react-redux';


const Card1 = () => {
  const blogsPageHeading= useSelector(state=>state.eventStore.blogsPageHeading)

  return (
    <React.Fragment>
     <div className="blogBanner" style={{backgroundImage:`url(${blogsPageHeading? blogsPageHeading.image:null})`}}>
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
                  {blogsPageHeading? blogsPageHeading.pageHeading:null}  
 {/* Latest Blog     */}
        </h2>
<p style={{color:"white"}}>
{blogsPageHeading? blogsPageHeading.pageSubHeading:null}
          {/* We are a social unit with community such as norms. */}
        </p>
               
              </div>    
              </Container>
              </div>  
    </React.Fragment>
  );
};
export default Card1;
