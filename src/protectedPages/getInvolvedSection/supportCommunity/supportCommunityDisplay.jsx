import React,{useState} from 'react';
import { Table, Modal, message } from 'antd';
import {dataSource } from './tableData';
import SupportCommunityForm from './supportCommunityForm';
import {server} from '../../../utils/fetch';
import { useDispatch, useSelector } from 'react-redux';
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import './styles.css';
import { fetchingGetInvolvedContentStarts } from '../../../store/getInvolvedStore/getInvolved.action';

const OurTeamDisplay = ()=>{
  const dispatch = useDispatch()
  const parsedToken = useSelector(state=>state.authStore.userToken)
  const supportCommunitySection= useSelector(state=>state.getInvolvedStore.supportCommunitySection)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [record, setRecord] = useState('')

   const onDeleteItem = async(id)=>{
    const key = 'updatable';
    message.loading({ content: 'Loading...', key });
    try {
      const res = await fetch(`${server}/getInvolved/supportPage`, {
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json','authorization': `Bearer ${parsedToken}`  },
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
      title: 'Work Name',
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
              <div className="row tableSmallContainer">
                  <div className="col-6 col-sm-3">
                  <a href={`${server}/${record.image}`} target='_blank'>{record.image}</a>

                  </div>
                  <div className="col-6 col-sm-3">
                      {record.name}
               </div>
               <div className="col-6 col-sm-3">
                      {record.address}
               </div>
               <div className="col-6 col-sm-3">
                      {record.phone}
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
      title: 'Index',
      dataIndex: 'sn',
      key: 'sn',
      ellipsis: true,
      responsive:['lg'],    
      sorter: (a, b) => new Date(a.date) -new Date(b.date),


    },
    {
      title: 'Work Image',
      dataIndex: 'image',
      key: 'image',
      responsive:['lg']   , 


      render: (text, record) => (
        <a href={`${server}/${record.image}`} target='_blank'>{record.image}</a>
    ),
    },
    {
      title: 'Work Detail',
      dataIndex: 'detail',
      key: 'detail',
      ellipsis: true,
      responsive:['lg']    

    },
    {
      title: 'Owner',
      dataIndex: 'name',
      key: 'name',
      responsive:['lg']    

    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      responsive:['lg']    

    },
    {
      title: 'Contact',
      dataIndex: 'phone',
      key: 'phone',
      responsive:['lg']    

     
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
        <h3 style={{margin:"30px auto 30px",paddingLeft:"15px"}}>Community Work Data</h3>
        <Table dataSource={supportCommunitySection? supportCommunitySection:[]} columns={columns} pagination={{ position: ['bottomCenter'] }}/>
       { isModalVisible? <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <SupportCommunityForm title='Update Community Work' value={record} imageId='updateCommunityImage' method="PUT"/>
        </Modal> : null}
        </div>
        
        </div>


    )
}
export default OurTeamDisplay;