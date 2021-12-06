import React, { useState } from "react";
import { Form, Input, Button, Table, message, Modal } from "antd";
import FormItem from "../../../component/formItem/formItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { server } from "../../../utils/fetch";

import { useDispatch } from "react-redux";
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import { useSelector } from "react-redux";
import ImagePlaceholder from "../../../assests/imagePlaceholder.jpg";
import { fetchingAboutContentStarts } from "../../../store/aboutStore/about.action";
const key = "updatable";
const newServer = `${server}/aboutUs/photo`;

const PhotoForm = (props) => {
  const dispatch = useDispatch();
  const parsedToken = useSelector((state) => state.authStore.userToken);

  let imageHolder1 = props.value
    ? `${server}/${props.value.image1}`
    : ImagePlaceholder;
  let imageHolder2 = props.value
    ? `${server}/${props.value.image2}`
    : ImagePlaceholder;
  let imageHolder3 = props.value
    ? `${server}/${props.value.image3}`
    : ImagePlaceholder;
  let imageHolder4 = props.value
    ? `${server}/${props.value.image4}`
    : ImagePlaceholder;
  let imageHolder5 = props.value
    ? `${server}/${props.value.image5}`
    : ImagePlaceholder;
  let imageHolder6 = props.value
    ? `${server}/${props.value.image6}`
    : ImagePlaceholder;
  let imageHolder7 = props.value
    ? `${server}/${props.value.image7}`
    : ImagePlaceholder;

  const [file1, updateFile1] = useState(imageHolder1);
  const [file2, updateFile2] = useState(imageHolder2);
  const [file3, updateFile3] = useState(imageHolder3);
  const [file4, updateFile4] = useState(imageHolder4);
  const [file5, updateFile5] = useState(imageHolder5);
  const [file6, updateFile6] = useState(imageHolder6);
  const [file7, updateFile7] = useState(imageHolder7);

  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile3, setSelectedFile3] = useState(null);
  const [selectedFile4, setSelectedFile4] = useState(null);
  const [selectedFile5, setSelectedFile5] = useState(null);
  const [selectedFile6, setSelectedFile6] = useState(null);
  const [selectedFile7, setSelectedFile7] = useState(null);

  const fileChange = (e) => {
    if (e.target.name === "image1") {
      console.log("1called");
      setSelectedFile1(e.target);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          updateFile1(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === "image7") {
      setSelectedFile7(e.target);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          updateFile7(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === "image2") {
      setSelectedFile2(e.target);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          updateFile2(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === "image3") {
      setSelectedFile3(e.target);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          updateFile3(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === "image4") {
      setSelectedFile4(e.target);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          updateFile4(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === "image5") {
      setSelectedFile5(e.target);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          updateFile5(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.name === "image6") {
      setSelectedFile6(e.target);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          updateFile6(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const onFinish = async (values) => {
    if (
      !selectedFile1 ||
      !selectedFile2 ||
      !selectedFile3 ||
      !selectedFile4 ||
      !selectedFile5 ||
      !selectedFile6 ||
      !selectedFile7
    ) {
      message.error({ content: "Please select an image", duration: 2 });
      return;
    }
    message.loading({ content: "Loading...", key, duration: 2 });

    const formData = new FormData();
    Object.keys(values).map((data) => {
      return formData.append(data, values[data]);
    });
    formData.append(selectedFile1.name, selectedFile1.files[0]);
    formData.append(selectedFile2.name, selectedFile2.files[0]);
    formData.append(selectedFile3.name, selectedFile3.files[0]);
    formData.append(selectedFile4.name, selectedFile4.files[0]);
    formData.append(selectedFile5.name, selectedFile5.files[0]);
    formData.append(selectedFile6.name, selectedFile6.files[0]);
    formData.append(selectedFile7.name, selectedFile7.files[0]);

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
      dispatch(fetchingAboutContentStarts())

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
        <div className="row">
          <div className="imageBox col-lg-4 col-sm-12">
            <div>
              <label
                for={`${props.imageId}image1`}
                className="uploadPhotoContainer"
                style={{
                  backgroundImage: `url(${file1})`,
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
                id={`${props.imageId}image1`}
                type="file"
                name="image1"
                onChange={fileChange}
                style={{ display: "none" }}
                accept="image/*"
              />
            </div>
          </div>
          <div className="imageBox col-lg-4 col-sm-12">
            <div>
              <label
                for={`${props.imageId}image2`}
                className="uploadPhotoContainer"
                style={{
                  backgroundImage: `url(${file2})`,
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
                id={`${props.imageId}image2`}
                type="file"
                name="image2"
                onChange={fileChange}
                style={{ display: "none" }}
                accept="image/*"
              />
            </div>
          </div>
          <div className="imageBox col-lg-4 col-sm-12 longBox">
            <div>
              <label
                for={`${props.imageId}image3`}
                className="uploadPhotoContainer longPhotoContainer"
                style={{
                  backgroundImage: `url(${file3})`,
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
                id={`${props.imageId}image3`}
                type="file"
                name="image3"
                onChange={fileChange}
                style={{ display: "none" }}
                accept="image/*"
              />
            </div>
          </div>
          <div className="imageBox col-lg-4 col-sm-12">
            <div>
              <label
                for={`${props.imageId}image4`}
                className="uploadPhotoContainer"
                style={{
                  backgroundImage: `url(${file4})`,
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
                id={`${props.imageId}image4`}
                type="file"
                name="image4"
                onChange={fileChange}
                style={{ display: "none" }}
                accept="image/*"
              />
            </div>
          </div>
          <div className="imageBox col-lg-4 col-sm-12">
            <div>
              <label
                for={`${props.imageId}image5`}
                className="uploadPhotoContainer"
                style={{
                  backgroundImage: `url(${file5})`,
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
                id={`${props.imageId}image5`}
                type="file"
                name="image5"
                onChange={fileChange}
                style={{ display: "none" }}
                accept="image/*"
              />
            </div>
          </div>
          <div className="imageBox col-sm-12 col-lg-8">
            <div>
              <label
                for={`${props.imageId}image6`}
                className="uploadPhotoContainer"
                style={{
                  backgroundImage: `url(${file6})`,
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
                id={`${props.imageId}image6`}
                type="file"
                name="image6"
                onChange={fileChange}
                style={{ display: "none" }}
                accept="image/*"
              />
            </div>
          </div>
          <div className="imageBox col-lg-12">
            <div>
              <label
                for={`${props.imageId}image7`}
                className="uploadPhotoContainer"
                style={{
                  backgroundImage: `url(${file7})`,
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
                id={`${props.imageId}image7`}
                type="file"
                name="image7"
                onChange={fileChange}
                style={{ display: "none" }}
                accept="image/*"
              />
            </div>
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
          // initialValues={{
          // remember: true,
          // }}
          initialValues={props.value}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {props.value ? (
            <FormItem hidden="true" label="Id" name="id" value={props.value} />
          ) : null}
          <FormItem
            label="Album Name"
            Textarea="Aextarea"
            height="70px"
            name="albumName"
          />
          <FormItem
            label="Detail"
            Textarea="Aextarea"
            height="150px"
            name="detail"
          />
          {/* <FormItem label='Position' Textarea='Aextarea' height="50px" name='position' /> */}

          <Form.Item
            wrapperCol={{
              span: 16,
            }}
          >
            <Button className="buttonNormal" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PhotoForm;
