import React from "react";
import { Container } from "react-bootstrap";
import publicationcard2 from "../../../assests/joinhands.jpg";
import { useSelector } from "react-redux";
import { server } from "../../../utils/fetch";
const Card2 = (props) => {
  const blogsData = useSelector((state) => state.readerStore.blogsData);
  const blogsSection = useSelector((state) => state.eventStore.blogsSection);
  const { postName, postId } = props.match.params;
  return (
    <React.Fragment>
      <div className="articleHeader">
        <Container>
        {/* <div style={{backgroundImage:`url(${server}/${
            blogsSection && blogsSection.filter(
              (item) => item.id.toString() === postId.toString()
            )[0]
              ? blogsSection.filter(
                  (item) => item.id.toString() === postId.toString()
                )[0].image
              : null
          })`,backgroundRepeat:"no-repeat"
          , backgroundSize:"cover"
          , backgroundPosition:"top", width:"100%", height:"550px"}}></div> */}
        <img
          src={`${server}/${
            blogsSection && blogsSection.filter(
              (item) => item.id.toString() === postId.toString()
            )[0]
              ? blogsSection.filter(
                  (item) => item.id.toString() === postId.toString()
                )[0].image
              : null
          }`}
          style={{ width: "100%" ,objectFit:'cover', maxHeight:'600px', aspectRatio:'8/5' }}
        ></img>
        </Container>
       
      </div>
    </React.Fragment>
  );
};
export default Card2;
