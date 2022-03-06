import React from "react";
import { Container } from "react-bootstrap";
import publicationcard2 from "../assests/publicationcard2.jpg";
import { useSelector } from "react-redux";
import { server } from "../utils/fetch";
import { useLocation } from "react-router-dom";
import SocialShare from "../component/socialShare/socialShare";
import '../Pages/style.css';

const Card2 = (props) => {
  const { postId } = props.match.params;
  const location = useLocation();
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
      <div className="articleHeader">
        <Container>
          <img
            src={`${server}/${myResources ? myResources.image : null}`}
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
            {myResources ? (
              <div style={{ fontSize: "18px", color: "grey" }}>
                {new Date(myResources.date).toUTCString().split(" ")[2] +
                  " " +
                  new Date(myResources.date).toUTCString().split(" ")[1] +
                  " " +
                  new Date(myResources.date).toUTCString().split(" ")[3]}
              </div>
            ) : (
              <div></div>
            )}
            <SocialShare
              title={myResources ? myResources.title : null}
              location={location}
            />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card2;
