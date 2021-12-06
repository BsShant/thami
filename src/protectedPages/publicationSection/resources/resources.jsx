import React,{useState} from 'react';
import '../styles.css';
import { Form, Input, Modal, Table, message } from 'antd';

import PageHeading from '../pageHeading';
import SectionHeading from '../sectionHeading';
import ResourcesDisplay from './resourcesDisplay';
import ResourcesForm from './resourcesForm';
import { server} from'../../../utils/fetch'
import GoTOTop from '../../../Pages/goToTop';
import { useSelector } from 'react-redux';

const Resources = ()=>{
  const resourcesPageHeading = useSelector(state=>state.publicationStore.resourcesPageHeading)
  const resourcesHeadingSection = useSelector(state=>state.publicationStore.resourcesHeadingSection)
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
        <h2>Our Resources Page</h2>
        <PageHeading value={resourcesPageHeading} headingServer='publication/resourcesPageHeader' imageServer='publication/resourcesPageImage'/>
        <SectionHeading value={resourcesHeadingSection} sectionServer='publication/resourcesHeadingSection' title='Our Resources Heading Section' />
        </div>
        <div className="col-md-12">
          <button onClick={showModal} className="buttonNormal">Add New Resource</button>
        </div>

        <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <ResourcesForm title='Add new Resource' imageId='addNewResource' method="POST"/>
        </Modal>
        <ResourcesDisplay />
<GoTOTop />
    </div>
           
    )
}

export default Resources;