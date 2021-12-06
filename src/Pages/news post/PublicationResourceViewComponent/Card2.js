import React from "react";
import { Container } from "react-bootstrap";
import publicationcard2 from "../../../assests/news1.jpg";
import { useSelector } from "react-redux";
import { server } from "../../../utils/fetch";
import Skeleton from "react-skeleton-loader";
const Card2 = (props) => {
  const { postName, postId } = props.match.params;

  const newsData = useSelector((state) => state.readerStore.newsData);
  const newsSection = useSelector((state) => state.eventStore.newsSection);

  return (
    <React.Fragment>
      <div className="articleHeader">
        <Container style={{ textAlign: "center" }}>
          {/* <div style={{backgroundImage:`url(${server}/${
            newsSection && newsSection.filter(item => item.id.toString() === postId.toString())[0]? newsSection.filter(item => item.id.toString() === postId.toString())[0].image
              : null
          })`,backgroundRepeat:"no-repeat"
          , backgroundSize:"cover"
          , backgroundPosition:"top", width:"100%", height:"550px"}}></div> */}
          <img
            src={`${server}/${
              newsSection &&
              newsSection.filter(
                (item) => item.id.toString() === postId.toString()
              )[0]
                ? newsSection.filter(
                    (item) => item.id.toString() === postId.toString()
                  )[0].image
                : null
            }`}
            style={{ width: "100%", textAlign: "center", objectFit:'cover', maxHeight:'600px', aspectRatio:'8/5' }}
          ></img>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card2;
