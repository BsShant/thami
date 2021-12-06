import React,{useState} from 'react';
import '../styles.css';
import { Form, Input, Modal, Table, message } from 'antd';
import FormItem from '../../../component/formItem/formItem';
import ImageSend from "../../../component/imageSend/imageSend";
import PageHeading from '../pageHeading';
import SectionHeading from '../sectionHeading';
import Photos from '../photos/photo';
import Videos from '../videos/videos';
import GoTOTop from '../../../Pages/goToTop';
// import OurPartnersDisplay from './ourPartnersDisplay';
// import OurPartnersForm from './ourPartnersForm';
import { server} from'../../../utils/fetch'
import { useSelector } from 'react-redux';

const newServer = `${server}/`

const Gallery = ()=>{
  const galleryPageHeading = useSelector(state=>state.aboutStore.galleryPageHeading)
  const galleryHeadingSection = useSelector(state=>state.aboutStore.galleryHeadingSection)
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
        <h2>Gallery Page</h2>
        <PageHeading value={galleryPageHeading} headingServer='aboutUs/galleryPageHeader' imageServer='aboutUs/galleryPageImage'/>
        <SectionHeading value={galleryHeadingSection} sectionServer='aboutUs/galleryHeadingSection' title='Gallery Heading Section'/>
        <Photos />
        <Videos />
        </div>
       <GoTOTop />
    </div>
           
    )
}

export default Gallery;