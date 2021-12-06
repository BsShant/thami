import React,{useState} from 'react';
import '../styles.css';
import { Form, Input, Modal, Table, message } from 'antd';

import PageHeading from '../pageHeading';
import OurArticlesDisplay from './ourArticlesDisplay';
import OurArticlesForm from './ourArticlesForm';
import { server} from'../../../utils/fetch'
import GoTOTop from '../../../Pages/goToTop';
import { useSelector } from 'react-redux';

const OurTeam = ()=>{
  const ourArticlesPageHeading = useSelector(state=>state.eventStore.ourArticlesPageHeading)

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
        <h2>Our Articles Page</h2>
        <PageHeading value={ourArticlesPageHeading} headingServer='event/ourArticlesPageHeader' imageServer='event/ourArticlesPageImage'/>
        </div>
        <div className="col-md-12">
          <button onClick={showModal} className="buttonNormal">Add New Article Post</button>
        </div>

        <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <OurArticlesForm title='Create New Article Post' imageId='createArticlePost' method="POST"/>
        </Modal>
        <OurArticlesDisplay />
<GoTOTop />
    </div>
           
    )
}

export default OurTeam;