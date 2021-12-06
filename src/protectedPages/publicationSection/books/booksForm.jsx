import React, { useState } from "react";
import { Form, Input, Button, Table, message, Modal } from "antd";
import FormItem from "../../../component/formItem/formItem";
import { server } from "../../../utils/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import ImagePlaceholder from "../../../assests/imagePlaceholder.jpg";
import { useDispatch, useSelector } from "react-redux";

import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import { fetchingPublicationContentStarts } from "../../../store/publicationStore/publication.action";
const key = "updatable";
const newServer = `${server}/publication/books`;

const OurPartnersForm = (props) => {
  const dispatch = useDispatch();
  const parsedToken = useSelector((state) => state.authStore.userToken);

  console.log(props.value);
  let imageHolder = props.value
    ? `${server}/${props.value.image}`
    : ImagePlaceholder;

  const [imageFile, updateImageFile] = useState(imageHolder);
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const [file, updateFile] = useState();
  const [selectedFile, setSelectedFile] = useState(null);

  const imageFileChange = (e) => {
    setSelectedImageFile(e.target);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        updateImageFile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
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
    console.log("values",values)

    if (!props.value) {
      if (!selectedImageFile) {
        message.error({ content: "Please select an image", duration: 2 });
        return;
      }
      if (!selectedFile) {
        message.error({ content: "Please select a book file", duration: 2 });
        return;
      }
      message.loading({ content: "Loading...", key, duration: 2 });

      const formData = new FormData();
      Object.keys(values).map((data) => {
        return formData.append(data, values[data]);
      });

      formData.append(selectedFile.name, selectedFile.files[0]);
      formData.append(selectedImageFile.name, selectedImageFile.files[0]);
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
        dispatch(fetchingPublicationContentStarts());
      } catch (error) {
        console.log(error);
        message.error({ content: "The operation failed", key, duration: 2 });
      }
    } else {
      if (!selectedImageFile && !props.value) {
        message.error({ content: "Please select an image", duration: 2 });
        return;
      }
      message.loading({ content: "Loading...", key, duration: 2 });

      const formData = new FormData();
      Object.keys(values).map((data) => {
        return formData.append(data, values[data]);
      });
      if (!selectedImageFile) {
        formData.append("filename", props.value.image);
      } else {
        formData.append(selectedImageFile.name, selectedImageFile.files[0]);
      }
      try {
        const res = await fetch(`${server}/publication/books/bookDetail`, {
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
        dispatch(fetchingPublicationContentStarts());
      } catch (error) {
        console.log(error);
        message.error({ content: "The operation failed", key, duration: 2 });
      }
    }
  };

  const onFinishBookFile = async (values) => {
    console.log("values",values)
    if (!selectedFile) {
      message.error({ content: "Please select a book file", duration: 2 });
      return;
    }
    message.loading({ content: "Loading...", key, duration: 2 });

    const formData = new FormData();
    Object.keys(values).map((data) => {
      return formData.append(data, values[data]);
    });
    formData.append(selectedFile.name, selectedFile.files[0]);
    try {
      const res = await fetch(`${server}/publication/books/bookFile`, {
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
      dispatch(fetchingPublicationContentStarts());
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
      <h3 style={{ paddingLeft: "15px" }}>{props.title}</h3>
      <div className="col-sm-12 col-md-12">
        <div className="imageBox">
          <h3>Featured Image</h3>
          <div>
            <label
              for={props.imageId}
              className="uploadPhotoContainer"
              style={{
                backgroundImage: `url(${imageFile})`,
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
              onChange={imageFileChange}
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
            Textarea="TextArea"
            height="70px"
            label="Book Title"
            name="title"
          />
          <FormItem
            label="Book Detail"
            name="detail"
            Textarea="Textarea"
            height="170px"
          />
          <FormItem
            Textarea="TextArea"
            height="70px"
            label="Book Author"
            name="writer"
          />
          <FormItem
            Textarea="TextArea"
            height="70px"
            label="Book Type"
            name="type"
          />
          <FormItem
            Textarea="TextArea"
            height="70px"
            label="Button Name"
            name="buttonName"
          />
          {!props.value ? (
            <input
              id="pdfFile"
              type="file"
              name="file"
              onChange={fileChange}
              style={{ marginBottom: "50px" }}
            />
          ) : null}

          {/* <FormItem label='Date' name='date' /> */}

          <Form.Item
            wrapperCol={{
              span: 16,
            }}
          >
            <Button className="buttonNormal" htmlType="submit">
              {props.value ? "Update Book Detail" : "Create"}
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
            onFinish={onFinishBookFile}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
           
              <FormItem hidden="true" label="Book Id" name="id" />

            <input
          
              id="updateFile"
              type="file"
              name="file"
              onChange={fileChange}
              style={{ margin: "40px 0px 30px" }}
            />

            {/* <FormItem label='Date' name='date' /> */}

            <Form.Item
              wrapperCol={{
                span: 16,
              }}
            >
              <Button className="buttonNormal" htmlType="submit">
                {props.value ? "Update Book File" : "Create"}
              </Button>
            </Form.Item>
          </Form>
        ) : null}
      </div>
    </div>
  );
};

export default OurPartnersForm;
