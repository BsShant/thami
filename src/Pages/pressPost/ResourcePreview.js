import React from "react";
import Card1 from "./PublicationResourceViewComponent/Card1";
import Card2 from "./PublicationResourceViewComponent/Card2";
import Card3 from "./PublicationResourceViewComponent/Card3";
import Card4 from "./PublicationResourceViewComponent/Card4";
import GoTOTop from "../goToTop";
import { useSelector } from "react-redux";
import { server } from "../../utils/fetch";
import HelmetMetaData from "../../component/helmet/helmet";
import draftToHtml from "draftjs-to-html";

const ResourcePreview = (props) => {
  const { postId } = props.match.params;
  const pressReleaseSection = useSelector(
    (state) => state.publicationStore.pressReleaseSection
  );
  const myPress =
    pressReleaseSection &&
    pressReleaseSection.filter(
      (item) => item.id.toString() === postId.toString()
    )[0]
      ? pressReleaseSection.filter(
          (item) => item.id.toString() === postId.toString()
        )[0]
      : null;
  return (
    <React.Fragment>
       <HelmetMetaData
        image={myPress ? server + "/" + myPress.image : undefined}
        title={myPress ? myPress.title : undefined}
        description={
          myPress
            ? draftToHtml(JSON.parse(myPress.detail)).replace(
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
