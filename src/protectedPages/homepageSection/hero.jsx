import React from "react";
import "./styles.css";
import { Form, Input, Button, message } from "antd";
import { server } from "../../utils/fetch";
import FormItem from "../../component/formItem/formItem";
import { useDispatch, useSelector } from "react-redux";
import { logoutProcessStarts } from "../../store/authStore/auth.action";
import {fetchingHomeContentStarts} from "../../store/homeStore/home.action"

const key = "updatable";

const fetchServer = `${server}/home/heroSection`;

const Hero = () => {
  const dispatch = useDispatch();
  const heroSection = useSelector(state=>state.homeStore.heroSection)

  const parsedToken = useSelector((state) => state.authStore.userToken);
  const onFinish = async (values) => {
    message.loading({ content: "Loading...", key });

    try {
      const res = await fetch(fetchServer, {
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
    message.error({
      content: "The operation failed " + errorInfo,
      duration: 2,
    });
  };

  return (
    <div className="row">
<div className="col-md-12 heroSection">
      <h2>Hero Section</h2>
      <Form
        name="basic"
        labelCol={{
          span: 24,
        }}
        layout="Vertical"
        wrapperCol={{
          span: 16,
        }}
        initialValues={heroSection}
        // values={heroSection}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormItem
          label="Heading"
          Textarea="Aextarea"
          height="70px"
          name="heading"
        />
        <FormItem
          label="Sub Heading"
          Textarea="Aextarea"
          height="70px"
          name="subHeading"
        />
        <FormItem
          label="Button Name"
          Textarea="Aextarea"
          height="70px"
          name="buttonName"
        />

        <Form.Item>
          <Button className="buttonNormal" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
    
  );
};

export default Hero;
