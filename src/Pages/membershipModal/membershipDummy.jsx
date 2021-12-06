import React from "react";
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import esewa from "../../assests/esewa_logo.png";
import { Form, Input, Button, message } from "antd";
import GoToTop from "../goToTop";
import { server } from "../../utils/fetch";
const Membership = () => {
  const key = "updatable";
  const newServer = `${server}/member/registration`;

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
    <div>
      <div style={{}}>
        <Container>
          <div
            className="row"
            style={{ borderBottom: "1px solid grey", margin: "100px 0" }}
          >
            <div className="col">
              <h2>Membership Application</h2>
              <p>To apply for membership please fill in the form</p>
            </div>
          </div>
          <Form
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="row" style={{ paddingBottom: "100px" }}>
              <div className="col">
                {/* name */}
                <div className="row inputField">
                  <div className="inputLabel col-md-4 col-sm-12 col-xs-12">
                    <label for="name">
                      <h3>Name</h3>{" "}
                    </label>
                  </div>
                  <div className="inputContainer col-md-8 col-sm-12 col-xs-12 inputBox">
                    <Form.Item
                      name={["name"]}
                      rules={[{ required: true, message: "Name is required!" }]}
                    >
                      <Input style={{ width: "100%" }} id="name" />
                    </Form.Item>
                    <p className="inputBelow">Name</p>
                  </div>
                </div>

                {/* addrress */}
                <div className="row inputField">
                  <div className="inputLabel col-md-4 col-sm-12 col-xs-12">
                    <label for="city">
                      <h3>Address</h3>
                    </label>
                  </div>
                  <div className="col-md-8 col-sm-12 col-xs-12 inputBox">
                    <div style={{ display: "flex" }} className="row">
                      <div className="inputContainer col-md-6 col-sm-12 col-xs-12 col-lg-6">
                        <Form.Item
                          name={["city"]}
                          rules={[
                            { required: true, message: "City is required!" },
                          ]}
                        >
                          <Input style={{ width: "100%" }} id="city" />
                        </Form.Item>
                        <p className="inputBelow">City</p>
                      </div>

                      <div className="inputContainer col-md-6 col-sm-12 col-xs-12 col-lg-6">
                        <Form.Item
                          name={["country"]}
                          rules={[
                            { required: true, message: "Country is required!" },
                          ]}
                        >
                          <Input style={{ width: "100%" }} id="country" />
                        </Form.Item>
                        <p className="inputBelow">Country</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* email */}
                <div className="row inputField">
                  <div className="inputLabel col-md-4 col-sm-12 col-xs-12">
                    <label for="email">
                      <h3>Email</h3>
                    </label>
                  </div>
                  <div className="inputContainer col-md-8 col-sm-12 col-xs-12 inputBox">
                    <Form.Item
                      name={["email"]}
                      rules={[
                        { required: true, message: "Email is required!" },
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                      ]}
                    >
                      <Input style={{ width: "100%" }} id="email" />
                    </Form.Item>
                    <p className="inputBelow">email@examplecom</p>
                  </div>
                </div>

                {/* phone */}
                <div className="row inputField">
                  <div className="inputLabel col-md-4 col-sm-12 col-xs-12">
                    <label for="phone">
                      <h3>Contact Number</h3>
                    </label>
                  </div>
                  <div className="inputContainer col-md-8 col-sm-12 col-xs-12 inputBox">
                    <Form.Item
                      name={["phone"]}
                      rules={[
                        {
                          required: true,
                          message: "Contact Number is required!",
                        },
                      ]}
                    >
                      <Input style={{ width: "100%" }} id="phone" />
                    </Form.Item>
                    <p className="inputBelow">Contact Number</p>
                  </div>
                </div>

                {/* message */}
                <div className="row inputField">
                  <div className="inputLabel col-md-4 col-sm-12 col-xs-12">
                    <label for="message">
                      <h3>Message</h3>
                    </label>
                  </div>
                  <div className="inputContainer col-md-8 col-sm-12 col-xs-12 inputBox">
                    <Form.Item
                      name="message"
                      rules={[
                        { required: true, message: "Message is required!" },
                      ]}
                    >
                      <Input.TextArea
                        style={{ width: "100%", height: "120px" }}
                        id="message"
                      />
                    </Form.Item>
                    <p className="inputBelow" style={{ top: "120px" }}>
                      Message
                    </p>
                  </div>

                  {/* <div className="inputContainer col-md-8 col-sm-12 col-xs-12 inputBox" style={{paddingRight:"0"}}>
                            
                        <textarea type="textarea" rows="4" cols="50" id="message" style={{width:"100%"}}></textarea>
                        <p className="inputBelow">Message</p>

                    </div> */}
                </div>
                <div className="row">
                  <div
                    className="col-12 modalButton"
                    style={{ paddingRight: "0" }}
                  >
                    <Button className="modalSubmitButton" htmlType="submit">
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Container>
      </div>
      <GoToTop />
    </div>
  );
};

export default Membership;
