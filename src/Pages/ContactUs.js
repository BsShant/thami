import React from "react";
import { Container, Form } from "react-bootstrap";
const ContactUs = () => {
  return (
    <React.Fragment>
      <div
        id="contact"
        style={{ background: "#000000", padding: "90px" }}
        className="text-center .col-sm-12 .col-md-6 .offset-md-3"
      >
        <h1 style={{ color: "#f6b745" }}>Get in touch</h1>
        <p style={{ color: "#ffffff", fontSize: "20px" }}>
          Feel free to drop us a line below
        </p>
        <Form
          className="container-sm"
          style={{ paddingLeft: "120px", paddingRight: "120px" }}
        >
          <input
            type="text"
            class="form-control"
            id="exapleName"
            aria-describedby="NameHelp"
            placeholder="Enter a name"
          ></input>
          <input
            type="email"
            class="form-control mt-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
          <textarea
            class="form-control mt-3"
            id="exampleFormControlTextarea3"
            rows="7"
            placeholder="Write your message here."
          ></textarea>
          <button
            className="mt-3 p-2"
            style={{
              width: "100%",
              border: "none",
              background: "#f6b745",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Send It Now
          </button>
        </Form>
        <hr
          className="col-md-12 mx-auto mb-5"
          style={{ padding: "0.01rem", background: "#FFFFFF" }}
        ></hr>
      </div>
    </React.Fragment>
  );
};
export default ContactUs;
