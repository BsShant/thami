import React,{useState} from 'react';
import '../styles.css';
import { Form, Input, Modal, Table, message } from 'antd';
import FormItem from '../../../component/formItem/formItem';
import ImageSend from "../../../component/imageSend/imageSend";
import PageHeading from '../pageHeading';
import SectionHeading from '../sectionHeading';
import OurTeamDisplay from './ourTeamDisplay';
import OurTeamForm from './ourTeamForm';
import { server} from'../../../utils/fetch'
import GoTOTop from '../../../Pages/goToTop';
import { useSelector } from 'react-redux';

const newServer = `${server}/`

const OurTeam = ()=>{
  const ourTeamPageHeading = useSelector(state=>state.aboutStore.ourTeamPageHeading)
  const ourTeamHeadingSection = useSelector(state=>state.aboutStore.ourTeamHeadingSection)

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
        <h2>Our Team Page</h2>
        <PageHeading value={ourTeamPageHeading} headingServer='aboutUs/ourTeamPageHeader' imageServer='aboutUs/ourTeamPageImage'/>
        <SectionHeading value={ourTeamHeadingSection} sectionServer='aboutUs/ourTeamHeadingSection' title='Our Team Heading Section'/>
        </div>
        <div className="col-md-12">
          <button onClick={showModal} className="buttonNormal">Add New Team Member</button>
        </div>

        <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <OurTeamForm title='Create New Team Member' imageId='createTeamImage' method="POST"/>
        </Modal>
        <OurTeamDisplay />
<GoTOTop />
    </div>
           
    )
}

export default OurTeam;