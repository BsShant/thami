import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import ImagePlaceholder from '../../assests/imagePlaceholder.jpg';
import { message } from 'antd';
// import parsedToken from "../../utils/fetch";
import { useDispatch, useSelector } from 'react-redux';
import { logoutProcessStarts } from "../../store/authStore/auth.action";

const key = 'updatable';
 

const ImageSend = (props)=>{
  console.log("aboutus", props.value)
  const parsedToken = useSelector(state=>state.authStore.userToken)
const setHolder = props.value?  props.value : ImagePlaceholder
  const dispatch = useDispatch()
    const [file, updateFile] = useState(setHolder)
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
    const fileUpload = async()=>{
        if(!selectedFile){
            message.error({ content: 'Please select an image',duration: 2 });
            return;

        }
        message.loading({ content: 'Loading...', key });
        console.log(selectedFile.files[0])
        const formData = new FormData()
        formData.append(selectedFile.name,selectedFile.files[0])

        try {
          const res = await fetch(`${props.newServer}`, {
            method: 'PUT', 
            body: formData,
            headers: { 'Accept': 'multipart/form-data', 'authorization': `Bearer ${parsedToken}`}
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
    }
    return(
<div>
<label for={props.id}  className="uploadPhotoContainer" style={{height:`${props.height? props.height:'230px'}` , backgroundImage:`url(${file})`, backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
    <FontAwesomeIcon icon ={faPlus} style={{color:"#f6b745", fontSize:"60px"}}/>
             </label>
    <input id={props.id} type="file" name={props.name} onChange={fileChange} style={{display:"none"}} accept='image/*'/>
    <button className="buttonNormal" onClick={fileUpload}>Update</button>
</div>
    )
}
export default ImageSend;