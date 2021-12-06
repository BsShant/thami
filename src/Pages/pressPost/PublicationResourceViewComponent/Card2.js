import React from "react";
import { Container } from "react-bootstrap";
import publicationcard2 from "../../../assests/publicationcard2.jpg";
import { useSelector } from "react-redux";
import { server } from "../../../utils/fetch";
import { PostAddOutlined } from "@material-ui/icons";
const Card2 = (props) => {
  const { postName, postId } = props.match.params;

  const pressData = useSelector((state) => state.readerStore.pressData);
  const pressReleaseSection = useSelector(
    (state) => state.publicationStore.pressReleaseSection
  );

  return (
    <React.Fragment>
      <div className="articleHeader">
        <Container>
          {/* <div style={{backgroundImage:`url(${server}/${
            pressReleaseSection && pressReleaseSection.filter(
              (item) => item.id.toString() === postId.toString()
            )[0]
              ? pressReleaseSection.filter(
                  (item) => item.id.toString() === postId.toString()
                )[0].image
              : null
          })`,backgroundRepeat:"no-repeat"
          , backgroundSize:"cover"
          , backgroundPosition:"top", width:"100%", height:"550px"}}></div> */}
          <img
            src={`${server}/${
              pressReleaseSection &&
              pressReleaseSection.filter(
                (item) => item.id.toString() === postId.toString()
              )[0]
                ? pressReleaseSection.filter(
                    (item) => item.id.toString() === postId.toString()
                  )[0].image
                : null
            }`}
            style={{ width: "100%", objectFit:'cover', maxHeight:'600px', aspectRatio:'8/5' }}
          ></img>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card2;
