import React,{useState} from 'react';
import { Table, Modal, message } from 'antd';
import {dataSource } from './tableData';
import PhotoForm from './photoForm';
import './styles.css';
import { useDispatch } from 'react-redux';
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import { useSelector } from 'react-redux';
import {server} from '../../../utils/fetch';
import { fetchingAboutContentStarts } from '../../../store/aboutStore/about.action';


const OurTeamDisplay = ()=>{
  const dispatch = useDispatch()
  const photosSection = useSelector(state=>state.aboutStore.photosSection)
  const parsedToken = useSelector(state=>state.authStore.userToken)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [record, setRecord] = useState('')

   const onDeleteItem = async(id)=>{
    const key = 'updatable';
    message.loading({ content: 'Loading...', key });
    try {
      const res = await fetch(`${server}/aboutUs/photo`, {
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json','authorization': `Bearer ${parsedToken}`},
        body: JSON.stringify({
          id: id
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
      title: 'Image Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <div>
          <div className="tableLarge">{record.title}</div>
          <div className="tableSmall">
            <div className="row tableSmallContainer">
              <div className="col-md-8">
              {record.title}
              </div>
              </div>
              <div className="row tableSmallContainer">
             
                 
                  <div className="col-6 col-sm-6">
                  <a href={`${server}/${record.image}`} target='_blank'>{record.image}</a>

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
                  <button className="buttonTable" onClick={()=>onDeleteItem(record.id)}>Delete</button>

                  </div>

            </div>
            </div>
        </div>
    ),
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => (
        <a href={`${server}/${record.image}`} target='_blank'>{record.image}</a>
    ),
    responsive: ['lg']

    },
   
    // {
    //   title: 'Position',
    //   dataIndex: 'position',
    //   key: 'position',
    //   responsive: ['lg']

    // },
    
    
    {
      title: 'Published Date',
      dataIndex: 'date',
      key: 'date',
      responsive: ['lg'],
      sorter: (a, b) => new Date(a.date) -new Date(b.date),


    },
    
    {
      title: 'Edit',
      key: 'edit',
      render: (text, record) => (
          <button className="buttonTable" onClick={()=>showModal(record)}>Edit</button>
      ),
      responsive: ['lg']

    },
    {
      title: 'Delete',
      key: 'delete',
      render: (text, record) => (
          <button className="buttonTable" onClick={()=>onDeleteItem(record.id)}>Delete</button>
      ),
      responsive: ['lg']

    },
  ];
    return(
      <div className="row" style={{width:"100%"}}> 
      <div className="col-md-12" style={{padding:"0"}}>
        <h3 style={{margin:"30px auto 30px", paddingLeft:"15px"}}>Our Photo Data</h3>
        <Table dataSource={photosSection? photosSection: []} columns={columns} pagination={{ position: ['bottomCenter'] }}/>
       { isModalVisible? <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <PhotoForm title='Update Photo' value={record} imageId='updatePhoto' imageName='image' method="PUT"/>
        </Modal> : null}
        </div>
        
        </div>


    )
}
export default OurTeamDisplay;