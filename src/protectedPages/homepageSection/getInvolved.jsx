import React from 'react';
import './styles.css';
import { Form, Input, Button, Checkbox, message } from 'antd';
import FormItem from '../../component/formItem/formItem';
import ImageSend from "../../component/imageSend/imageSend";
import {server } from '../../utils/fetch';
import { useDispatch, useSelector } from 'react-redux';
import { logoutProcessStarts } from "../../store/authStore/auth.action";
import {fetchingHomeContentStarts} from "../../store/homeStore/home.action"

const newServer = `${server}/home/getInvolvedCardImageSection`


const GetInvolved = ()=>{
  const dispatch = useDispatch()
  const getInvolvedSection = useSelector(state=>state.homeStore.getInvolvedSection)
  const parsedToken = useSelector(state=>state.authStore.userToken)
    const onHeaderFinish = async(values) => {
        const key = 'updatable';
        message.loading({ content: 'Loading...', key });
        try {
          const res = await fetch(`${server}/home/getInvolvedHeadingSection`, {
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
            dispatch(fetchingHomeContentStarts())

          }
  
        } catch (error) {
          console.log(error)
          message.error({ content: 'The operation failed', key, duration: 2 });
  
        }           
    };
    const onTextFinish = async(values) => {
        const key = 'updatable';
        message.loading({ content: 'Loading...', key });
        try {
          const res = await fetch(`${server}/home/getInvolvedCardTextSection`, {
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
            dispatch(fetchingHomeContentStarts())

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
        <div className="row getInvolvedSection">
        <div className="col-md-12 ">
        <h2>Get Involved Section</h2>
        <div className="row">
        <div className="col-md-6 col-sm-12">
        <Form
         name="basic"
         labelCol={{
            span: 24,
        }}
        layout ='Vertical'
        //   wrapperCol={{
        //     span: 16,
        //   }}
        initialValues={getInvolvedSection}
        onFinish={onHeaderFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <FormItem Textarea='Aextarea' height="70px" label='Top Title' name='topTitle' />
        <FormItem Textarea='Aextarea' height="70px" label='Heading' name='heading' />
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
      
      <div className="row">
      <div className="col-sm-12 col-md-4">
          <h3>Support Card</h3>
          <ImageSend id='support-image' name='supportCardImage' 
                    value={getInvolvedSection? getInvolvedSection.supportCardImage : null}
          newServer={newServer}/>

      <Form
         name="basic"
         labelCol={{
            span: 24,
        }}
        layout ='Vertical'
        //   wrapperCol={{
        //     span: 16,
        //   }}
        initialValues={getInvolvedSection}

        onFinish={onTextFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
               <FormItem Textarea='Aextarea' height="70px" label='Support Card Name' name='supportCardName' />
        <FormItem  label='Support Card Detail' name='supportCardDetail' Textarea='Textarea' height='120px' />
        <FormItem Textarea='Aextarea' height="70px" label='Support Button Name' name='supportButtonName' />
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
       <div className="col-sm-12 col-md-4">
          <h3>Join Card</h3>
          <ImageSend id='join-image'
           name='joinCardImage'
           value={getInvolvedSection? getInvolvedSection.joinCardImage : null}
            newServer={newServer}/>

      <Form
         name="basic"
         labelCol={{
            span: 24,
        }}
        layout ='Vertical'
        //   wrapperCol={{
        //     span: 16,
        //   }}
        initialValues={getInvolvedSection}

        onFinish={onTextFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
               <FormItem Textarea='Aextarea' height="70px" label='Join Card Name' name='joinCardName' />
        <FormItem label='Join Card Detail' name='joinCardDetail' Textarea='Textarea' height='120px' />
        <FormItem Textarea='Aextarea' height="70px" label='Join Button Name' name='joinButtonName' />
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
       <div className="col-sm-12 col-md-4">
          <h3>Sponser Card</h3>
          <ImageSend id='sponser-image' 
          name='sponserCardImage' 
          value={getInvolvedSection? getInvolvedSection.sponserCardImage : null}
          newServer={newServer}/>
      <Form
         name="basic"
         labelCol={{
            span: 24,
        }}
        layout ='Vertical'
        //   wrapperCol={{
        //     span: 16,
        //   }}
        initialValues={getInvolvedSection}

        onFinish={onTextFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
               <FormItem Textarea='Aextarea' height="70px" label='Sponser Card Name' name='sponserCardName' />
        <FormItem label='Sponser Card Detail' name='sponserCardDetail' Textarea='Textarea' height='120px' />
        <FormItem Textarea='Aextarea' height="70px" label='Sponser Button Name' name='sponserButtonName' />
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
        

    </div>
    </div>
            

    )
}

export default GetInvolved;