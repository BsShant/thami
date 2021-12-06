import React,{useState} from 'react';
import { Form, Input, Button, Table, message, Modal } from 'antd';
import FormItem from '../../../component/formItem/formItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import {server} from '../../../utils/fetch';

import { useDispatch } from 'react-redux';
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import { useSelector } from 'react-redux';
import ImagePlaceholder from '../../../assests/imagePlaceholder.jpg';
import { fetchingAboutContentStarts } from '../../../store/aboutStore/about.action';
const key = 'updatable';
const newServer = `${server}/aboutUs/ourPartners`

const OurPartnersForm = (props)=>{
  const dispatch = useDispatch()
  const parsedToken = useSelector(state=>state.authStore.userToken)


  let imageHolder= props.value? `${server}/${props.value.partnerLogo}` : ImagePlaceholder
    const [file, updateFile] = useState(imageHolder)
    const [selectedFile, setSelectedFile] = useState(null)

    const fileChange=(e)=>{
        setSelectedFile(e.target)
        const reader = new FileReader()
        reader.onload =()=>{
            if(reader.readyState === 2){
                updateFile(reader.result)

            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    const onFinish = async(values)=>{
console.log(values)
       
        if(!selectedFile && !props.value){
          message.error({ content: 'Please select an image',duration: 2 });
          return;

      }
        message.loading({ content: 'Loading...', key, duration: 2  });

        const formData = new FormData()
        Object.keys(values).map(data=>{
          return formData.append(data,values[data])
        })
        if(!selectedFile){
          formData.append('filename',props.value.partnerLogo)
        }
        else{
          formData.append(selectedFile.name,selectedFile.files[0])
        }
        console.log("hi")
        try {
          const res = await fetch(`${newServer}`, {
            method: props.method, 
            body: formData,
            headers: { 'Accept': 'multipart/form-data','authorization': `Bearer ${parsedToken}` }
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
          dispatch(fetchingAboutContentStarts())

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
     <div className="col-sm-12 col-md-12">
     <h3>{props.title}</h3>

        <div className="imageBox">
          <h3>Partner's Logo</h3>
          <div>
        <label for={props.imageId}  className="uploadPhotoContainer" style={{backgroundImage:`url(${file})`, backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
        <FontAwesomeIcon icon ={faPlus} style={{color:"#f6b745", fontSize:"60px"}}/>
             </label>
        <input id={props.imageId} type="file" name='partnerLogo' onChange={fileChange} style={{display:"none"}} accept='image/*'/>
        </div>
        </div>
        </div>
        <div className="col-sm-12 col-md-12">
        <Form
         name="basic"
         labelCol={{
            span: 24,
        }}
        layout ='Vertical'
        // initialValues={{
        // remember: true,
        // }}
        initialValues={props.value}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
          {
            props.value? <FormItem hidden='true' label='Partner Id' name='partnerId' value={props.value}/> :null

          }
        <FormItem label='Partner Name' Textarea='Aextarea' height="70px" name='partnerName' />
        <FormItem label='Partner Address' Textarea='Aextarea' height="70px" name='address' />
        <FormItem label='Partner Rank' Textarea='Aextarea' height="70px" name='rank' />

        <Form.Item
        wrapperCol={{
          span: 16,
        }}
         >
        <Button className="buttonNormal" htmlType="submit">
        {props.value? 'Update':'Create'}
        </Button>
         </Form.Item>
        </Form>
        </div>
       
        </div>
    )
}

export default OurPartnersForm;