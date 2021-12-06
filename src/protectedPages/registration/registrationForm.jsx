import React,{useState} from 'react';
import { Form, Input, Button, Table, message, Modal } from 'antd';
import FormItem from '../../component/formItem/formItem';
import { server} from'../../utils/fetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import ImagePlaceholder from '../../assests/imagePlaceholder.jpg';
import { useDispatch,useSelector } from 'react-redux';

import { logoutProcessStarts } from "../../store/authStore/auth.action";
import { fetchingMembershipContentStarts } from '../../store/membershipStore/membership.action';
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
        dispatch(fetchingMembershipContentStarts())

      } catch (error) {
        console.log(error)
        message.error({ content: 'The operation failed', key, duration: 2 });
      }         
  }
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return(
        <div className="row" style={{marginTop:"70px", marginBottom:"70px"}}>
                  <h3>{props.title}</h3>
                  
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
            props.value? <FormItem hidden='true' label='Id' name='id'/> :null

          }
        <FormItem Textarea='TextArea' height="70px" label='Name' name='name' />
        <FormItem Textarea='TextArea' height="70px" label='City' name='city' />
        <FormItem Textarea='TextArea' height="70px" label='Country' name='country' />
        <FormItem Textarea='TextArea' height="70px" label='Email' name='email' />
        <FormItem Textarea='TextArea' height="70px" label='Contact Number' name='phone' />
        <FormItem Textarea='TextArea' height="70px" label='Status' name='status' />
        <FormItem Textarea='TextArea' height="150px" label='Message' name='message' />
      


        {/* <FormItem label='Date' name='date' /> */}

        {/* <Form.Item
        wrapperCol={{
          span: 16,
        }}
         >
        <Button className="buttonNormal" htmlType="submit">
          {props.value? 'Update':'Create'}
        </Button>
         </Form.Item> */}
        </Form>
        </div>
       
        </div>
    )
}

export default OurPartnersForm;