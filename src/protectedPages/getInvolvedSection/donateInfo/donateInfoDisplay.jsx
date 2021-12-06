import React,{useState} from 'react';
import { Table, Modal, message } from 'antd';
import {dataSource } from './tableData';
import DonateForm from './donateInfoForm';
import parsedToken,{server} from '../../../utils/fetch';
import { useDispatch, useSelector } from 'react-redux';
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import {fetchingGetInvolvedContentStarts} from '../../../store/getInvolvedStore/getInvolved.action'
import './styles.css';

const OurTeamDisplay = ()=>{
  const dispatch = useDispatch()
  const donateInfoSection= useSelector(state=>state.getInvolvedStore.donateInfoSection)
  const parsedToken = useSelector(state=>state.authStore.userToken)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [record, setRecord] = useState('')

   const onDeleteItem = async(id)=>{
    const key = 'updatable';
    message.loading({ content: 'Loading...', key });
    try {
      const res = await fetch(`${server}/getInvolved/donate`, {
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json' ,'authorization': `Bearer ${parsedToken}` },
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
      dispatch(fetchingGetInvolvedContentStarts())

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
      title: 'Payment Heading',
      dataIndex: 'heading',
      key: 'heading',
      render: (text, record) => (
        <div>
          <div className="tableLarge">{record.heading}</div>
          <div className="tableSmall">
            <div className="row tableSmallContainer">
              <div className="col-md-8">
              {record.heading}
              </div>
              </div>
              <div className="col-6 col-sm-3">
                      {record.detail}
               </div>
              <div className="row tableSmallContainer">
                  <div className="col-6 col-sm-3">
                  <a href={`${server}/${record.logo}`} target='_blank'>{record.logo}</a>

                  </div>
                 
               <div className="col-6 col-sm-3">
                      {record.date}
               </div>
                  </div>
                  <div className="row mt-3">
                  <div className="col-6 col-sm-3">
                  <button className="buttonTable" onClick={()=>showModal(record)}>Edit</button>

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
      title: 'Payment Detail',
      dataIndex: 'detail',
      key: 'detail',
      ellipsis: true,
      responsive:['lg']    

    },
    {
      title: 'Merchant Logo',
      dataIndex: 'logo',
      key: 'logo',
      responsive:['lg']   , 


      render: (text, record) => (
        <a href={`${server}/${record.logo}`} target='_blank'>{record.logo}</a>
    ),
    },
    
    
    {
      title: 'Published date',
      dataIndex: 'date',
      key: 'date',
      responsive:['lg'],
      sorter: (a, b) => new Date(a.date) -new Date(b.date),
    

    },
    
    {
      title: 'Edit',
      key: 'edit',
      render: (text, record) => (
          <button className="buttonTable" onClick={()=>showModal(record)}>Edit</button>
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
        <h3 style={{margin:"30px auto 30px",paddingLeft:"15px"}}>Donation Info Data</h3>
        <Table dataSource={donateInfoSection? donateInfoSection : []} columns={columns} pagination={{ position: ['bottomCenter'] }}/>
       { isModalVisible? <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <DonateForm title='Update Donation Information' value={record} imageId='updateDonateInfo' method="PUT"/>
        </Modal> : null}
        </div>
        
        </div>


    )
}
export default OurTeamDisplay;