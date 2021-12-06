import React,{useState} from 'react';
import { Table, Modal, message } from 'antd';
import {dataSource } from './tableData';
import OurPartnersForm from './ourTeamForm';
import './styles.css';
import { useDispatch } from 'react-redux';
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import { useSelector } from 'react-redux';
import {server} from '../../../utils/fetch';
import { fetchingAboutContentStarts } from '../../../store/aboutStore/about.action';


const OurTeamDisplay = ()=>{
  const dispatch = useDispatch()
  const ourTeamSection = useSelector(state=>state.aboutStore.ourTeamSection)
  const parsedToken = useSelector(state=>state.authStore.userToken)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [record, setRecord] = useState('')

   const onDeleteItem = async(memberId)=>{
    const key = 'updatable';
    message.loading({ content: 'Loading...', key });
    try {
      const res = await fetch(`${server}/aboutUs/ourTeam`, {
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json','authorization': `Bearer ${parsedToken}`},
        body: JSON.stringify({
          memberId: memberId
        }) 
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
      dispatch(fetchingAboutContentStarts())


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
      title: 'Member Name',
      dataIndex: 'memberName',
      key: 'memberName',
      render: (text, record) => (
        <div>
          <div className="tableLarge">{record.memberName}</div>
          <div className="tableSmall">
            <div className="row tableSmallContainer">
              <div className="col-md-8">
              {record.memberName}
              </div>
              </div>
              <div className="row tableSmallContainer">
             
                  <div className="col-6 col-sm-6">
                  <a href={`${server}/${record.memberImage}`} target='_blank'>{record.memberImage}</a>

                  </div>
                  <div className="col-6 col-sm-6">
                    {record.memberRole}
                  </div>
                  <div className="col-6 col-sm-6">
                    {record.memberRank}
                  </div>
                  <div className="col-6 col-sm-6">
                    {record.phone}
                  </div>
                  <div className="col-6 col-sm-6">
                    {record.date}
                  </div>
                  </div>
                  <div className="row mt-3">
                  <div className="col-6 col-sm-3">
                  <button className="buttonTable" onClick={()=>showModal(record)}>Edit</button>

                  </div>
                  <div className="col-6 col-sm-3">
                  <button className="buttonTable" onClick={()=>onDeleteItem(record.memberId)}>Delete</button>

                  </div>

            </div>
            </div>
        </div>
    ),
    },
    {
      title: 'Member Image',
      dataIndex: 'memberImage',
      key: 'memberImage',
      render: (text, record) => (
        <a href={`${server}/${record.memberImage}`} target='_blank'>{record.memberImage}</a>
    ),
    responsive: ['lg']

    },
   
    {
      title: 'Member Detail',
      dataIndex: 'memberDetail',
      key: 'memberDetail',
      ellipsis: true,
      responsive: ['lg']

    },
    {
      title: 'Member Role',
      dataIndex: 'memberRole',
      key: 'memberRole',
      responsive: ['lg']

    },
    
    {
      title: 'Member Rank',
      dataIndex: 'memberRank',
      key: 'memberRank',
      responsive: ['lg'],
      sorter: (a, b) => a.memberRank -b.memberRank,


    },
    {
      title: 'Member Contact',
      dataIndex: 'phone',
      key: 'phone',
      responsive: ['lg'],

    },
    {
      title: 'Published Date',
      dataIndex: 'date',
      key: 'date',
      responsive: ['lg'],
      sorter: (a, b) => new Date(a.date) -new Date(b.date),


    },
    
    {
      title: 'Edit Member',
      key: 'editMember',
      render: (text, record) => (
          <button className="buttonTable" onClick={()=>showModal(record)}>Edit</button>
      ),
      responsive: ['lg']

    },
    {
      title: 'Delete Member',
      key: 'deleteMember',
      render: (text, record) => (
          <button className="buttonTable" onClick={()=>onDeleteItem(record.memberId)}>Delete</button>
      ),
      responsive: ['lg']

    },
  ];
    return(
      <div className="row" style={{width:"100%"}}> 
      <div className="col-md-12">
        <h3 style={{margin:"30px auto 30px", paddingLeft:"15px"}}>Our Team Data</h3>
        <Table dataSource={ourTeamSection? ourTeamSection: []} columns={columns} pagination={{ position: ['bottomCenter'] }}/>
       { isModalVisible? <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <OurPartnersForm title='Update Team Member' value={record} imageId='TeamUpdateImage' imageName='teamImage' method="PUT"/>
        </Modal> : null}
        </div>
        
        </div>


    )
}
export default OurTeamDisplay;