import React,{useState} from 'react';
import { Table, Modal, message } from 'antd';
import {dataSource } from './tableData';
import './styles.css';
import BlogsForm from './blogsForm';
import {server} from '../../../utils/fetch';
import { useDispatch } from 'react-redux';
import { logoutProcessStarts } from "../../../store/authStore/auth.action";
import { useSelector } from 'react-redux';
import { fetchingEventContentStarts } from '../../../store/eventStore/event.action';
const OurTeamDisplay = ()=>{
  const parsedToken = useSelector(state=>state.authStore.userToken)
  const blogsSection= useSelector(state=>state.eventStore.blogsSection)

  const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [record, setRecord] = useState('')

   const onDeleteItem = async(id)=>{
    const key = 'updatable';
    message.loading({ content: 'Loading...', key });
    try {
      const res = await fetch(`${server}/event/blogs`, {
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json','authorization': `Bearer ${parsedToken}` },
        body: JSON.stringify({
          id:id
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
      dispatch(fetchingEventContentStarts())


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
      title: 'Blog Title',
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
                    {record.authorName}
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
      title: 'Featured Image',
      dataIndex: 'image',
      key: 'image',

      render: (text, record) => (
        <a href={`${server}/${record.image}`} target='_blank'>{record.image}</a>
    ),
    responsive: ['lg']

    },
    {
      title: 'Author Name',
      dataIndex: 'authorName',
      key: 'authorName',
      responsive: ['lg']

    },
   
    // {
    //   title: 'Blog Detail',
    //   dataIndex: 'detail',
    //   key: 'detail',
    //   ellipsis: true,
    //   responsive: ['lg']

    // },
    {
      title: 'Published date',
      dataIndex: 'date',
      key: 'date',
      responsive: ['lg'],
      sorter: (a, b) => new Date(a.date) -new Date(b.date),


    },
    {
      title: 'Button Name',
      dataIndex: 'buttonName',
      key: 'buttonName',
      responsive: ['lg']


    },
    {
      title: 'Edit Blog',
      key: 'editBlog',
      render: (text, record) => (
          <button className="buttonTable" onClick={()=>showModal(record)}>Edit</button>
      ),
      responsive: ['lg']

    },
    {
      title: 'Delete Blog',
      key: 'deleteBlog',
      render: (text, record) => (
          <button className="buttonTable" onClick={()=>onDeleteItem(record.id)}>Delete</button>
      ),
      responsive: ['lg']

    },
  ];
    return(
        <div className="row" style={{width:"100%"}}> 
        <div className="col-md-12">
        <h3 style={{margin:"30px auto 30px", paddingLeft:"15px"}}>Blogs Data</h3>
        <Table dataSource={blogsSection? blogsSection: []} columns={columns} pagination={{ position: ['bottomCenter'] }}/>
       { isModalVisible? <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <BlogsForm title='Update Blog Post' value={record} imageId='updateBlogImage' method="PUT"/>
        </Modal> : null}
        </div>
        
        </div>


    )
}
export default OurTeamDisplay;