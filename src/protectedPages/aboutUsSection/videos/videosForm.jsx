import React, { useState } from "react";
import { Form, Input, Button, Table, message, Modal } from "antd";
import FormItem from "../../../component/formItem/formItem";
import { server } from "../../../utils/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import ImagePlaceholder from "../../../assests/imagePlaceholder.jpg";
import { useDispatch } from "react-redux";
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import { useSelector } from "react-redux";
import { fetchingAboutContentStarts } from "../../../store/aboutStore/about.action";
const key = "updatable";
const newServer = `${server}/aboutUs/video`;

const OurPartnersForm = (props) => {
  const dispatch = useDispatch();
  const parsedToken = useSelector((state) => state.authStore.userToken);

  let imageHolder = props.value
    ? `${server}/${props.value.image}`
    : ImagePlaceholder;

  const [file, updateFile] = useState(imageHolder);
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoFile, updateVideoFile] = useState();
  const [selectedVideoFile, setSelectedVideoFile] = useState(null);

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
  const videoFileChange = (e) => {
    setSelectedVideoFile(e.target);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        updateVideoFile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const onFinish = async (values) => {
    if (!props.value) {
      if (!selectedFile) {
        message.error({ content: "Please select an image", duration: 2 });
        return;
      }
      if (!selectedVideoFile) {
        message.error({ content: "Please select a video", duration: 2 });
        return;
      }
      message.loading({ content: "Loading...", key, duration: 2 });

      const formData = new FormData();
      Object.keys(values).map((data) => {
        return formData.append(data, values[data]);
      });
      formData.append(selectedFile.name, selectedFile.files[0]);
      formData.append(selectedVideoFile.name, selectedVideoFile.files[0]);
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
        dispatch(fetchingAboutContentStarts());
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
      if (!selectedFile) {
        formData.append("filename", props.value.image);
      } else {
        formData.append(selectedFile.name, selectedFile.files[0]);
      }
      try {
        const res = await fetch(`${server}/aboutUs/video/videoDetail`, {
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
        dispatch(fetchingAboutContentStarts());
      } catch (error) {
        console.log(error);
        message.error({ content: "The operation failed", key, duration: 2 });
      }
    }
  };

  const onFinishVideoFile = async (values) => {
    console.log("values", values);
    if (!selectedVideoFile) {
      message.error({ content: "Please select a video file", duration: 2 });
      return;
    }
    message.loading({ content: "Loading...", key, duration: 2 });

    const formData = new FormData();
    Object.keys(values).map((data) => {
      return formData.append(data, values[data]);
    });
    formData.append(selectedVideoFile.name, selectedVideoFile.files[0]);
    try {
      const res = await fetch(`${server}/aboutUs/video/videoFile`, {
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
      dispatch(fetchingAboutContentStarts());
    } catch (error) {
      console.log(error);
      message.error({ content: "The operation failed", key, duration: 2 });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="row pageHeading">
      <div className="col-sm-12 col-md-12">
        <h3>{props.title}</h3>

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
            <FormItem hidden="true" label="Id" name="id" value={props.value} />
          ) : null}
          <FormItem
            Textarea="Textarea"
            height="70px"
            label="Video Title"
            name="title"
          />
          <FormItem
            label="Video Detail"
            name="detail"
            Textarea="Textarea"
            height="120px"
          />
          {/* <FormItem Textarea='Textarea' height='70px' label='Position' name='position' /> */}
          {!props.value?  <input
            id="videoFile"
            type="file"
            name="video"
            onChange={videoFileChange}
            style={{ marginBottom: "50px" }}
            accept="video/*"
          />:null}

          <Form.Item
            wrapperCol={{
              span: 16,
            }}
          >
            <Button className="buttonNormal" htmlType="submit">
              {props.value ? "Update Video Detail" : "Create"}
            </Button>
          </Form.Item>
        </Form>

        {props.value ? (
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
            onFinish={onFinishVideoFile}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <FormItem hidden="true" label="Book Id" name="id" />

            <input
              id="updateFile"
              type="file"
              name="video"
              onChange={videoFileChange}
              style={{ margin: "40px 0px 30px" }}
            />

            {/* <FormItem label='Date' name='date' /> */}

            <Form.Item
              wrapperCol={{
                span: 16,
              }}
            >
              <Button className="buttonNormal" htmlType="submit">
                {props.value ? "Update Video File" : "Create"}
              </Button>
            </Form.Item>
          </Form>
        ) : null}
      </div>
    </div>
  );
};

export default OurPartnersForm;
