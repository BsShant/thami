import React, { useLayoutEffect } from "react";
import { Container } from "react-bootstrap";
import publicationcard3 from "../../../assests/publicationcard3.jpg";
import { useSelector } from "react-redux";
import Editor from "../../../component/editor/editor";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { server } from "../../../utils/fetch";
import ProfileBox from "../../../component/profileBox/profileBox";

const Card3 = (props) => {
  const { postName, postId } = props.match.params;

  const blogsSection = useSelector((state) => state.eventStore.blogsSection);
  const myBlog =
    blogsSection &&
    blogsSection.filter((item) => item.id.toString() === postId.toString())[0]
      ? blogsSection.filter(
          (item) => item.id.toString() === postId.toString()
        )[0]
      : null;
  //   const [editorState, setEditorState] = React.useState(
  //     blogsData? ()=>EditorState.createWithContent(convertFromRaw(JSON.parse(blogsData.detail))): () => EditorState.createEmpty()
  //    )
  //    useLayoutEffect(() => {
  //     return () => {
  //         setEditorState(()=>EditorState.createEmpty())
  //     }
  // }, [])
  return (
    <React.Fragment>
      <div className="text-center articleBox">
        <Container>
          <h1 style={{ fontWeight: "bold" }}>
            {/* Air Pollution in news today */}
            {blogsSection &&
            blogsSection.filter(
              (item) => item.id.toString() === postId.toString()
            )[0]
              ? blogsSection.filter(
                  (item) => item.id.toString() === postId.toString()
                )[0].title
              : null}
          </h1>
          {blogsSection &&
          blogsSection.filter(
            (item) => item.id.toString() === postId.toString()
          )[0] ? (
            <Editor
              editorState={EditorState.createWithContent(
                convertFromRaw(
                  JSON.parse(
                    blogsSection.filter(
                      (item) => item.id.toString() === postId.toString()
                    )[0].detail
                  )
                )
              )}
              toolbarClassName="hideToolbar"
              readOnly
            />
          ) : null}

          {myBlog &&
          myBlog.authorImage &&
          myBlog.authorName &&
          myBlog.authorDescription ? (
            <ProfileBox
              authorImage={myBlog.authorImage}
              authorDescription={myBlog.authorDescription}
              authorName={myBlog.authorName}
            />
          ) : null}
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card3;
