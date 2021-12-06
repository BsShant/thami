import React,{useState} from 'react';
import '../styles.css';
import { Form, Input, Modal, Table, message } from 'antd';

import PageHeading from '../pageHeading';
import NewsDisplay from './newsDisplay';
import NewsForm from './newsForm';
import { server} from'../../../utils/fetch'
import GoTOTop from '../../../Pages/goToTop';
import { useSelector } from 'react-redux';

const OurTeam = ()=>{
  const newsPageHeading = useSelector(state=>state.eventStore.newsPageHeading)

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
        <div className="row adminPage">
        <div className="col-md-12 " style={{marginBottom:"100px"}}>
        <h2>News Page</h2>
        <PageHeading value={newsPageHeading} headingServer='event/newsPageHeader' imageServer='event/newsPageImage'/>
        </div>
        <div className="col-md-12">
          <button onClick={showModal} className="buttonNormal">Add New News Post</button>
        </div>

        <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <NewsForm title='Create New News Post' imageId='createNewsPost' method="POST"/>
        </Modal>
        <NewsDisplay />
<GoTOTop />
    </div>
           
    )
}

export default OurTeam;