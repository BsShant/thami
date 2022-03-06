import React, { useLayoutEffect } from "react";
import { Container } from "react-bootstrap";
import publicationcard3 from "../../../assests/publicationcard3.jpg";
import { useSelector } from "react-redux";
import Editor from "../../../component/editor/editor";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import ProfileBox from "../../../component/profileBox/profileBox";
const Card3 = (props) => {
  const { postName, postId } = props.match.params;

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
      <div className="text-center articleBox">
        <Container>
          <h1 style={{ fontWeight: "bold" }}>
            {/* Air Pollution in news today */}
            {newsSection &&
            newsSection.filter(
              (item) => item.id.toString() === postId.toString()
            )[0]
              ? newsSection.filter(
                  (item) => item.id.toString() === postId.toString()
                )[0].title
              : null}
          </h1>
          {/* <div className="dangerous" dangerouslySetInnerHTML={{__html: `${newsData&&newsSection?draftToHtml(JSON.parse(newsSection.filter(item=> item.id === newsData)[0].detail)) : null}`}}></div> */}
          {/* <div>{newsData&&newsSection?draftToHtml(JSON.parse(newsSection.filter(item=> item.id === newsData)[0].detail)) : null}</div> */}
          {newsSection &&
          newsSection.filter(
            (item) => item.id.toString() === postId.toString()
          )[0] ? (
            <Editor
              editorState={EditorState.createWithContent(
                convertFromRaw(
                  JSON.parse(
                    newsSection.filter(
                      (item) => item.id.toString() === postId.toString()
                    )[0].detail
                  )
                )
              )}
              toolbarClassName="hideToolbar"
              readOnly
            />
          ) : null}
          {myNews &&
          myNews.authorImage &&
          myNews.authorName &&
          myNews.authorDescription ? (
            <ProfileBox
              authorImage={myNews.authorImage}
              authorDescription={myNews.authorDescription}
              authorName={myNews.authorName}
            />
          ) : null}
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card3;
