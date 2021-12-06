import React,{useState} from 'react';
import '../styles.css';
import { Form, Input, Modal, Table, message } from 'antd';

import PageHeading from '../pageHeading';
import SectionHeading from '../sectionHeading';
import SupportCommunityDisplay from './supportCommunityDisplay';
import SupportCommunityForm from './supportCommunityForm';
import { server} from'../../../utils/fetch'
import GoTOTop from '../../../Pages/goToTop';
import { useSelector } from 'react-redux';

const Resources = ()=>{
  const supportCommunityPageHeading = useSelector(state=>state.getInvolvedStore.supportCommunityPageHeading)
  const supportCommunityHeadingSection = useSelector(state=>state.getInvolvedStore.supportCommunityHeadingSection)
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
        <h2>Community Support Page</h2>
        <PageHeading value={supportCommunityPageHeading} headingServer='getInvolved/supportPagePageHeader' imageServer='getInvolved/supportPagePageImage'/>
        <SectionHeading value={supportCommunityHeadingSection} sectionServer='getInvolved/supportPageHeadingSection' title='Our Community Support Heading Section' />
        </div>
        <div className="col-md-12">
          <button onClick={showModal} className="buttonNormal">Add Community Work</button>
        </div>

        <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <SupportCommunityForm title='Add new community work' imageId='addNewCommunityWork' method="POST"/>
        </Modal>
        <SupportCommunityDisplay />
<GoTOTop />
    </div>
           
    )
}

export default Resources;