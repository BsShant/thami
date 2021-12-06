import React,{useState} from 'react';
import { Form, Input, Button, Table, message, Modal } from 'antd';
import FormItem from '../../../component/formItem/formItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import ImagePlaceholder from '../../../assests/imagePlaceholder.jpg';
import {server} from '../../../utils/fetch';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import Editor from '../../../component/editor/soleEditor';
import { EditorState,convertToRaw, convertFromRaw } from "draft-js";
import { fetchingEventContentStarts } from '../../../store/eventStore/event.action';
const key = 'updatable';
const newServer = `${server}/event/blogs`

const OurPartnersForm = (props)=>{
  const dispatch = useDispatch()
  const parsedToken = useSelector(state=>state.authStore.userToken)

  let imageHolder= props.value? `${server}/${props.value.image}` : ImagePlaceholder
  let importedImage = props.value? props.value.image:null
  const urlToObject= async()=> {
    const response = await fetch(imageHolder);
    // here image is url/location of image
    const blob = await response.blob();
    const file = new File([blob], 'image.jpg', {type: blob.type});
    console.log(file);
  }
  
    const [file, updateFile] = useState(imageHolder)
    const [selectedFile, setSelectedFile] = useState(null)
    const [editorState, setEditorState] = React.useState(
      props.value? ()=>EditorState.createWithContent(convertFromRaw(JSON.parse(props.value.detail))): () => EditorState.createEmpty()
     )
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
      urlToObject()
      const contentState = editorState.getCurrentContent();

      if(!selectedFile && !props.value){
        message.error({ content: 'Please select an image',duration: 2 });
        return;

    }
      message.loading({ content: 'Loading...', key, duration: 2  });

      const formData = new FormData()
      Object.keys(values).map(data=>{
        return formData.append(data,values[data])
      })
      formData.append('detail',JSON.stringify(convertToRaw(contentState)))
      if(!selectedFile){
        formData.append('filename',props.value.image)
      }
      else{
        formData.append(selectedFile.name,selectedFile.files[0])
      }

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
        dispatch(fetchingEventContentStarts())

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
        <div className="imageBox">
          <h3>Featured Image</h3>
          <div>
        <label for={props.imageId}  className="uploadPhotoContainer" style={{backgroundImage:`url(${file})`, backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
        <FontAwesomeIcon icon ={faPlus} style={{color:"#f6b745", fontSize:"60px"}}/>
             </label>
        <input id={props.imageId} type="file" name='image' onChange={fileChange} style={{display:"none"}} accept='image/*'/>
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
        <FormItem label='Blog title' Textarea='TextArea' height="70px" name='title' />
        {/* <FormItem label='Blog Detail' name='detail' Textarea='Textarea' height='300px' /> */}
        {/* <FormItem label='Date' name='date' /> */}
        <h3>Detail</h3>
        <p style={{color:"red"}} className="errorEditor">Please don't copy image from another website or text editor and paste it. It will crash the editor.</p>
        <Editor  editorState={editorState} setEditorState={setEditorState} editorClassName="greyEditor" />

        <FormItem label='Button Name' Textarea='TextArea' height="70px" name='buttonName' />

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