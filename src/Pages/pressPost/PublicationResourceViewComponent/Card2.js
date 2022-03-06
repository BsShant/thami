import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { server } from "../../../utils/fetch";
import SocialShare from "../../../component/socialShare/socialShare";
import { useLocation } from "react-router-dom";
import '../../style.css';
const Card2 = (props) => {
  const { postId } = props.match.params;
  const location = useLocation();
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
      <div className="articleHeader">
        <Container>
          <img
            src={`${server}/${myPress ? myPress.image : null}`}
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
            {myPress ? (
              <div style={{ fontSize: "18px", color: "grey" }}>
                {new Date(myPress.date).toUTCString().split(" ")[2] +
                  " " +
                  new Date(myPress.date).toUTCString().split(" ")[1] +
                  " " +
                  new Date(myPress.date).toUTCString().split(" ")[3]}
              </div>
            ) : (
              <div></div>
            )}
            <SocialShare
              title={myPress ? myPress.title : null}
              location={location}
            />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card2;
