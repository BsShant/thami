import React, { useLayoutEffect } from "react";
import { server } from "../../utils/fetch";

const ProfileBox = (props) => {
  const { authorName, authorDescription, authorImage } = props;

  //   const [editorState, setEditorState] = React.useState(
  //     blogsData? ()=>EditorState.createWithContent(convertFromRaw(JSON.parse(blogsData.detail))): () => EditorState.createEmpty()
  //    )
  //    useLayoutEffect(() => {
  //     return () => {
  //         setEditorState(()=>EditorState.createEmpty())
  //     }
  // }, [])
  return (
    <div
      className="profileBox"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "0.6px solid grey",
        borderBottom: "0.6px solid grey",
        paddingTop: "50px",
        paddingBottom: "50px",
        marginTop: "50px",
      }}
    >
      {/* <div>About the Author</div> */}
      <div
        style={{
          width: "75px",
          height: "75px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          src={server + "/" + authorImage}
          alt="profileImage"
        />
      </div>
      <div
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "10px",
          marginBottom: "15px",
          textTransform: "capitalize",
        }}
      >
        {authorName}
      </div>
      <div style={{ fontSize: "18px" }}>{authorDescription}</div>
    </div>
  );
};
export default ProfileBox;
