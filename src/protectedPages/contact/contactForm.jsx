import React,{useState} from 'react';
import { Form, Input, Button, Table, message, Modal } from 'antd';
import FormItem from '../../component/formItem/formItem';
import { server} from'../../utils/fetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import ImagePlaceholder from '../../assests/imagePlaceholder.jpg';
import { useDispatch } from 'react-redux';

import { logoutProcessStarts } from "../../store/authStore/auth.action";
import { useSelector } from 'react-redux';
import { fetchingContactContentStarts } from '../../store/contactStore/contact.action';

const key = 'updatable';
const newServer = `${server}/publication/books`

const OurPartnersForm = (props)=>{
  
  const parsedToken = useSelector(state=>state.authStore.userToken)

  const dispatch = useDispatch()
  console.log(props.value)

    const onFinish = async(values)=>{

     
    //   if(!selectedFile){
    //     message.error({ content: 'Please select a book file',duration: 2 });
    //     return;

    // }
      message.loading({ content: 'Loading...', key, duration: 2  });

      const formData = new FormData()
      Object.keys(values).map(data=>{
        return formData.append(data,values[data])
      })
     


      try {
        const res = await fetch(`${newServer}`, {
          method: props.method, 
          body: formData,
          headers: { 'Accept': 'multipart/form-data' , 'authorization': `Bearer ${parsedToken}`}
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
        dispatch(fetchingContactContentStarts())

      } catch (error) {
        console.log(error)
        message.error({ content: 'The operation failed', key, duration: 2 });
      }         
  }
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return(
        <div className="row pageHeading">
                  <h3 style={{paddingLeft:"15px"}}>{props.title}</h3>
                  
        <div className="col-sm-12 col-md-12">
        <Form
         name="basic"
         labelCol={{
            span: 24,
        }}
        layout ='Vertical'
        initialValues={props.value}
        // initialValues={{
        // remember: true,
        // }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
          {
            props.value? <FormItem hidden='true' label='News Id' name='id'/> :null

          }
        <FormItem required="false" Textarea='TextArea' height="70px" label='Name' name='name' />
        <FormItem required="false" label='Email' name='email' Textarea='Textarea' height='70px' />
        <FormItem required="false" Textarea='TextArea' height="170px" label='Message' name='message' />
      


        {/* <FormItem label='Date' name='date' /> */}

        <Form.Item
        wrapperCol={{
          span: 16,
        }}
         >
        {/* <Button className="buttonNormal" htmlType="submit">
          {props.value? 'Update':'Create'}
        </Button> */}
         </Form.Item>
        </Form>
        </div>
       
        </div>
    )
}

export default OurPartnersForm;