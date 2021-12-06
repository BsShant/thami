import React,{useState} from 'react';
import '../styles.css';
import { Form, Input, Modal, Table, message } from 'antd';

import PageHeading from '../pageHeading';
import SectionHeading from '../sectionHeading';
import PressReleaseDisplay from './pressReleaseDisplay';
import PressReleaseForm from './pressReleaseForm';
import { server} from'../../../utils/fetch'
import GoTOTop from '../../../Pages/goToTop';
import { useSelector } from 'react-redux';

const Resources = ()=>{
  const pressReleasePageHeading = useSelector(state=>state.publicationStore.pressReleasePageHeading)
  const pressReleaseHeadingSection = useSelector(state=>state.publicationStore.pressReleaseHeadingSection)
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
        <h2>Press Release Page</h2>
        <PageHeading value={pressReleasePageHeading} headingServer='publication/pressReleasePageHeader' imageServer='publication/pressReleasePageImage'/>
        <SectionHeading value={pressReleaseHeadingSection} sectionServer='publication/pressReleaseHeadingSection' title='Press Release Heading Section' />
        </div>
        <div className="col-md-12">
          <button onClick={showModal} className="buttonNormal">Add New Press Release</button>
        </div>

        <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <PressReleaseForm title='Add new Press Release' imageId='addNewPress' method="POST"/>
        </Modal>
        <PressReleaseDisplay />
<GoTOTop />
    </div>
           
    )
}

export default Resources;