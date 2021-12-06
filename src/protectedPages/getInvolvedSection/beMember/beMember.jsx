import React from 'react';
import '../styles.css';
import { Form, Input, Button, Checkbox, message } from 'antd';
import FormItem from '../../../component/formItem/formItem';
import PageHeading from "../pageHeading";
import ImageSend from "../../../component/imageSend/imageSend";
import {server} from '../../../utils/fetch';
import { useDispatch, useSelector } from 'react-redux';
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import GoTOTop from '../../../Pages/goToTop';
import {fetchingGetInvolvedContentStarts} from "../../../store/getInvolvedStore/getInvolved.action"

const newServer=`${server}/getInvolved/memberImageSection`


const OurStory = ()=>{
  const beMemberSection = useSelector(state=>state.getInvolvedStore.beMemberSection)
  const beMemberPageHeading = useSelector(state=>state.getInvolvedStore.beMemberPageHeading)

  const parsedToken = useSelector(state=>state.authStore.userToken)

  const dispatch = useDispatch()
    const onFinish = async(values) => {
        const key = 'updatable';
        message.loading({ content: 'Loading...', key });
        try {
          const res = await fetch(`${server}/getInvolved/memberTextSection`, {
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
            dispatch(fetchingGetInvolvedContentStarts())

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
        <div className="row adminPage">
        <div className="col-md-12 " style={{marginBottom:"70px"}}>
        <h2>Be Member Page</h2>
        <PageHeading value={beMemberPageHeading} headingServer='getInvolved/memberPageHeader' imageServer='getInvolved/memberPageImage' />
        </div>
        <div className="col-md-12 " style={{marginBottom:"70px"}}>
        <h3>Be Member section</h3>
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
        initialValues={beMemberSection}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
       
        <FormItem label='Top Title' Textarea='Aextarea' height="70px" name='topTitle' />
        <FormItem label='Heading' Textarea='Aextarea' height="70px" name='heading' />
        <FormItem label='Detail' name='detail' Textarea='Textarea' height='200px' />
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
        <div className="imageBox">
          <h3>Be Member Image</h3>
        <ImageSend
        value={beMemberSection? beMemberSection.image : null}
         id='bemember-image' name='image' newServer={newServer}/>

        </div>
            </div>
            </div>

    </div>
    <GoTOTop />
    </div>
    )
}

export default OurStory;