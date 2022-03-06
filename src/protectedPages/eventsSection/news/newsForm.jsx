import React, { useState } from "react";
import { Form, Input, Button, Table, message, Modal } from "antd";
import FormItem from "../../../component/formItem/formItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { server } from "../../../utils/fetch";
import { useDispatch, useSelector } from "react-redux";
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import Editor from "../../../component/editor/soleEditor";
import {
  ContentState,
  EditorState,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import AuthorBox from "../../../component/authorBox/authorBox";
import "./styles.css";
import ImagePlaceholder from "../../../assests/imagePlaceholder.jpg";
import AuthorHolder from "../../../assests/author.jpg";
import { fetchingEventContentStarts } from "../../../store/eventStore/event.action";
const key = "updatable";
const newServer = `${server}/event/news`;
const content = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "Initialized from content state.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

const OurPartnersForm = (props) => {
  const parsedToken = useSelector((state) => state.authStore.userToken);

  const dispatch = useDispatch();
  let imageHolder = props.value
    ? `${server}/${props.value.image}`
    : ImagePlaceholder;
  let authHolder = props.value
    ? `${server}/${props.value.authorImage}`
    : AuthorHolder;

  if (props.value) {
    console.log(JSON.parse(props.value.detail));
    console.log(convertFromRaw(JSON.parse(props.value.detail)));
    console.log(convertFromRaw(content));
    console.log(draftToHtml(JSON.parse(props.value.detail)));
  }
  const contentState = convertFromRaw(content);
  const [file, updateFile] = useState(imageHolder);
  const [authorFile, updateAuthorFile] = useState(authHolder);

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedAuthorFile, setSelectedAuthorFile] = useState(null);

  const [editorState, setEditorState] = useState(
    props.value
      ? () =>
          EditorState.createWithContent(
            convertFromRaw(JSON.parse(props.value.detail))
          )
      : () => EditorState.createEmpty()
  );

  // console.log((props.value.detail))

  // const onEditorStateChange = (editorState) => {

  //   setEditorState(editorState)
  // };
  const fileChange = (e) => {
    setSelectedFile(e.target);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        updateFile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const AuthorFileChange = (e) => {
    setSelectedAuthorFile(e.target);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        updateAuthorFile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const onFinish = async (values) => {
    const contentState = editorState.getCurrentContent();
    if (!props.value) {
      if (!selectedAuthorFile) {
        message.error({
          content: "Please select an author image",
          duration: 2,
        });
        return;
      }
      if (!selectedFile) {
        message.error({ content: "Please select an image", duration: 2 });
        return;
      }

      message.loading({ content: "Loading...", key, duration: 2 });

      const formData = new FormData();
      Object.keys(values).map((data) => {
        return formData.append(data, values[data]);
      });
      formData.append("detail", JSON.stringify(convertToRaw(contentState)));

      formData.append(selectedFile.name, selectedFile.files[0]);
      formData.append(selectedAuthorFile.name, selectedAuthorFile.files[0]);

      try {
        const res = await fetch(`${newServer}`, {
          method: props.method,
          body: formData,
          headers: {
            Accept: "multipart/form-data",
            authorization: `Bearer ${parsedToken}`,
          },
        });
        const data = await res.json();
        if (data.hasOwnProperty("user")) {
          message.error({ content: data.message, key, duration: 2 });
          return dispatch(logoutProcessStarts(data.user));
        }

        console.log(data);
        if (data) {
          message.success({ content: data.message, key, duration: 2 });
        }
        dispatch(fetchingEventContentStarts());
      } catch (error) {
        console.log(error);
        message.error({ content: "The operation failed", key, duration: 2 });
      }
    } else {
      if (!selectedFile && !props.value) {
        message.error({ content: "Please select an image", duration: 2 });
        return;
      }

      message.loading({ content: "Loading...", key, duration: 2 });

      const formData = new FormData();
      Object.keys(values).map((data) => {
        return formData.append(data, values[data]);
      });
      formData.append("detail", JSON.stringify(convertToRaw(contentState)));

      if (!selectedFile) {
        formData.append("filename", props.value.image);
      } else {
        formData.append(selectedFile.name, selectedFile.files[0]);
      }

      try {
        const res = await fetch(`${newServer}`, {
          method: props.method,
          body: formData,
          headers: {
            Accept: "multipart/form-data",
            authorization: `Bearer ${parsedToken}`,
          },
        });
        const data = await res.json();
        if (data.hasOwnProperty("user")) {
          message.error({ content: data.message, key, duration: 2 });
          return dispatch(logoutProcessStarts(data.user));
        }

        console.log(data);
        if (data) {
          message.success({ content: data.message, key, duration: 2 });
        }
        dispatch(fetchingEventContentStarts());
      } catch (error) {
        console.log(error);
        message.error({ content: "The operation failed", key, duration: 2 });
      }
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // var div = document.createElement('DIV');
  // div.innerHTML =draftToHtml(convertToRaw(editorState.getCurrentContent()))
  return (
    <div className="row pageHeading">
      <h3 style={{ paddingLeft: "15px" }}>{props.title}</h3>

      <div className="col-sm-12 col-md-12">
        <div className="imageBox">
          <h3>Featured Image</h3>
          <div>
            <label
              for={props.imageId}
              className="uploadPhotoContainer"
              style={{
                backgroundImage: `url(${file})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <FontAwesomeIcon
                icon={faPlus}
                style={{ color: "#f6b745", fontSize: "60px" }}
              />
            </label>
            <input
              id={props.imageId}
              type="file"
              name="image"
              onChange={fileChange}
              style={{ display: "none" }}
              accept="image/*"
            />
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12">
        <Form
          name="basic"
          labelCol={{
            span: 24,
          }}
          layout="Vertical"
          initialValues={props.value}
          // initialValues={{
          // remember: true,
          // }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {props.value ? (
            <FormItem hidden="true" label="News Id" name="id" />
          ) : null}
          <FormItem
            label="News title"
            Textarea="Aextarea"
            height="70px"
            name="title"
          />

          <h3>Detail</h3>
          <p style={{ color: "red" }} className="errorEditor">
            Please don't copy image from another website or text editor and
            paste it. It will crash the editor.
          </p>
          <Editor
            editorState={editorState}
            setEditorState={setEditorState}
            editorClassName="greyEditor"
          />
          <FormItem
            label="Button Name"
            Textarea="Aextarea"
            height="70px"
            name="buttonName"
          />
          {!props.value ? (
            <div>
              <div className="imageBox">
                <h3>Author Image</h3>
                <div>
                  <label
                    for="createAuthorImage"
                    className="uploadAuthorImage"
                    style={{
                      backgroundImage: `url(${authorFile})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ color: "#f6b745", fontSize: "20px" }}
                    />
                  </label>
                  <input
                    id="createAuthorImage"
                    type="file"
                    name="authorImage"
                    onChange={AuthorFileChange}
                    style={{ display: "none" }}
                    accept="image/*"
                  />
                </div>
              </div>
              <FormItem
                label="Author Name"
                // Textarea="Aextarea"
                // height="70px"
                name="authorName"
              />
              <FormItem
                label="Author Description"
                Textarea="Aextarea"
                height="70px"
                name="authorDescription"
              />
            </div>
          ) : null}
          <Form.Item
            wrapperCol={{
              span: 16,
            }}
          >
            <Button className="buttonNormal" htmlType="submit">
              {props.value ? "Update" : "Create"}
            </Button>
          </Form.Item>
        </Form>
      </div>

      {props.value ? (
        <AuthorBox server={`${server}/event/news/authorBox`} {...props} />
      ) : null}
    </div>
  );
};

export default OurPartnersForm;
