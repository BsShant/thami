import React from 'react';
import './styles.css';
import { Form, Input, Button, Checkbox, message } from 'antd';
import FormItem from '../../component/formItem/formItem';
import ImageSend from "../../component/imageSend/imageSend";
import {server} from '../../utils/fetch';
import { useDispatch, useSelector } from 'react-redux';
import { logoutProcessStarts } from "../../store/authStore/auth.action";
import {fetchingHomeContentStarts} from "../../store/homeStore/home.action"

const key = 'updatable';
const newServer = `${server}/home/aboutUsImageSection`
const AboutUs = ()=>{
  const parsedToken = useSelector(state=>state.authStore.userToken)
  const aboutUsSection = useSelector(state=>state.homeStore.aboutUsSection)

  const dispatch = useDispatch()

    const onFinish = async(values) => {
      message.loading({ content: 'Loading...', key });

      try {
        const res = await fetch(`${server}/home/aboutUsTextSection`, {
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
        message.error({ content: 'The operation failed'+errorInfo, duration: 2 });

      };
     
    
    return(
        <div className="row aboutUsSection">
        <div className="col-md-12 ">
        <h2>About Us Section</h2>
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
        initialValues={aboutUsSection}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
       
        <FormItem label='Top Title' Textarea='Aextarea' height="70px" name='topTitle' />
        <FormItem label='Heading' Textarea='Aextarea' height="70px" name='heading' />
        <FormItem label='Detail' name='detail' Textarea='Textarea' height='170px' />
        <FormItem label='Button Name' Textarea='Aextarea' height="70px" name='buttonName' />
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
        <div className="imageBefore">
          <h3>Image Before</h3>
        <ImageSend id='image-before' 
                height="445px"
        value={aboutUsSection? aboutUsSection.imageBefore : null}
        name='imageBefore' 
        newServer={newServer}/>

        </div>
        <div className="imageAfter">
          <h3>Image After</h3>
        <ImageSend id='image-after' 
        name='imageAfter' 
        height="445px"
        value={aboutUsSection? aboutUsSection.imageAfter : null}
        newServer={newServer}/>

        </div>

            </div>
            </div>

    </div>
    </div>
            

    )
}

export default AboutUs;