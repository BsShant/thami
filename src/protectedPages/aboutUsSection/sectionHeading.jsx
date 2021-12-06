import React from 'react';
import './styles.css';
import { Form, Input, Button, Checkbox, message } from 'antd';
import FormItem from '../../component/formItem/formItem';
import ImageSend from "../../component/imageSend/imageSend";
import {server} from '../../utils/fetch';
import { useDispatch } from 'react-redux';
import { logoutProcessStarts } from "../../store/authStore/auth.action";
import {fetchingAboutContentStarts} from "../../store/aboutStore/about.action"

import { useSelector } from 'react-redux';
const SectionHeading = (props)=>{
  const textServer = `${server}/${props.sectionServer}`
  const dispatch = useDispatch()
  const parsedToken = useSelector(state=>state.authStore.userToken)

    const onFinish = async(values) => {
        const key = 'updatable';
        message.loading({ content: 'Loading...', key });
        try {
          const res = await fetch(`${textServer}`, {
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json','authorization': `Bearer ${parsedToken}`  },
            body: JSON.stringify(values) 
          });   
          const data = await res.json() 
          if(data.hasOwnProperty('user')){
            message.error({ content: data.message, key, duration: 2 });
            return dispatch(logoutProcessStarts(data.user))
    
          }
          console.log(data)
          if(data){
            message.success({ content: data.message, key, duration: 2 });
            dispatch(fetchingAboutContentStarts())

          }
  
        } catch (error) {
          console.log(error)
          message.error({ content: 'The operation failed', key, duration: 2 });
  
        }           
      };
      
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
     
    
    return(
      <div className="row">
      <div className="col-12 col-md-6">
      <h3>{props.title}</h3>
      <Form
   name="basic"
   labelCol={{
      span: 24,
  }}
  layout ='Vertical'
  initialValues={props.value}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  autoComplete="off"
  >
  <FormItem required='false'  label='Top Title' Textarea='Aextarea' height="70px"  name='topTitle' />
  <FormItem required='false' Textarea='Aextarea' height="70px"  label='Heading' name='heading' />
  <FormItem required='false' Textarea='Aextarea' height="170px"  label='Detail' name='detail' />
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

    )
}
export default SectionHeading;