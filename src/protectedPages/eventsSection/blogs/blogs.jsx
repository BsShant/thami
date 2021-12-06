import React,{useState} from 'react';
import '../styles.css';
import { Form, Input, Modal, Table, message } from 'antd';

import PageHeading from '../pageHeading';
import BlogsDisplay from './blogsDisplay';
import BlogsForm from './blogsForm';
import { server} from'../../../utils/fetch'
import GoTOTop from '../../../Pages/goToTop';
import { useSelector } from 'react-redux';

const OurTeam = ()=>{
  const blogsPageHeading = useSelector(state=>state.eventStore.blogsPageHeading)

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
        <h2>Blogs Page</h2>
        <PageHeading value={blogsPageHeading} headingServer='event/blogsPageHeader' imageServer='event/blogsPageImage'/>
        </div>
        <div className="col-md-12">
          <button onClick={showModal} className="buttonNormal">Add New Blog Post</button>
        </div>

        <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <BlogsForm title='Create New Blog Post' imageId='createBlogPost' method="POST"/>
        </Modal>
        <BlogsDisplay />
<GoTOTop />
    </div>
           
    )
}

export default OurTeam;