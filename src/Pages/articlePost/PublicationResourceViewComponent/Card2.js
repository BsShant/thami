import React from "react";
import { Container } from "react-bootstrap";
import publicationcard2 from "../../../assests/publicationcard2.jpg";
import { useSelector } from "react-redux";
import { server } from "../../../utils/fetch";
import ProfileInfo from "../../../component/profileInfo/profileInfo";
import SocialShare from "../../../component/socialShare/socialShare";
import { useLocation } from "react-router-dom";
import '../../style.css';

const Card2 = (props) => {
  const { postId } = props.match.params;
  const location = useLocation();
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
      <div className="articleHeader">
        <Container>
          <img
            src={`${server}/${myArticle ? myArticle.image : null}`}
            className='featuredImage'

            alt="featuredImage"
          />
          <div
            className="postShareBox"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            {myArticle && myArticle.authorImage && myArticle.authorName ? (
              <ProfileInfo
                authorName={myArticle.authorName}
                authorImage={myArticle.authorImage}
                date={myArticle.date}
              />
            ) : (
              <div></div>
            )}
            <SocialShare
              title={myArticle ? myArticle.title : null}
              location={location}
            />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card2;
