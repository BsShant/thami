import React,{useState} from 'react';
import './styles.css';
import { Form, Input, Modal, Table, message } from 'antd';
import GoTOTop from '../../Pages/goToTop';

import RegistrationDisplay from './registrationDisplay';
import { server} from'../../utils/fetch'

const OurBooks = ()=>{
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
        <h2>Member And Registration Page</h2>
        </div>
        <RegistrationDisplay />
<GoTOTop />
    </div>
           
    )
}

export default OurBooks;