import React, { Component, useState } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Logo from "../assests/Logo.png";
import ContactUs from "../Pages/ContactUs";
import './header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import {  Menu, Row, Col, Drawer, Button  } from 'antd';

const { SubMenu } = Menu;

const NavigationBar = () => {
const [clickMenu, handleClick] = useState('');
const [visible, handleVisible] = useState(false);


const onClose = () => {
handleVisible(false)
};
const showDrawer = () => {
  const temp= visible;
  handleVisible(!temp)
  };
  let history = useHistory();

  return (
    <div style={{position: "fixed",
      width: "100%", zIndex:"100", top:"0", left:"0",
      background: "rgba(0, 0, 0,0.6)", padding:"10px 0 0"}}>
      <Row style={{alignItems: "center",
    width: "85%",
    margin: "auto"}} >
        <Col span={8} onClick={()=>history.push('/')} style={{cursor:"pointer"}}>
        <img src={Logo} style={{ height: "80px", width: "80px" }}></img>
        </Col>
        <Col span={16} style={{textAlign:"right"}}>
        <Menu onClick={(e)=>handleClick(e.key)}  selectedKeys={[clickMenu]} mode="horizontal" className="mobileHidden">
      <Menu.Item key="Home" onClick={()=>history.push('/')}>
          Home
        </Menu.Item>
        <SubMenu key="About Us"  title="About us">
        <Menu.Item key="Our Story" onClick={()=>history.push('/About')}>Our Story</Menu.Item>
      <Menu.Item key="Vision&Mission" onClick={()=>history.push('/About')}>Vision&Mission</Menu.Item>
      <Menu.Item key="Our Team" onClick={()=>history.push('/About')}>Our Team</Menu.Item>
      <Menu.Item key="Gallery" onClick={()=>history.push('/About')}>Gallery</Menu.Item>

  </SubMenu>
  <SubMenu key="Events"  title="Events">
    
      <Menu.Item key="News" onClick={()=>history.push('/event/News')}>News</Menu.Item>
      <Menu.Item key="Blogs" onClick={()=>history.push('/event/blogs')}>Blogs</Menu.Item>
      <Menu.Item key="Our Articles" onClick={()=>history.push('/event/our-articles')}>Our Articles</Menu.Item>

  </SubMenu>
        <Menu.Item key="Publication" onClick={()=>history.push('/Publication')}>
         Publication
        </Menu.Item>
        <Menu.Item key="Get Involved" onClick={()=>history.push('/GetInvolved')}>
        Get Involved
        </Menu.Item>
        <Menu.Item key="Contact Us" onClick={()=>history.push('/')}>
       Contact Us
        </Menu.Item>
        
  
  </Menu>
  <div className="mobileVisible">
  <Button type="primary drawerButton" onClick={showDrawer}>
  {React.createElement(visible ? MenuUnfoldOutlined : MenuFoldOutlined)}

          </Button>
  <Drawer
          placement='top'
          //closable={true}
          onClose={onClose}
          visible={visible}
          key='drawer'
        >
          <Menu onClick={(e)=>handleClick(e.key)} selectedKeys={[clickMenu]} mode="vertical">
      <Menu.Item key="Home" onClick={()=>history.push('/')}>
          Home
        </Menu.Item>
        <SubMenu key="About Us"  title="About us">
        <Menu.Item key="Our Story">Our Story</Menu.Item>
      <Menu.Item key="Vision&Mission">Vision&Mission</Menu.Item>
      <Menu.Item key="Our Team">Our Team</Menu.Item>
      <Menu.Item key="Gallery">Gallery</Menu.Item>

  </SubMenu>
  <SubMenu key="Events"  title="Events" onClick={()=>history.push('/event')}>
    
      <Menu.Item key="News" onClick={()=>history.push('/event/news')}>News</Menu.Item>
      <Menu.Item key="Blogs" onClick={()=>history.push('/event/blogs')}>Blogs</Menu.Item>
      <Menu.Item key="Our Articles" onClick={()=>history.push('/')}>Our Articles</Menu.Item>

  </SubMenu>
        <Menu.Item key="Publication" onClick={()=>history.push('/Publication')}>
         Publication
        </Menu.Item>
        <Menu.Item key="Get Involved" onClick={()=>history.push('/GetInvolved')}>
        Get Involved
        </Menu.Item>
        <Menu.Item key="Contact Us" onClick={()=>history.push('/')}>
       Contact Us
        </Menu.Item>
        
  
  </Menu>
        </Drawer>
  </div>
  </Col>
  
        </Row>
     
{/* <Navbar
className="navbar-overlay"
expand="lg"
sticky="top"
style={{ float: "left", width: "100%" }}
>
<Container>
  <Navbar.Brand href="#home">
    <img src={Logo} style={{ height: "80px", width: "80px" }}></img>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse
    className="justify-content-end"
    id="responsive-navbar-nav"
  >
    <Nav className="me-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown> */}
    {/* </Nav>
    <Nav className="">
      <Nav.Link href="/" style={{ color: "#ffffff", fontFamily: "" }}>
        Home
      </Nav.Link>
      <Nav.Link
        href="/about"
        style={{ color: "#ffffff", fontFamily: "" }} className="aboutMenu"
      >
        About Us
        <div className="abouthover">
          <div className="innerMenu">
          <Nav.Link href="/" style={{ color: "#ffffff", fontFamily: "" }}>
          Our Story
      </Nav.Link>
          </div>
          <div className="innerMenu">
          <Nav.Link href="/" style={{ color: "#ffffff", fontFamily: "" }}>
          Vision&Mission
      </Nav.Link>
          </div>
          <div className="innerMenu">
          <Nav.Link href="/" style={{ color: "#ffffff", fontFamily: "" }}>
        Our Team
      </Nav.Link>
          </div>
          <div className="innerMenu">
          <Nav.Link href="/" style={{ color: "#ffffff", fontFamily: "" }}>
       Gallery */}
      {/* </Nav.Link>
          </div>
        </div>
      </Nav.Link>
      <Nav.Link
        href="/event"
        style={{ color: "#ffffff", fontFamily: "" }} className="eventMenu"
      >
        Event
        <div className="eventhover">
          <div className="innerMenu">
          <Nav.Link href="/" style={{ color: "#ffffff", fontFamily: "" }}>
          Our Story
      </Nav.Link>
          </div>
          <div className="innerMenu">
          <Nav.Link href="/" style={{ color: "#ffffff", fontFamily: "" }}>
          Vision&Mission
      </Nav.Link>
          </div>
          <div className="innerMenu">
          <Nav.Link href="/" style={{ color: "#ffffff", fontFamily: "" }}>
        Our Team
      </Nav.Link>
          </div>
          </div>
      </Nav.Link>
      <Nav.Link
        href="/publication"
        style={{ color: "#ffffff", fontFamily: "" }}
      >
        Publication
      </Nav.Link>
      <Nav.Link
        href="/GetInvolved"
        style={{ color: "#ffffff", fontFamily: "" }}
      >
        Get Involved
      </Nav.Link>
      <Nav.Link style={{ color: "#ffffff" }} onClick={ContactUs}>
        Contact Us
      </Nav.Link>
    </Nav> */}
  {/* </Navbar.Collapse>
</Container>
</Navbar>
 */} 
</div>
    
  );
};
export default NavigationBar;
