import React,{useState} from 'react';
import { Table, Modal, message } from 'antd';
import {dataSource } from './tableData';
import PhotoForm from './photoForm';
import parsedToken,{server} from '../../../utils/fetch';
import './styles.css';
import { useDispatch } from 'react-redux';
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import { useSelector } from 'react-redux';
import { fetchingAboutContentStarts } from '../../../store/aboutStore/about.action';
const PhotoDisplay = ()=>{
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
      title: 'Album Name',
      dataIndex: 'albumName',
      key: 'albumName',
      render: (text, record) => (
        <div>
          <div className="tableLarge">{record.albumName}</div>
          <div className="tableSmall">
            <div className="row tableSmallContainer">
              <div className="col-md-8">
              {record.albumName}
              </div>
              </div>
              <div className="row tableSmallContainer">
             
                  <div className="col-6 col-sm-6">
                  <a href={`${server}/${record.image1}`} target='_blank'>{record.image1}</a>

                  </div>
                  <div className="col-6 col-sm-6">
                  <a href={`${server}/${record.image2}`} target='_blank'>{record.image2}</a>

                  </div>
                  <div className="col-6 col-sm-6">
                  <a href={`${server}/${record.image3}`} target='_blank'>{record.image3}</a>

                  </div>
                  <div className="col-6 col-sm-6">
                  <a href={`${server}/${record.image4}`} target='_blank'>{record.image4}</a>

                  </div>
                  <div className="col-6 col-sm-6">
                  <a href={`${server}/${record.image5}`} target='_blank'>{record.image5}</a>

                  </div>
                  <div className="col-6 col-sm-6">
                  <a href={`${server}/${record.image6}`} target='_blank'>{record.image6}</a>

                  </div>
                  <div className="col-6 col-sm-6">
                  <a href={`${server}/${record.image7}`} target='_blank'>{record.image7}</a>

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
      title: 'Images',
      // dataIndex: 'partnerLogo',
      key: 'images',
      render: (text, record) => (
        <div className="row photoSmallContainer">
             
        <div className="col-6 col-sm-6">
        <a href={`${server}/${record.image1}`} target='_blank'>{record.image1}</a>

        </div>
        <div className="col-6 col-sm-6">
        <a href={`${server}/${record.image2}`} target='_blank'>{record.image2}</a>

        </div>
        <div className="col-6 col-sm-6">
        <a href={`${server}/${record.image3}`} target='_blank'>{record.image3}</a>

        </div>
        <div className="col-6 col-sm-6">
        <a href={`${server}/${record.image4}`} target='_blank'>{record.image4}</a>

        </div>
        <div className="col-6 col-sm-6">
        <a href={`${server}/${record.image5}`} target='_blank'>{record.image5}</a>

        </div>
        <div className="col-6 col-sm-6">
        <a href={`${server}/${record.image6}`} target='_blank'>{record.image6}</a>

        </div>
        <div className="col-6 col-sm-6">
        <a href={`${server}/${record.image7}`} target='_blank'>{record.image7}</a>

        </div>

       
        </div>
    ),
    responsive: ['lg']

    },
    {
      title: 'Album Detail',
      dataIndex: 'detail',
      key: 'detail',
      responsive: ['lg']

    },
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

        <h3 style={{margin:"30px auto 30px", paddingLeft:"15px"}}>Our Partners Data</h3>
        <Table dataSource={photosSection} columns={columns} pagination={{ position: ['bottomCenter'] }}/>
        {
        isModalVisible?
        <Modal title="" width={"70%"} footer={null} header={null} visible='true' onOk={handleOk} onCancel={handleCancel}>
        <PhotoForm title='Update Partner' label={record.title} imageId='partnersUpdateLogo' imageName='partnerLogo' value={record} method="PUT"/>
        </Modal>
        : null
        }
        </div>
        </div>


    )
}
export default PhotoDisplay;