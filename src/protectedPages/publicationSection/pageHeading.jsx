import React from 'react';
import './styles.css';
import { Form, Input, Button, Checkbox, message } from 'antd';
import FormItem from '../../component/formItem/formItem';
import ImageSend from "../../component/imageSend/imageSend";
import { server} from'../../utils/fetch'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {fetchingPublicationContentStarts} from "../../store/publicationStore/publication.action"

import { logoutProcessStarts } from "../../store/authStore/auth.action";

const PageHeading = (props)=>{
  const parsedToken = useSelector(state=>state.authStore.userToken)

  const dispatch  = useDispatch()
  const textServer = `${server}/${props.headingServer}`
const imageServer = `${server}/${props.imageServer}`
    const onFinish = async(values) => {
        const key = 'updatable';
        message.loading({ content: 'Loading...', key });
        try {
          const res = await fetch(`${textServer}`, {
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
            dispatch(fetchingPublicationContentStarts())

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
        <div className="row" style={{marginTop:"70px", marginBottom:"70px"}}>
        <div className="col-sm-12 col-md-6">
        <h3>Page Heading</h3>
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
        <FormItem required="false" Textarea='TextArea' height="70px" label='Page Heading' name='pageHeading' />
        <FormItem  required="false" Textarea='TextArea' height="70px"label='Page Sub Heading' name='pageSubHeading' />
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
          <h3>Page Heading Image</h3>
        <ImageSend 
                value={props.value? props.value.image : null}
        id={imageServer} name='image' newServer={imageServer}/>
        </div>
        </div>
        </div>
    )
}
export default PageHeading;