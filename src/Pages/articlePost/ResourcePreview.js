import React from "react";
import Card1 from "./PublicationResourceViewComponent/Card1";
import Card2 from "./PublicationResourceViewComponent/Card2";
import Card3 from "./PublicationResourceViewComponent/Card3";
import Card4 from "./PublicationResourceViewComponent/Card4";
import GoTOTop from "../goToTop";
import HelmetMetaData from "../../component/helmet/helmet";
import { useLocation } from "react-router-dom";
import { server } from "../../utils/fetch";

import { useSelector } from "react-redux";
import draftToHtml from "draftjs-to-html";
const ResourcePreview = (props) => {
  const { postId } = props.match.params;
  const ourArticlesSection = useSelector(
    (state) => state.eventStore.ourArticlesSection
  );
  const myArticle =
    ourArticlesSection &&
    ourArticlesSection.filter(
      (item) => item.id.toString() === postId.toString()
    )
      ? ourArticlesSection.filter(
          (item) => item.id.toString() === postId.toString()
        )[0]
      : null;

  return (
    <React.Fragment>
      <HelmetMetaData
        image={myArticle ? server + "/" + myArticle.image : undefined}
        title={myArticle ? myArticle.title : undefined}
        description={
          myArticle
            ? draftToHtml(JSON.parse(myArticle.detail)).replace(
                /(<([^>]+)>)/gi,
                ""
              )
            : undefined
        }
      />
      <Card1 {...props} />
      <Card2 {...props} />
      <Card3 {...props} />
      <Card4 {...props} />
      <GoTOTop />
    </React.Fragment>
  );
};
export default ResourcePreview;
