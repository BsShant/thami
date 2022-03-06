import React from "react";
import Card1 from "./PublicationResourceViewComponent/Card1";
import Card2 from "./PublicationResourceViewComponent/Card2";
import Card3 from "./PublicationResourceViewComponent/Card3";
import Card4 from "./PublicationResourceViewComponent/Card4";
import GoTOTop from "../goToTop";
import { useSelector } from "react-redux";
import { server } from "../../utils/fetch";
import draftToHtml from "draftjs-to-html";

import HelmetMetaData from "../../component/helmet/helmet";
const ResourcePreview = (props) => {
  
  const {  postId } = props.match.params;
  const blogsSection = useSelector((state) => state.eventStore.blogsSection);
  const myBlog =
    blogsSection &&
    blogsSection.filter((item) => item.id.toString() === postId.toString())[0]
      ? blogsSection.filter(
          (item) => item.id.toString() === postId.toString()
        )[0]
      : null;
  return (
    <React.Fragment>
       <HelmetMetaData
        image={myBlog ? server + "/" + myBlog.image : undefined}
        title={myBlog ? myBlog.title : undefined}
        description={
          myBlog
            ? draftToHtml(JSON.parse(myBlog.detail)).replace(
                /(<([^>]+)>)/gi,
                ""
              )
            : undefined
        }
      />
      <Card1 {...props}/>
      <Card2 {...props}/>
      <Card3 {...props}/>
      <Card4 {...props}/>
      <GoTOTop />

      
    </React.Fragment>
  );
};
export default ResourcePreview;
