import React,{useState} from 'react';
import '../styles.css';
import { Form, Input, Modal, Table, message } from 'antd';
import FormItem from '../../../component/formItem/formItem';
import ImageSend from "../../../component/imageSend/imageSend";
import PageHeading from '../pageHeading';
import SectionHeading from '../sectionHeading';
import VideoDisplay from './videosDisplay';
import VideoForm from './videosForm';
import { server} from'../../../utils/fetch'
import { useSelector } from 'react-redux';

const newServer = `${server}/`

const OurTeam = ()=>{
  const videosSection = useSelector(state=>state.aboutStore.videosSection)
  const parsedToken = useSelector(state=>state.authStore.userToken)
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
        <div style={{marginTop:"80px"}}>
        
        <div className="col-md-12" style={{padding:"0"}}>
          <button onClick={showModal} className="buttonNormal">Add New Video</button>
        </div>

        <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <VideoForm title='Add New Video' imageId='createVideo' method="POST"/>
        </Modal>
        <VideoDisplay />

    </div>
           
    )
}

export default OurTeam;