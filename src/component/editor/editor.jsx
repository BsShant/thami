import React,{Component} from "react";
import { EditorState,convertToRaw, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import {Editor} from "react-draft-wysiwyg";
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutProcessStarts } from "../../store/authStore/auth.action";
import { Form, Input, Button, Table, message, Modal } from 'antd';
import {server} from '../../utils/fetch';


const EditorContainer = (props)=>{
  const parsedToken = useSelector(state=>state.authStore.userToken)

  const dispatch = useDispatch()

    // const [editorState, setEditorState] = React.useState(
    //     () => EditorState.createEmpty()
    //   )
  console.log(props.editorState)
    const onEditorStateChange = (editorState) => {
      if(editorState){
        props.setEditorState(editorState)
      }
    //     console.log("editorstate", editorState)

    //     const contentState = editorState.getCurrentContent();
    //     console.log("contentstant", contentState)

    // console.log('raw state', convertToRaw(contentState));
    //   console.log(editorState)
    //   setEditorState(editorState)
    };
    const uploadImageCallBack = (file)=> {
        return new Promise(
          async(resolve, reject) => {
               //     console.log(file)
        const key = 'updatable';
        const formData = new FormData()
        formData.append('image',file)
        message.loading({ content: 'Loading...', key });
        try {
            const res = await fetch(`${server}/image`, {
              method: "POST", 
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
          console.log("ddddd",data.image)
          console.log("calleddd",`${server}/${data.image}`)
          resolve({ data: { link: `${server}/${data.image}`}})
        }
        catch (error) {
                  console.log(error)
                  message.error({ content: 'The operation failed', key, duration: 2 });
            reject(error)
                }         
            // const xhr = new XMLHttpRequest();
            // xhr.open('POST', 'https://api.imgur.com/3/image');
            // xhr.setRequestHeader('Authorization', 'Client-ID cf1433d9ecd377a');
            // const data = new FormData();
            // data.append('image', file);
            // xhr.send(data);
            // xhr.addEventListener('load', () => {
            //   const response = JSON.parse(xhr.responseText);
            //   console.log(response)
            //   resolve(response);
            // });
            // xhr.addEventListener('error', () => {
            //   const error = JSON.parse(xhr.responseText);
            //   reject(error);
            // });
          }
        );
      }
    // const uploadImageCallBack= async(file) =>{
    //     console.log(file)
    //     const key = 'updatable';
    //     const formData = new FormData()
    //     formData.append('image',file)
    //     message.loading({ content: 'Loading...', key });
    //     try {
    //         const res = await fetch(`${server}/image`, {
    //           method: "POST", 
    //           body: formData,
    //           headers: { 'Accept': 'multipart/form-data','authorization': `Bearer ${parsedToken}` }
    //         });   
    //         const data = await res.json() 
    //         if(data.hasOwnProperty('user')){
    //           message.error({ content: data.message, key, duration: 2 });
    //           return dispatch(logoutProcessStarts(data.user))
    //         }
            
    //       console.log(data)
    //       if(data){
    //         message.success({ content: data.message, key, duration: 2 });
    
    //       }
    //       console.log("ddddd",data.image)
    //       console.log("calleddd",`${server}/${data.image}`)
    //       return `${server}/${data.image}`
    
    //     } catch (error) {
    //       console.log(error)
    //       message.error({ content: 'The operation failed', key, duration: 2 });
    
    //     }           
    // }
  
    
      return <div>
        <Editor
        readOnly ={props.readOnly}
        toolbarClassName = {props.toolbarClassName}
        editorClassName = {props.editorClassName? props.editorClassName: 'demo-editor'}
        wrapperClassName="demo-wrapper"
          // editorClassName="demo-editor"
        // defaultEditorState={props.defaultEditorState}
          editorState={props.editorState}
          onEditorStateChange={onEditorStateChange}    
          toolbar= {props.toolbar? props.toolbar :{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: { uploadCallback: uploadImageCallBack, alt: { present: false, mandatory: false } },
          }}
        />
      </div>
    
  }

  export default EditorContainer;