import React from "react";
import style from "../Pages/style.css";
import { Container, Form } from "react-bootstrap";
const ContactUs = () => {
  return (
    <div style={{  margin:"0px 0px", paddingBottom:"40px", minHeight:"auto"}} className=" section contactImage">
      <Container>
      <div
        id="contact"
        style={{ }}
        className="text-center .col-sm-12 .col-md-6 .offset-md-3"
      >
        <h2 style={{ color: "#f6b745" }}>Get in touch</h2>
        <p style={{ color: "#ffffff", fontSize: "20px", marginBottom:"50px" }}>
          Feel free to drop us a line below
        </p>
        <Form
          className="container-sm"
          style={{ width:"80%"}}
        >
          <div className="formPadding">
            <label>Name</label>
          <input
            type="text"
            class="form-control"
            id="exapleName"
            aria-describedby="NameHelp"
            style={{background:"rgba(255,255,255,0.4)",
              color: "black"}}
          ></input>
          </div>
        <div className="formPadding">
          <label>Email</label>
        <input
            type="email"
            class="form-control mt-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{background:"rgba(255,255,255,0.4)",
              color: "black"}}
          ></input>
        </div>
         <div className="formPadding">
           <label>Message</label>
         <textarea
            class="form-control mt-3"
            id="exampleFormControlTextarea3"
            rows="7"
            style={{background:"rgba(255,255,255,0.4)",
              color: "black"}}
          ></textarea>
         </div>
          
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
       
      </div>
      </Container>
     
    </div>
  );
};
export default ContactUs;
