import React from "react";
import Card1 from "./PublicationResourceViewComponent/Card1";
import Card2 from "./PublicationResourceViewComponent/Card2";
import Card3 from "./PublicationResourceViewComponent/Card3";
import Card4 from "./PublicationResourceViewComponent/Card4";
import { useSelector } from "react-redux";
import draftToHtml from "draftjs-to-html";
import GoTOTop from "../goToTop";
import { server } from "../../utils/fetch";
import HelmetMetaData from "../../component/helmet/helmet";
const ResourcePreview = (props) => {
  const { postId } = props.match.params;
  const newsSection = useSelector((state) => state.eventStore.newsSection);
  const myNews =
    newsSection &&
    newsSection.filter((item) => item.id.toString() === postId.toString())[0]
      ? newsSection.filter(
          (item) => item.id.toString() === postId.toString()
        )[0]
      : null;

  return (
    <React.Fragment>
      <HelmetMetaData
        image={myNews ? server + "/" + myNews.image : undefined}
        title={myNews ? myNews.title : undefined}
        description={
          myNews
            ? draftToHtml(JSON.parse(myNews.detail)).replace(
                /(<([^>]+)>)/gi,
                ""
              )
            : undefined
        }
      />
      myNews
      <Card1 {...props} />
      <Card2 {...props} />
      <Card3 {...props} />
      <Card4 {...props} />
      <GoTOTop {...props} />
    </React.Fragment>
  );
};
export default ResourcePreview;
