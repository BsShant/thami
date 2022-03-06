import React, { useState } from "react";
import { message, Button, Form } from "antd";
import FormItem from "../formItem/formItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { server } from "../../utils/fetch";
import { useDispatch, useSelector } from "react-redux";
import { logoutProcessStarts } from "../../store/authStore/auth.action";
import "./styles.css";
import ImagePlaceholder from "../../assests/author.jpg";
import { fetchingEventContentStarts } from "../../store/eventStore/event.action";
const key = "updatable";

const AuthorBox = (props) => {
    console.log(props.value.authorImage)
  const parsedToken = useSelector((state) => state.authStore.userToken);
  const newServer = props.server;

  const dispatch = useDispatch();
  let imageHolder = props.value && props.value.authorImage
    ? `${server}/${props.value.authorImage}`
    : ImagePlaceholder;

  const [file, updateFile] = useState(imageHolder);
  const [selectedFile, setSelectedFile] = useState(null);

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
  const onFinish = async (values) => {
    if (!selectedFile && !props.value) {
      message.error({ content: "Please select author image", duration: 2 });
      return;
    }
    message.loading({ content: "Loading...", key, duration: 2 });

    const formData = new FormData();
    Object.keys(values).map((data) => {
      return formData.append(data, values[data]);
    });
    if (!selectedFile) {
      formData.append("filename", props.value.authorImage);
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

      if (data) {
        message.success({ content: data.message, key, duration: 2 });
      }
      dispatch(fetchingEventContentStarts());
    } catch (error) {
      console.log(error);
      message.error({ content: "The operation failed", key, duration: 2 });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="col-sm-12 col-md-12">
      <div>
        <h3>Author Box</h3>
        <p className="authorImageHeading">Author Image</p>
        <div>
          <label
            for="updateAuthorFile"
            className="uploadAuthorImage"
            style={{
              backgroundImage: `url(${file})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <FontAwesomeIcon
              icon={faPlus}
              style={{ color: "#f6b745", fontSize: "30px" }}
            />
          </label>
          <input
            id="updateAuthorFile"
            type="file"
            name="authorImage"
            onChange={fileChange}
            style={{ display: "none" }}
            accept="image/*"
          />
        </div>
      </div>
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
        <FormItem hidden="true" label="News Id" name="id" />

        <FormItem label="Author Name" name="authorName" />
        <FormItem
          label="Author Description"
          Textarea="Aextarea"
          height="70px"
          name="authorDescription"
        />
        <Button className="buttonNormal" htmlType="submit">
         Update Author Box
        </Button>
      </Form>
    </div>
  );
};

export default AuthorBox;
