import React from "react";
import Card1 from "../PublicationResourceViewComponent/Card1";
import Card2 from "../PublicationResourceViewComponent/Card2";
import Card3 from "../PublicationResourceViewComponent/Card3";
import Card4 from "../PublicationResourceViewComponent/Card4";
import GoTOTop from "./goToTop";
const ResourcePreview = (props) => {
  return (
    <React.Fragment>
      <Card1 {...props}/>
      <Card2 {...props}/>
      <Card3 {...props}/>
      <Card4 {...props}/>
      <GoTOTop />
    </React.Fragment>
  );
};
export default ResourcePreview;
