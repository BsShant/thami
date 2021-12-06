import React from "react";
import { Container } from "react-bootstrap";
import publicationcard2 from "../assests/publicationcard2.jpg";
import { useSelector } from "react-redux";
import { server } from "../utils/fetch";

const Card2 = (props) => {
  const { postName, postId } = props.match.params;

  const resourcesData = useSelector((state) => state.readerStore.resourcesData);
  const resourcesSection = useSelector(
    (state) => state.publicationStore.resourcesSection
  );

  return (
    <React.Fragment>
      <div className="articleHeader">
        <Container>
          {/* <div style={{backgroundImage:`url(${server}/${
            resourcesSection && resourcesSection.filter(item => item.id.toString() === postId.toString())[0]? resourcesSection.filter(item => item.id.toString() === postId.toString())[0].image
              : null
          })`,backgroundRepeat:"no-repeat"
          , backgroundSize:"cover"
          , backgroundPosition:"top", width:"100%", height:"550px"}}></div> */}
          <img
            src={`${server}/${
              resourcesSection &&
              resourcesSection.filter(
                (item) => item.id.toString() === postId.toString()
              )[0]
                ? resourcesSection.filter(
                    (item) => item.id.toString() === postId.toString()
                  )[0].image
                : null
            }`}
            style={{ width: "100%", objectFit:'cover', maxHeight:'600px', aspectRatio:'8/5'}}
          ></img>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card2;
