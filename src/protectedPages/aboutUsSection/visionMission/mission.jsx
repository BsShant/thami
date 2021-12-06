import React from 'react';
import '../styles.css';
import { Form, Input, Button, Checkbox, message } from 'antd';
import FormItem from '../../../component/formItem/formItem';
import PageHeading from "../pageHeading";
import ImageSend from "../../../component/imageSend/imageSend";
import {server} from '../../../utils/fetch';
import { useDispatch } from 'react-redux';
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import {fetchingAboutContentStarts} from "../../../store/aboutStore/about.action"

import { useSelector } from 'react-redux';
const newServer=`${server}/aboutUs/missionImageSection`
const Mission = ()=>{
  const dispatch = useDispatch()
  const missionSection = useSelector(state=>state.aboutStore.missionSection)

  const parsedToken = useSelector(state=>state.authStore.userToken)


    const onFinish = async(values) => {
        const key = 'updatable';
        message.loading({ content: 'Loading...', key });
        try {
          const res = await fetch(`${server}/aboutUs/missionTextSection`, {
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json','authorization': `Bearer ${parsedToken}` },
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
        <div className="col-md-12" style={{marginBottom:"70px"}}>
        <h3>Our Mission Section</h3>
        <div className="row">
        <div className="col-sm-12 col-md-6">
        <Form
         name="basic"
         labelCol={{
            span: 24,
        }}
        layout ='Vertical'
        //   wrapperCol={{
        //     span: 16,
        //   }}
        initialValues={missionSection}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
       
        <FormItem label='Top Title' Textarea='Aextarea' height="70px"  name='topTitle' />
        {/* <FormItem label='Heading' Textarea='Aextarea' height="70px"  name='heading' /> */}
        <FormItem label='Detail' name='detail' Textarea='Textarea' height='170px' />
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
        <ImageSend value={missionSection? missionSection.image:null} id='mission-image' name='image' newServer={newServer}/>

        </div>
            </div>
            </div>

    </div>
    )
}

export default Mission;