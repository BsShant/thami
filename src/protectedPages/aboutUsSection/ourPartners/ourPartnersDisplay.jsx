import React,{useState} from 'react';
import { Table, Modal, message } from 'antd';
import {dataSource } from './tableData';
import OurPartnersForm from './ourPartnersForm';
import {server} from '../../../utils/fetch';
import './styles.css';
import { useDispatch } from 'react-redux';
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import { useSelector } from 'react-redux';
import { fetchingAboutContentStarts } from '../../../store/aboutStore/about.action';

const OurPartnersDisplay = ()=>{
  const ourPartnersSection = useSelector(state=>state.aboutStore.ourPartnersSection)
  const dispatch = useDispatch()
  const parsedToken = useSelector(state=>state.authStore.userToken)


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [record, setRecord] = useState('')
    const onDeleteItem = async(id)=>{
      const key = 'updatable';
      message.loading({ content: 'Loading...', key });
      try {
        const res = await fetch(`${server}/aboutUs/ourPartners`, {
          method: 'DELETE', 
          headers: { 'Content-Type': 'application/json','authorization': `Bearer ${parsedToken}` },
          body: JSON.stringify({
            partnerId:id
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
      title: 'Partner Name',
      dataIndex: 'partnerName',
      key: 'partnerName',
      render: (text, record) => (
        <div>
          <div className="tableLarge">{record.partnerName}</div>
          <div className="tableSmall">
            <div className="row tableSmallContainer">
              <div className="col-md-8">
              {record.partnerName}
              </div>
              </div>
              <div className="row tableSmallContainer">
             
                  <div className="col-6 col-sm-6">
                  <a href={`${server}/${record.image}`} target='_blank'>{record.partnerLogo}</a>

                  </div>

                  <div className="col-6 col-sm-6">
                    {record.address}
                  </div>
                  <div className="col-6 col-sm-6">
                    {record.rank}
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
                  <button className="buttonTable" onClick={()=>onDeleteItem(record.partnerId)}>Delete</button>

                  </div>

            </div>
            </div>
        </div>
    ),
    },
    {
      title: 'Partner Logo',
      dataIndex: 'partnerLogo',
      key: 'partnerLogo',
      render: (text, record) => (
        <a href={`${server}/${record.partnerLogo}`} target='_blank'>{record.partnerLogo}</a>
    ),
    responsive: ['lg']

    },
    {
      title: 'Partner Address',
      dataIndex: 'address',
      key: 'addrress',
      responsive: ['lg'],

    },
    {
      title: 'Partner Rank',
      dataIndex: 'rank',
      key: 'rank',
      responsive: ['lg'],
      sorter: (a, b) => a.rank -b.rank,


    },
    {
      title: 'Published Date',
      dataIndex: 'date',
      key: 'date',
      responsive: ['lg'],
      sorter: (a, b) => new Date(a.date) -new Date(b.date),

    },
    {
      title: 'Edit Partner',
      key: 'editPartner',
      render: (text, record) => (
          <button className="buttonTable" onClick={()=>showModal(record)}>Edit</button>
      ),
      responsive: ['lg']

    },
    {
      title: 'Delete Partner',
      key: 'deletePartner',
      render: (text, record) => (
          <button className="buttonTable" onClick={()=>onDeleteItem(record.partnerId)}>Delete</button>
      ),
      responsive: ['lg']

    },
  ];
    return(
        <div className="row" style={{width:"100%"}}> 
                <div className="col-md-12">

        <h3 style={{margin:"30px auto 30px", paddingLeft:"15px"}}>Our Partners Data</h3>
        <Table dataSource={ourPartnersSection? ourPartnersSection:null} columns={columns} pagination={{ position: ['bottomCenter'] }}/>
        {
        isModalVisible?
        <Modal title="" width={"70%"} footer={null} header={null} visible='true' onOk={handleOk} onCancel={handleCancel}>
        <OurPartnersForm title='Update Partner' label={record.title} imageId='partnersUpdateLogo' imageName='partnerLogo' value={record} method="PUT"/>
        </Modal>
        : null
        }
        </div>
        </div>


    )
}
export default OurPartnersDisplay;