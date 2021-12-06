import React from "react";
import Card1 from "./PublicationResourceViewComponent/Card1";
import Card2 from "./PublicationResourceViewComponent/Card2";
import Card3 from "./PublicationResourceViewComponent/Card3";
import Card4 from "./PublicationResourceViewComponent/Card4";
import { useSelector } from 'react-redux';

import GoTOTop from "../goToTop";
const ResourcePreview = (props) => {
  const newsSection= useSelector(state=>state.eventStore.newsSection)
  const newsData= useSelector(state=>state.readerStore.newsData)
 
  return (
    <React.Fragment>
      <Card1 {...props}/>
      <Card2 {...props}/>
      <Card3 {...props}/>
      <Card4 {...props}/>
      <GoTOTop {...props}/>

      
    </React.Fragment>
  );
};
export default ResourcePreview;
