import React,{useState} from 'react';
import { Table, Modal, message } from 'antd';
import { server} from'../../utils/fetch';
import {dataSource } from './tableData';
import RegistrationForm from './registrationForm';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { logoutProcessStarts } from "../../store/authStore/auth.action";
import { fetchingMembershipContentStarts } from '../../store/membershipStore/membership.action';

const OurTeamDisplay = ()=>{
  const membershipData = useSelector(state=>state.membershipStore.membershipData)
  const parsedToken = useSelector(state=>state.authStore.userToken)

  const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [record, setRecord] = useState('')

   const onItemAction = async(id, method, route)=>{
    const key = 'updatable';
    message.loading({ content: 'Loading...', key });
    try {
      const res = await fetch(`${server}/${route}`, {
        method: method, 
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
      dispatch(fetchingMembershipContentStarts())


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
      title: 'City / Country',
      key: 'address',
      width:200,
      responsive:['lg'] ,
      render: (text, record) => (
        <div>
                       <address style={{display:"flex", whiteSpace: "nowrap"}}>
                
                 {record.city}<br />
                 {record.country}
                 </address>
               </div>
      )
    },
   
    {
      title: 'Contact Number/ Email',
      key: 'contact',
      // width:180,

      // ellipsis: true,
      // width:150,
      responsive:['lg'] ,
      render: (text, record) => (
        <div>
          <div style={{display:"flex", whiteSpace: "nowrap"}}>{record.phone}</div>
          <div style={{display:"flex", whiteSpace: "nowrap"}}>{record.email}</div>

        </div>
      )
    },
    
    // {
    //   title: 'Message',
    //   dataIndex: 'message',
    //   key: 'message',
    //   ellipsis: true,
    //   responsive:['lg']    

    // },
    {
      title: 'Received Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => new Date(a.date) -new Date(b.date),
      // sortOrder:'descending',
      responsive:['lg']    

    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
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
   
  ];
  const columnActionTaken = [
    {
      title: 'Name',
      key: 'name',

      render: (text, record) => (
        <div>
          <div className="tableLarge">{record.name}</div>
          <div className="tableSmall">
            <div className="row tableSmallContainer">
              <div className="col-md-12">
              {record.name} 
                           </div>
             
              
               <div className="col-6 col-sm-3">
                 <address>
                 {record.city}<br />
                 {record.country}
                 </address>
                 </div>
                 {/* <div className="col-6 col-sm-3">
                 <address>
                 {record.city} {record.province} {record.zipCode} {record.country}
                 </address>
               </div> */}
               <div className="col-6 col-sm-3">
                      {record.phone}<br />
          
                      {record.email}

               </div>
               {/* <div className="col-6 col-sm-3">
                      {record.workAreaCode} {record.workNumber}
               </div>
               <div className="col-6 col-sm-3">
                      {record.cellAreaCode} {record.cellNumber}
               </div> */}
               <div className="col-6 col-sm-3">
                      {record.date}
               </div>
               <div className="col-6 col-sm-3">
                      {record.status}
               </div>
                  </div>
                  <div className="row mt-3">
                  <div className="col-6 col-sm-3">
                  <button className="buttonTable" onClick={()=>showModal(record)}>View</button>

                  </div>
                  <div className="col-6 col-sm-3">
                  <button className="buttonTable" onClick={()=>onItemAction(record.id, 'DELETE','member/registration')}>Delete</button>

                  </div>

            </div>
            </div>
        </div>
    ),

    },
    ...columns,
    {
      title: 'Delete',
      key: 'delete',
      render: (text, record) => (
          <button className="buttonTable" onClick={()=>onItemAction(record.id, 'DELETE','member/registration')}>Delete</button>
      ),
      responsive:['lg']    

    },
    
  ]
  const columnsPending = [
    {
      title: 'Name',
      key: 'name',
      render: (text, record) => (
        <div>
          <div className="tableLarge">{record.name}</div>
          <div className="tableSmall">
            <div className="row tableSmallContainer">
              <div className="col-md-12">
              {record.name}
              </div>
             
                  
               <div className="col-6 col-sm-3">
                 <address>
                 {record.city}<br />
                 {record.country}
                 </address>
                 </div>
                 {/* <div className="col-6 col-sm-3">
                 <address>
                 {record.city} {record.province} {record.zipCode} {record.country}
                 </address>
               </div> */}
               <div className="col-6 col-sm-3">
                      {record.phone}<br />
                      {record.email}
               </div>
               {/* <div className="col-6 col-sm-3">
                      {record.workAreaCode} {record.workNumber}
               </div>
               <div className="col-6 col-sm-3">
                      {record.cellAreaCode} {record.cellNumber}
               </div> */}
               <div className="col-6 col-sm-3">
                      {record.date}
               </div>
               <div className="col-6 col-sm-3">
                      {record.status}
               </div>
                  </div>
                  <div className="row mt-3">
                  <div className="col-6 col-sm-3 mb-2">
                  <button className="buttonTable" onClick={()=>showModal(record)}>View</button>

                  </div>
                  <div className="col-6 col-sm-3 mb-2">
                  <button className="buttonTable" onClick={()=>onItemAction(record.id, 'PUT','member/registration/approve')}>Approve</button>

                  </div>
                  <div className="col-6 col-sm-3">
                  <button className="buttonTable" onClick={()=>onItemAction(record.id, 'PUT','member/registration/reject')}>Reject</button>

                  </div>

            </div>
            </div>
        </div>
    ),

    },
    ...columns,
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div className="col-6 col-sm-3">
        <div className="row">
          <div className="col-12">
          <button className="buttonTable" onClick={()=>onItemAction(record.id, 'PUT','member/registration/approve')}>Approve</button>

          </div>
          <div className="col-12 mt-3">
          <button className="buttonTable" onClick={()=>onItemAction(record.id, 'PUT','member/registration/reject')}>Reject</button>

            </div>
        </div>

      </div>
          // <button className="buttonTable" onClick={()=>onItemAction(record.id, 'PUT','member/registration/approve')}>Approve</button>
      ),
      responsive:['lg']    

    },
    // {
    //   title: 'Reject',
    //   key: 'reject',
    //   render: (text, record) => (
    //       <button className="buttonTable" onClick={()=>onItemAction(record.id, 'PUT','member/registration/reject')}>Reject</button>
    //   ),
    //   responsive:['lg']    

    // },

  ]
    return(
        <div className="row" style={{width:"100%"}}> 
        <div className="col-md-12">
        <h3 style={{margin:"30px auto 30px", paddingLeft:"15px"}}>Pending Form</h3>
        <Table dataSource={membershipData? membershipData.filter((data,key)=>data.status==='pending'):[]} columns={columnsPending} pagination={{ position: ['bottomCenter'] }}/>
        <h3 style={{margin:"30px auto 30px", paddingLeft:"15px"}}>Registered Form</h3>
        <Table dataSource={membershipData? membershipData.filter((data,key)=>data.status==='approved'):[]} columns={columnActionTaken} pagination={{ position: ['bottomCenter'] }}/>
        <h3 style={{margin:"30px auto 30px", paddingLeft:"15px"}}>Rejected Form</h3>
        <Table dataSource={membershipData? membershipData.filter((data,key)=>data.status==='rejected'):[]} columns={columnActionTaken} pagination={{ position: ['bottomCenter'] }}/>
       { isModalVisible? <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <RegistrationForm title='Form Data' value={record} imageId='updateBook' method="PUT"/>
        </Modal> : null}
        </div>
        
        </div>


    )
}
export default OurTeamDisplay;