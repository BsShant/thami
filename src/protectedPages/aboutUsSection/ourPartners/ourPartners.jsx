import React,{useState} from 'react';
import '../styles.css';
import { Form, Input, Modal, Table, message } from 'antd';
import FormItem from '../../../component/formItem/formItem';
import ImageSend from "../../../component/imageSend/imageSend";
import PageHeading from '../pageHeading';
import SectionHeading from '../sectionHeading';
import OurPartnersDisplay from './ourPartnersDisplay';
import OurPartnersForm from './ourPartnersForm';
import { server} from'../../../utils/fetch';
import GoTOTop from '../../../Pages/goToTop';
import { useSelector } from 'react-redux';

const newServer = `${server}/`

const OurPartners = ()=>{
  const ourPartnersPageHeading = useSelector(state=>state.aboutStore.ourPartnersPageHeading)
  const ourPartnersHeadingSection = useSelector(state=>state.aboutStore.ourPartnersHeadingSection)
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
        <h2>Our Partners Page</h2>
        <PageHeading value={ourPartnersPageHeading} headingServer='aboutUs/ourPartnersPageHeader' imageServer='aboutUs/ourPartnersPageImage'/>
        <SectionHeading value={ourPartnersHeadingSection} sectionServer='aboutUs/ourPartnersHeadingSection' title='Our Partners Heading Section'/>
        </div>
        <div className="col-md-12">
        <button onClick={showModal} className="buttonNormal">Add New Partner</button>
        </div>
        <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <OurPartnersForm title='Create New Partner' imageId='createPartnerLogo' method="POST"/>
        </Modal>
        <OurPartnersDisplay />
        <GoTOTop />
    </div>
           
    )
}

export default OurPartners;