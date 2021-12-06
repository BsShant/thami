import React from 'react';
import '../styles.css';
import { Form, Input, Button, Checkbox, message } from 'antd';
import FormItem from '../../../component/formItem/formItem';
import PageHeading from "../pageHeading";
import ImageSend from "../../../component/imageSend/imageSend";
import OurHistory from './ourHistory';
import {server} from '../../../utils/fetch';
import { useDispatch } from 'react-redux';
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import { useSelector } from 'react-redux';
import {fetchingAboutContentStarts} from "../../../store/aboutStore/about.action"
import GoTOTop from '../../../Pages/goToTop';
const newServer=`${server}/aboutUs/associateImage`
const Associate = ()=>{
  const dispatch = useDispatch()
  const parsedToken = useSelector(state=>state.authStore.userToken)
  const associateSection = useSelector(state=>state.aboutStore.associateSection)

    const onFinish = async(values) => {
      console.log(values)
        const key = 'updatable';
        message.loading({ content: 'Loading...', key });
        try {
          const res = await fetch(`${server}/aboutUs/associateText`, {
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
        <div className="row" style={{marginTop:"70px"}}>
        
        <div className="col-md-12 " style={{marginBottom:"70px"}}>
        <h3>Associate Section</h3>
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
        initialValues={associateSection}

        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
       
        <FormItem label='Title' Textarea='Aextarea' height="70px"  name='title' />
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
        <ImageSend id='associateImage' 
        name='image'
        value={associateSection? associateSection.image : null}
        newServer={newServer}/>

        </div>
            </div>
            </div>

    </div>
   
    </div>
    )
}

export default Associate;