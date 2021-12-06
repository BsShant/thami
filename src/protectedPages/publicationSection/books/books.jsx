import React,{useState} from 'react';
import '../styles.css';
import { Form, Input, Modal, Table, message } from 'antd';

import PageHeading from '../pageHeading';
import SectionHeading from '../sectionHeading';
import BooksDisplay from './booksDisplay';
import BooksForm from './booksForm';
import { server} from'../../../utils/fetch'
import GoTOTop from '../../../Pages/goToTop';
import { useSelector } from 'react-redux';

const OurBooks = ()=>{
  const booksPageHeading = useSelector(state=>state.publicationStore.booksPageHeading)
  const booksHeadingSection = useSelector(state=>state.publicationStore.booksHeadingSection)
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
        <h2>Our Books Page</h2>
        <PageHeading value={booksPageHeading} headingServer='publication/booksPageHeader' imageServer='publication/booksPageImage'/>
        <SectionHeading value={booksHeadingSection} sectionServer='publication/booksHeadingSection' title='Our Books Heading Section' />
        </div>
        <div className="col-md-12">
          <button onClick={showModal} className="buttonNormal">Add New Book</button>
        </div>

        <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <BooksForm title='Add new book' imageId='addNewBook' method="POST"/>
        </Modal>
        <BooksDisplay />
<GoTOTop />
    </div>
           
    )
}

export default OurBooks;