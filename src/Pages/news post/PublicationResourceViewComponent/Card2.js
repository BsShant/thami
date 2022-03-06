import React from "react";
import { Container } from "react-bootstrap";
import publicationcard2 from "../../../assests/news1.jpg";
import { useSelector } from "react-redux";
import { server } from "../../../utils/fetch";
import SocialShare from "../../../component/socialShare/socialShare";
import Skeleton from "react-skeleton-loader";
import ProfileInfo from "../../../component/profileInfo/profileInfo";
import { useLocation } from "react-router-dom";
import '../../style.css';

const Card2 = (props) => {
  const { postName, postId } = props.match.params;
  const location = useLocation();
  const newsData = useSelector((state) => state.readerStore.newsData);
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
      <div className="articleHeader">
        <Container style={{ textAlign: "center" }}>
          {/* <div style={{backgroundImage:`url(${server}/${
            newsSection && newsSection.filter(item => item.id.toString() === postId.toString())[0]? newsSection.filter(item => item.id.toString() === postId.toString())[0].image
              : null
          })`,backgroundRepeat:"no-repeat"
          , backgroundSize:"cover"
          , backgroundPosition:"top", width:"100%", height:"550px"}}></div> */}
          <img
            src={`${server}/${myNews ? myNews.image : null}`}
            className='featuredImage'

            alt="featuredImage"
          ></img>
          <div
            className="postShareBox"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "18px",
            }}
          >
            {myNews && myNews.authorImage && myNews.authorName ? (
              <ProfileInfo
                authorName={myNews.authorName}
                authorImage={myNews.authorImage}
                date={myNews.date}
              />
            ) : (
              <div></div>
            )}
            <SocialShare
              title={myNews ? myNews.title : null}
              location={location}
            />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card2;
