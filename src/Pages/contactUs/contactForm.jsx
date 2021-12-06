import React, { createRef } from "react";
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import esewa from "../../assests/esewa_logo.png";
import ime from "../../assests/ime-red.png";
import khalti from "../../assests/khalti.jpeg";
import global from "../../assests/global.png";
import GoToTop from "../goToTop";
import ContactForm from "../dummyContact";
import { server } from "../../utils/fetch";
import parsedToken from "../../utils/fetch";
import { Form, Input, Button, Checkbox, message } from "antd";
import { useSelector } from "react-redux";

const key = "updatable";
const newServer = `${server}/contactUs/contact`;
const formRef = createRef();

const ContactUs = (props) => {
  const contactHeadingSection = useSelector(
    (state) => state.contactStore.contactHeadingSection
  );

  const onFinish = async (values) => {
    console.log(values);
    message.loading({ content: "Loading...", key, duration: 2 });
    try {
      const resValue = await JSON.stringify(values);
      const res = await fetch(`${newServer}`, {
        method: "POST",
        body: resValue,
        headers: { "Content-Type": "application/json" },
      });
      if(res.status===200||201){
        formRef.current.resetFields();
            }
      const data = await res.json();

      console.log(data);
      if (data) {
        message.success({ content: data.message, key, duration: 2 });
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
    <div
      style={{ margin: "0px 0px", paddingBottom: "40px", minHeight: "auto",  backgroundColor:`${props.background? props.background : '#f6b745'}`
    }}
      className=" section contactImage"
    >
      <Container>
        <div
          id="contact"
          style={{}}
          className="text-center .col-sm-12 .col-md-6 .offset-md-3"
        >
          <h3 style={{ color: props.frontContact? "#f6b745":"black" }}>
            {contactHeadingSection ? contactHeadingSection.topTitle : null}
          </h3>
          {props.frontContact? null : 
          <h2 style={{ color: "#ffffff" }}>
            {contactHeadingSection ? contactHeadingSection.heading : null}
          </h2>
}
{props.frontContact? null : 

          <p
            style={{ color: "#ffffff", fontSize: "20px", marginBottom: "50px" }}
          >
            {/* {contactHeadingSection? contactHeadingSection.detail:null} */}
            Feel free to drop us a line below
          </p>}
          <div
            className="contactForm"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form
              name="basic"
              labelCol={{
                span: 24,
              }}
              layout="Vertical"
              // initialValues={props.value}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ width: "80%" }}
              ref={formRef}
            >
              <ContactForm {...props} name="name" label="Name" />
              <ContactForm {...props} name="email" label="Email" email="email" />
              <ContactForm
                name="message"
                height="150px"
                Textarea="Textarea"
                label="Message"
                {...props}
              />
              <Button
                className={`${props.sendButton? 'sendButton' : 'sendButtonReverse'}`}
                htmlType="submit"
                style={{ width: "100px !important" }}
              >
                {/* {props.value? 'Update':'Create'} */} Send It Now
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ContactUs;
