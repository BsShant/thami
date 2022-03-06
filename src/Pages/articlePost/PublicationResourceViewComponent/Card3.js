import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import publicationcard3 from "../../../assests/publicationcard3.jpg";
import { useSelector } from "react-redux";
import Editor from "../../../component/editor/editor";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import ProfileBox from "../../../component/profileBox/profileBox";
const Card3 = (props) => {
  const { postId } = props.match.params;
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
  useEffect(() => {}, []);
  // org_html = document.getElementById("slidesContainer").innerHTML;
  // new_html = "<div id='slidesInner'>" + org_html + "</div>";
  // document.getElementById("slidesContainer").innerHTML = new_html;
  const activateWhoosh = () => {
    var imgContainer = document.querySelectorAll(".rdw-image-imagewrapper");
    for (var i = 0; i < imgContainer.length; i++) {
      // console.log(imgContainer[i].children.HTMLCollection)
      imgContainer[i].style.backgroundColor = "red";
    }
  };

  // const a = imgContainer.map((source) => {
  //   return console.log(source);
  // });
  return (
    <React.Fragment>
      <div className="text-center articleBox">
        <Container>
          <h1 style={{ fontWeight: "bold" }}>
            {ourArticlesSection &&
            ourArticlesSection.filter(
              (item) => item.id.toString() === postId.toString()
            )[0]
              ? ourArticlesSection.filter(
                  (item) => item.id.toString() === postId.toString()
                )[0].title
              : null}
          </h1>
          {ourArticlesSection &&
          ourArticlesSection.filter(
            (item) => item.id.toString() === postId.toString()
          )[0] ? (
            <Editor
              editorState={EditorState.createWithContent(
                convertFromRaw(
                  JSON.parse(
                    ourArticlesSection.filter(
                      (item) => item.id.toString() === postId.toString()
                    )[0].detail
                  )
                )
              )}
              toolbarClassName="hideToolbar"
              readOnly
            />
          ) : null}
          {myArticle &&
          myArticle.authorImage &&
          myArticle.authorName &&
          myArticle.authorDescription ? (
            <ProfileBox
              authorImage={myArticle.authorImage}
              authorDescription={myArticle.authorDescription}
              authorName={myArticle.authorName}
            />
          ) : null}
          {/* {activateWhoosh()} */}
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card3;
