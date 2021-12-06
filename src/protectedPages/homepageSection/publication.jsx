import React from "react";
import "./styles.css";
import { Form, Input, Button, Checkbox, message } from "antd";
import FormItem from "../../component/formItem/formItem";
import ImageSend from "../../component/imageSend/imageSend";
import { server } from "../../utils/fetch";
import { useDispatch, useSelector } from "react-redux";
import { logoutProcessStarts } from "../../store/authStore/auth.action";
import {fetchingHomeContentStarts} from "../../store/homeStore/home.action"

const newServer = `${server}/home/publicationImageSection`;

const AboutUs = () => {
  const dispatch = useDispatch();
  const publicationSection = useSelector(state=>state.homeStore.publicationSection)

  const parsedToken = useSelector((state) => state.authStore.userToken);
  const onFinish = async (values) => {
    const key = "updatable";
    message.loading({ content: "Loading...", key });
    try {
      const res = await fetch(`${server}/home/publicationTextSection`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'authorization': `Bearer ${parsedToken}`
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.hasOwnProperty("user")) {
        message.error({ content: data.message, key, duration: 2 });
        return dispatch(logoutProcessStarts(data.user));
      }
      console.log(data);
      if (data) {
        message.success({ content: data.message, key, duration: 2 });
        dispatch(fetchingHomeContentStarts())

      }
    } catch (error) {
      console.log(error);
      message.error({ content: "The operation failed", key, duration: 2 });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="row publicationSection">
      <div className="col-md-12 ">
        <h2>Publication Section</h2>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Form
              name="basic"
              labelCol={{
                span: 24,
              }}
              layout="Vertical"
              //   wrapperCol={{
              //     span: 16,
              //   }}
              initialValues={publicationSection}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <FormItem Textarea='Aextarea' height="70px" label="Top Title" name="topTitle" />
              <FormItem Textarea='Aextarea' height="70px" label="Heading" name="heading" />
              <FormItem
                label="Detail"
                name="detail"
                Textarea="Textarea"
                height="120px"
              />
              <FormItem Textarea='Aextarea' height="70px" label="Button Name" name="buttonName" />
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

          <div className="col-sm-12 col-md-6">
            <div className="imageBox">
              <h3>Publication</h3>
              <ImageSend
              value={publicationSection? publicationSection.image : null}
                id="publication-image"
                name="image"
                newServer={newServer}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
