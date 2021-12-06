import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { convertFromRaw } from 'draft-js';
import './styles.css';
import { connect } from "react-redux";
import { Form, Input, Button, Table, message, Modal } from 'antd';

import { server } from '../../utils/fetch';
import { logoutProcessStarts } from '../../store/authStore/auth.action';
const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class EditorConvertToHTML extends Component {
  // constructor(props) {
  //   super(props);
  //   const contentState = convertFromRaw(content);
  //   this.state = {
  //     contentState,
  //   }
  // }

    onContentStateChange = (contentState) => {
      console.log("contentState",contentState)
      this.props.setEditorState(contentState);
    };
    uploadImageCallBack = (file)=> {
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
            headers: { 'Accept': 'multipart/form-data','authorization': `Bearer ${this.props.parsedToken}` }
          });   
          const data = await res.json() 
          if(data.hasOwnProperty('user')){
            message.error({ content: data.message, key, duration: 2 });
            return this.props.logoutProcessStarts(data.user)
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
  
    render() {
      // const { contentState } = this.props;
      return (
        <div style={{paddingTop:"20px"}} className="sole">
          <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            editorState={this.props.editorState}
            onEditorStateChange={this.onContentStateChange}
            toolbar= {{
              // inline: { inDropdown: true },
              // list: { inDropdown: true },
              // textAlign: { inDropdown: true },
              // link: { inDropdown: true },
              // history: { inDropdown: true },
              image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: false } },
            }}
          />
          {/* <textarea
            disabled
            value={JSON.stringify(this.props.editorState, null, 4)}
          /> */}
        </div>
      );
    }
  }
  const mapStateToProps = state => ({
    parsedToken: state.authStore.userToken

})
const mapDispatchToProps = dispatch => ({
  logoutProcessStarts: (data)=>(dispatch(logoutProcessStarts(data)))

})

  export default connect(mapStateToProps, mapDispatchToProps)(EditorConvertToHTML)