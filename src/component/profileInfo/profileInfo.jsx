import React, { useLayoutEffect } from "react";
import { server } from "../../utils/fetch";
const ProfileInfo = (props) => {
  const { authorName, date, authorImage } = props;

  //   const [editorState, setEditorState] = React.useState(
  //     blogsData? ()=>EditorState.createWithContent(convertFromRaw(JSON.parse(blogsData.detail))): () => EditorState.createEmpty()
  //    )
  //    useLayoutEffect(() => {
  //     return () => {
  //         setEditorState(()=>EditorState.createEmpty())
  //     }
  // }, [])
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          borderRadius: "50%",
          height: "40px",
          width: "40px",
          border: "1px solid grey",
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
      <div style={{ marginLeft: "10px" }}>
        <div style={{ fontSize: "18px", fontWeight: "bold", textTransform:"capitalize" }}>{authorName}</div>
        <div style={{ fontSize: "18px", color: "grey" }}>
          {new Date(date).toUTCString().split(" ")[2] +
            " " +
            new Date(date).toUTCString().split(" ")[1] +
            " " +
            new Date(date).toUTCString().split(" ")[3]}
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
