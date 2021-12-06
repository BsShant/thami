import React from 'react';
import './styles.css';
import { Form, Input, Button, Checkbox, message } from 'antd';
import FormItem from '../../component/formItem/formItem';
import {server } from '../../utils/fetch';
import { useDispatch, useSelector } from 'react-redux';
import { logoutProcessStarts } from "../../store/authStore/auth.action";
import {fetchingHomeContentStarts} from "../../store/homeStore/home.action"

const Events = ()=>{
  const dispatch = useDispatch()
  const ourEventSection = useSelector(state=>state.homeStore.ourEventSection)
  const parsedToken = useSelector(state=>state.authStore.userToken)

    const onHeaderFinish = async(values) => {

        const key = 'updatable';
        message.loading({ content: 'Loading...', key });
        try {
          const res = await fetch(`${server}/home/ourEventHeadingSection`, {
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
          const res = await fetch(`${server}/home/ourEventCardSection`, {
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
  
          }
          
        } catch (error) {
          console.log(error)
          message.error({ content: 'The operation failed', key, duration: 2 });
  
        }                
    };
      
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error({ content: 'The operation failed' + errorInfo,duration: 2 });

      };
     
    
    return(
        <div className="row eventsSection">
        <div className="col-md-12 ">
        <h2>Our Events Section</h2>
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
        initialValues={ourEventSection}
        onFinish={onHeaderFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <FormItem label='Top Title' Textarea='Aextarea' height="70px" name='topTitle' />
        <FormItem label='Heading' Textarea='Aextarea' height="70px" name='heading' />
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
          <h3>News Card</h3>
      <Form
         name="basic"
         labelCol={{
            span: 24,
        }}
        layout ='Vertical'
        //   wrapperCol={{
        //     span: 16,
        //   }}
        initialValues={ourEventSection}
        onFinish={onTextFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
               <FormItem label='News Card Name' Textarea='Aextarea' height="70px" name='newsCardName' />
        <FormItem label='News Card Detail' Textarea='Aextarea' height="170px" name='newsCardDetail' Textarea='Textarea' height='120px' />
        <FormItem label='News Button Name' Textarea='Aextarea' height="70px" name='newsButtonName' />
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
          <h3>Blogs Card</h3>
      <Form
         name="basic"
         labelCol={{
            span: 24,
        }}
        layout ='Vertical'
        //   wrapperCol={{
        //     span: 16,
        //   }}
        initialValues={ourEventSection}

        onFinish={onTextFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
               <FormItem label='Blogs Card Name' Textarea='Aextarea' height="70px" name='blogsCardName' />
        <FormItem label='Blogs Card Detail' Textarea='Aextarea' height="170px" name='blogsCardDetail' Textarea='Textarea' height='120px' />
        <FormItem label='Blogs Button Name' Textarea='Aextarea' height="70px" name='blogsButtonName' />
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
          <h3>Our Articles Card</h3>
      <Form
         name="basic"
         labelCol={{
            span: 24,
        }}
        layout ='Vertical'
        //   wrapperCol={{
        //     span: 16,
        //   }}
        initialValues={ourEventSection}

        onFinish={onTextFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
               <FormItem label='Our Articles Card Name' Textarea='Aextarea' height="70px" name='ourArticlesCardName' />
        <FormItem label='Our Articles Card Detail' Textarea='Aextarea' height="170px" name='ourArticlesCardDetail' Textarea='Textarea' height='120px' />
        <FormItem label='Our Articles Button Name' Textarea='Aextarea' height="70px" name='ourArticlesButtonName' />
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

export default Events;