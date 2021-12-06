import React,{useState} from 'react';
import './styles.css';
import { Form, Input, Modal, Table, message } from 'antd';

import PageHeading from './pageHeading';
import SectionHeading from './sectionHeading';
import ContactDisplay from './contactDisplay';
import ContactForm from './contactForm';
import { server} from'../../utils/fetch'
import { useDispatch, useSelector } from 'react-redux';

import GoTOTop from '../../Pages/goToTop';
const OurBooks = (props)=>{
  const contactPageHeading = useSelector(state=>state.contactStore.contactPageHeading)
  const contactHeadingSection = useSelector(state=>state.contactStore.contactHeadingSection)
  console.log(props)
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
        <h2>Contact Us Page</h2>
        <PageHeading value={contactPageHeading} headingServer='contactUs/contactPageHeader' imageServer='contactUs/contactPageImage'/>
        <SectionHeading value={contactHeadingSection} sectionServer='contactUs/contactHeadingSection' title='Contact Page Heading Section' />
        </div>
        <ContactDisplay />
<GoTOTop />
    </div>
           
    )
}

export default OurBooks;