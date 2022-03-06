import React from "react";
import { useSelector } from "react-redux";
import HelmetMetaData from "../component/helmet/helmet";
import Card1 from "../PublicationResourceViewComponent/Card1";
import Card2 from "../PublicationResourceViewComponent/Card2";
import Card3 from "../PublicationResourceViewComponent/Card3";
import Card4 from "../PublicationResourceViewComponent/Card4";
import { server } from "../utils/fetch";
import GoTOTop from "./goToTop";
import draftToHtml from "draftjs-to-html";

const ResourcePreview = (props) => {
  const { postId } = props.match.params;
  const resourcesSection = useSelector(
    (state) => state.publicationStore.resourcesSection
  );
  const myResources =
    resourcesSection &&
    resourcesSection.filter(
      (item) => item.id.toString() === postId.toString()
    )[0]
      ? resourcesSection.filter(
          (item) => item.id.toString() === postId.toString()
        )[0]
      : null;
  return (
    <React.Fragment>
      <HelmetMetaData
        image={myResources ? server + "/" + myResources.image : undefined}
        title={myResources ? myResources.title : undefined}
        description={
          myResources
            ? draftToHtml(JSON.parse(myResources.detail)).replace(
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
