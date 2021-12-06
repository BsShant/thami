import React from "react";
import "./styles.css";
import { Form, Input, Button, message } from "antd";
import { server } from "../../utils/fetch";
import FormItem from "../../component/formItem/formItem";
import { useDispatch, useSelector } from "react-redux";
import { logoutProcessStarts } from "../../store/authStore/auth.action";
import { fetchingFooterContentStarts } from "../../store/footerStore/footer.action";

const key = "updatable";

const fetchServer = `${server}/footer/aboutUs`;

const AboutUs = () => {
  const dispatch = useDispatch();
  const aboutUsSection = useSelector(state=>state.footerStore.aboutUsSection)

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
        dispatch(fetchingFooterContentStarts())

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
      <h3>About US Section</h3>
      <Form
        name="basic"
        labelCol={{
          span: 24,
        }}
        layout="Vertical"
        wrapperCol={{
          span: 16,
        }}
        initialValues={aboutUsSection}
        // values={heroSection}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormItem
          label="Detail"
          Textarea="Aextarea"
          height="150px"
          name="detail"
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

export default AboutUs;
