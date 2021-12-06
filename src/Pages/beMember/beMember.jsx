import React,{useEffect, useState} from 'react';
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import thamigirls from "../../assests/thamigirls.jpg";
import aboutcard3 from "../../assests/aboutcard3.jpg";
import aboutcard4 from "../../assests/aboutcard4.jpg";
import aboutcard5 from "../../assests/aboutcard5.jpg";
import GoTOTop  from '../goToTop';
import card1image from "../../assests/fourthimg.jpeg";
import { Modal} from 'antd';
import MembershipForm from '../membershipModal/membershipDummy'
import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Membership from '../membership/membership';
import { server } from '../../utils/fetch';
const BeMember=()=>{
  const beMemberSection= useSelector(state=>state.getInvolvedStore.beMemberSection)
  const beMemberPageHeading= useSelector(state=>state.getInvolvedStore.beMemberPageHeading)

 
  const [viewport, handleViewport] = useState()
    const history = useHistory();
    const [isModalVisible, setIsModalVisible] = useState(false);
    // const changeViewport = ()=>{
    //   const stringViewPort = window.innerWidth.toString()
    //   handleViewport(stringViewPort)
    
    // }
useEffect(()=>{
  // window.addEventListener('resize', changeViewport)
},[])

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
        <div>
               <div className="beMemberBanner" style={{backgroundImage:`url(${beMemberPageHeading? beMemberPageHeading.image:null})`}}>
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
{beMemberPageHeading? beMemberPageHeading.pageHeading : null}
 {/* Join Us   */}
       </h2>
       <p style={{color:"white" }}>
       {beMemberPageHeading? beMemberPageHeading.pageSubHeading : null}

       </p>

               
              </div>    
              </Container>
              </div> 
              <div>
        <Container>
          <div
            className="row section"
            
          >
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-2 order-lg-1 order-sm-2 order-2"style={{margin:"50px 0"}}>
              <h3 className="topTitle"
                style={{
                  fontWeight: "bold",
                  color: "#f6b745",
                }}
              >
                {/* Be a Member */}
{beMemberSection? beMemberSection.topTitle : null}
              </h3>
              <h2
              className="middleTitle"
                style={{
                  fontWeight: "bold",
                }}
              >
                {beMemberSection? beMemberSection.heading : null}

{/* Why join our community?          */}
     </h2>
              <p
              className="paragraph"
                style={{
                  
                }}
              >
                {beMemberSection? beMemberSection.detail : null}

                {/* Together, we can break the cycle of proverty, illiteracy, and
                low expectations. Support our service learning and education
                programs, serve with build on at home or abroad with your
                company, school, or family; sign up for build on updates so you
                never miss a chance to make difference. */}
              </p>
              <button
              className="buttonNormal"
              onClick={()=>showModal()}
// onClick={()=>history.push('/getinvolved/membership')}
                
              >
                {beMemberSection? beMemberSection.buttonName : null}

                {/* Join Now */}
              </button>
              <Modal title="" width={"70%"} footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <MembershipForm />
      </Modal>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-1 order-lg-2 order-sm-1 order-1">
            <div style={{backgroundImage:`url(${beMemberSection? beMemberSection.image : null})`
              , backgroundSize:'cover'
              , backgroundPosition:'center', backgroundRepeat:'no-repeat', width:'100%', height:'100%', minHeight:'400px'}}>

              </div>
              {/* <img src={beMemberSection? beMemberSection.image: null} style={{ height: "100%", width: "100%" }} /> */}
            </div>
          </div>
        </Container>
      </div>
      <GoTOTop />
          </div>
)
}

export default BeMember;
