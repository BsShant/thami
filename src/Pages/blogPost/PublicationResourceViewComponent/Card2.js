import React from "react";
import { Container } from "react-bootstrap";
import publicationcard2 from "../../../assests/joinhands.jpg";
import { useSelector } from "react-redux";
import { server } from "../../../utils/fetch";
import {
  FacebookShareCount,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount,
} from "react-share";
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  ViberShareButton,
  ViberIcon,
} from "react-share";
import { useLocation } from "react-router-dom";
import "../../style.css";

import ProfileInfo from "../../../component/profileInfo/profileInfo";
import SocialShare from "../../../component/socialShare/socialShare";
const Card2 = (props) => {
  const blogsData = useSelector((state) => state.readerStore.blogsData);
  const location = useLocation();
  console.log(location)

  const { postName, postId } = props.match.params;
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
      <div className="articleHeader">
        <Container>
          <img
            src={`${server}/${myBlog ? myBlog.image : null}`}
            className="featuredImage"
            alt="Featured post"
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
            {myBlog && myBlog.authorImage && myBlog.authorName ? (
              <ProfileInfo
                authorName={myBlog.authorName}
                authorImage={myBlog.authorImage}
                date={myBlog.date}
              />
            ) : (
              <div></div>
            )}
            <SocialShare
              title={myBlog ? myBlog.title : null}
              location={location}
            />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card2;
