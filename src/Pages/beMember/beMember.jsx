import React,{useState} from 'react';
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import thamigirls from "../../assests/thamigirls.jpg";
import aboutcard3 from "../../assests/aboutcard3.jpg";
import aboutcard4 from "../../assests/aboutcard4.jpg";
import aboutcard5 from "../../assests/aboutcard5.jpg";
import GoTOTop  from '../goToTop';
import card1image from "../../assests/fourthimg.jpeg";
import { Modal} from 'antd';
import MembershipForm from '../membershipModal/membership'

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
const BeMember=()=>{
    const history = useHistory();
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
        <div>
               <div className="beMemberBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
 Join Us        </h2>

               
              </div>    
              </Container>
              </div> 
              <div>
        <Container>
          <div
            className="row section"
            
          >
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12"style={{margin:"50px 0"}}>
              <h3 className="topTitle"
                style={{
                  fontWeight: "bold",
                  color: "#f6b745",
                }}
              >
                Be a Member
              </h3>
              <h2
              className="middleTitle"
                style={{
                  fontWeight: "bold",
                }}
              >
Why join our community?              </h2>
              <p
              className="paragraph"
                style={{
                  
                }}
              >
                Together, we can break the cycle of proverty, illiteracy, and
                low expectations. Support our service learning and education
                programs, serve with build on at home or abroad with your
                company, school, or family; sign up for build on updates so you
                never miss a chance to make difference.
              </p>
              <button
              className="buttonNormal"
              onClick={()=>showModal()}
// onClick={()=>history.push('/getinvolved/membership')}
                
              >
                Join Now
              </button>
              <Modal title="" footer={null} header={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <MembershipForm />
      </Modal>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <img src={card1image} style={{ height: "100%", width: "100%" }} />
            </div>
          </div>
        </Container>
      </div>
      <GoTOTop />
          </div>
)
}

export default BeMember;
