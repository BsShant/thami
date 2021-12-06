import React,{useState} from 'react';
import '../styles.css';
import { Form, Input, Modal, Table, message } from 'antd';

import PageHeading from '../pageHeading';
import SectionHeading from '../sectionHeading';
import DonateInfoDisplay from './donateInfoDisplay';
import DonateInfoForm from './donateInfoForm';
import { server} from'../../../utils/fetch'
import GoTOTop  from '../../../Pages/goToTop';
import { useSelector } from 'react-redux';

const Resources = ()=>{
  const donateInfoPageHeading = useSelector(state=>state.getInvolvedStore.donateInfoPageHeading)
  const donateInfoHeadingSection = useSelector(state=>state.getInvolvedStore.donateInfoHeadingSection)

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
        <h2>Donation Info Page</h2>
        <PageHeading value={donateInfoPageHeading} headingServer='getInvolved/donatePageHeader' imageServer='getInvolved/donatePageImage'/>
        <SectionHeading value={donateInfoHeadingSection} sectionServer='getInvolved/donateHeadingSection' title='Donation Info Heading Section' />
        </div>
        <div className="col-md-12">
          <button onClick={showModal} className="buttonNormal">Add New Donation Method</button>
        </div>

        <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <DonateInfoForm title='Add new Donation Info' imageId='donateInfo' method="POST"/>
        </Modal>
        <DonateInfoDisplay />
<GoTOTop />
    </div>
           
    )
}

export default Resources;