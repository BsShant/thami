import React from 'react';
import '../styles.css';
import { Form, Input, Button, Checkbox, message } from 'antd';
import FormItem from '../../../component/formItem/formItem';
import PageHeading from "../pageHeading";
import ImageSend from "../../../component/imageSend/imageSend";
import { server} from'../../../utils/fetch';
import Mission from './mission';
import Vision from './vision';
import GoTOTop from '../../../Pages/goToTop';
import { useSelector } from 'react-redux';
import {fetchingAboutContentStarts} from "../../../store/aboutStore/about.action"
const VisionMission = ()=>{
    // const Section = useSelector(state=>state.aboutStore.ourStorySection)
  const visionMissionPageHeading = useSelector(state=>state.aboutStore.visionMissionPageHeading)
     
    return(
        <div className="row adminPage">
        <div className="col-md-12 " style={{marginBottom:"70px"}}>
        <h2>Vision & Mission Page</h2>
        <PageHeading value={visionMissionPageHeading} headingServer='aboutUs/visionMissionPageHeader' imageServer='aboutUs/visionMissionPageImage' />
        </div>
       <Vision />
       <Mission />
       <GoTOTop />
    </div>
    )
}

export default VisionMission;