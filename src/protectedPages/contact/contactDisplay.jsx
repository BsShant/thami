import React,{useState} from 'react';
import { Table, Modal, message } from 'antd';
import { server} from'../../utils/fetch';
import {dataSource } from './tableData';
import ContactForm from './contactForm';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { logoutProcessStarts } from "../../store/authStore/auth.action";
import { fetchingContactContentStarts } from '../../store/contactStore/contact.action';

const OurTeamDisplay = ()=>{
  const messages = useSelector(state=>state.contactStore.messages)
  const parsedToken = useSelector(state=>state.authStore.userToken)

  const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [record, setRecord] = useState('')

   const onDeleteItem = async(id)=>{
    const key = 'updatable';
    message.loading({ content: 'Loading...', key });
    try {
      const res = await fetch(`${server}/contactUs/contact`, {
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json','authorization': `Bearer ${parsedToken}` },
        body: JSON.stringify({id}) 
      });   
      const data = await res.json() 
      if(data.hasOwnProperty('user')){
        message.error({ content: data.message, key, duration: 2 });
        return dispatch(logoutProcessStarts(data.user))

      }
      console.log(data)
      if(data){
        message.success({ content: data.message, key, duration: 2 });

      }
      dispatch(fetchingContactContentStarts())


    } catch (error) {
      console.log(error)
      message.error({ content: 'The operation failed', key, duration: 2 });

    }           
    }

  const showModal = (record) => {
    setRecord(record)
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div>
          <div className="tableLarge">{record.name}</div>
          <div className="tableSmall">
            <div className="row tableSmallContainer">
              <div className="col-md-8">
              {record.name}
              </div>
              </div>
              <div className="row tableSmallContainer">
             <div className="col-6 col-sm-3">
                      {record.email}
               </div>
                  
               <div className="col-6 col-sm-3">
                      {record.date}
               </div>
                  </div>
                  <div className="row mt-3">
                  <div className="col-6 col-sm-3">
                  <button className="buttonTable" onClick={()=>showModal(record)}>View</button>

                  </div>
                  <div className="col-6 col-sm-3">
                  <button className="buttonTable" onClick={()=>onDeleteItem(record.id)}>Delete</button>

                  </div>

            </div>
            </div>
        </div>
    ),

    },
    
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ellipsis: true,
      responsive:['lg']    

    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
      ellipsis: true,
      responsive:['lg']    

    },
    {
      title: 'Received Date',
      dataIndex: 'date',
      key: 'date',
            // sortOrder:'descending',
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
      responsive:['lg']    

    },
    
    
    {
      title: 'View',
      key: 'view',
      render: (text, record) => (
          <button className="buttonTable" onClick={()=>showModal(record)}>View</button>
      ),
      responsive:['lg']    

    },
    {
      title: 'Delete',
      key: 'delete',
      render: (text, record) => (
          <button className="buttonTable" onClick={()=>onDeleteItem(record.id)}>Delete</button>
      ),
      responsive:['lg']    

    },
  ];
    return(
        <div className="row" style={{width:"100%"}}> 
        <div className="col-md-12">
        <h3 style={{margin:"30px auto 30px", paddingLeft:"15px"}}>Contact Messages</h3>
        <Table dataSource={messages? messages:[]} columns={columns} pagination={{ position: ['bottomCenter'] }}/>
       { isModalVisible? <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <ContactForm title='Update Book' value={record} imageId='updateBook' method="PUT"/>
        </Modal> : null}
        </div>
        
        </div>


    )
}
export default OurTeamDisplay;