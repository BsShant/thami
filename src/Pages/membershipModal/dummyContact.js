import React from "react";
import style from "../../Pages/style.css";
import { Container } from "react-bootstrap";
import { Form, Input, Button, Checkbox } from 'antd';

const ContactUs = (props) => {
  return (
    // <div style={{  margin:"0px 0px", paddingBottom:"40px", minHeight:"auto"}} className=" section contactImage">
    //   <Container>
    //   <div
    //     id="contact"
    //     style={{ }}
    //     className="text-center .col-sm-12 .col-md-6 .offset-md-3"
    //   >
    //     <h2 style={{ color: "#f6b745" }}>Get in touch</h2>
    //     <p style={{ color: "#ffffff", fontSize: "20px", marginBottom:"50px" }}>
    //       Feel free to drop us a line below
    //     </p>
    //     <Form
    //      name="basic"
    //      labelCol={{
    //         span: 24,
    //     }}
    //     layout ='Vertical'
    //     // initialValues={props.value}
    //     initialValues={{
    //     remember: true,
    //     }}
    //     onFinish={onFinish}
    //     onFinishFailed={onFinishFailed}
    //     autoComplete="off"
    //     >
        <Form.Item
        label={props.label}
        name={props.name}
        hidden={props.hidden}
        rules={[
          {
            required: props.required ? false: true,
            message: `Please input your ${props.label}!`,
          },
         
          {
            type:  props.email? 'email':'',
            message: 'The input is not valid E-mail!',
          }
        ]}
        style={{marginBottom:`${props.label==='Message'?'50px':'20px'}`}}
        // initialValue={props.value}
        // initialValue={value}
        
      >
        {props.Textarea?
        <Input.TextArea style={{height:`${props.height? props.height:'auto'}`, borderRadius:"5px", background:"rgba(255,255,255,0.4)",color: "black"}}/>
        :
          <Input style={{height:`${props.height? props.height:'auto'}`,background:"rgba(255,255,255,0.4)",
          color: "black"}} />
        }
        </Form.Item>
        // </Form>
        /* <Form
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
            style={{}}
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
        */
    //   </div>
    //   </Container>
     
    // </div>
  );
};
export default ContactUs;
