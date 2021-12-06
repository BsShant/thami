import React,{useState} from 'react';
import '../styles.css';
import { Form, Input, Modal, Table, message } from 'antd';
import FormItem from '../../../component/formItem/formItem';
import ImageSend from "../../../component/imageSend/imageSend";

import PhotoDisplay from './photoDisplay';
import PhotoForm from './photoForm';
import { server} from'../../../utils/fetch'
const newServer = `${server}/`

const Photo = ()=>{
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
   
     
     
    
    return(
        <div className="mt-5">
        <div className="col-md-12" style={{padding:"0"}}>
        <button onClick={showModal} className="buttonNormal">Add New Photo</button>
        </div>
      
        <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <PhotoForm title='Create New Photo' imageId='createNewPhoto' method="POST"/>
        </Modal>
        <PhotoDisplay />
    </div>
           
    )
}

export default Photo;