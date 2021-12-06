import React, { Component, useState, useEffect } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Logo from "../assests/Logo.png";
import ContactUs from "../Pages/ContactUs";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBiking, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  WindowsFilled,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";

import { Menu, Row, Col, Drawer, Button } from "antd";
import { publicMenuClickTrigger } from "../store/menuStore/menuStore.action";

const { SubMenu } = Menu;

const NavigationBar = () => {
  const dispatch = useDispatch();
  const clickMenu = useSelector((state) => state.menuStore.publicMenuClick);
  const { url } = useRouteMatch();

  // const [clickMenu, setClickMenu] = useState('');
  const [visible, handleVisible] = useState(false);
  const [scroll, handleScroll] = useState();
  const handleClick = (e) => {
    //   console.log("gu",e)
    //   console.log(clickMenu)
    // return dispatch(publicMenuClickTrigger(e))
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    const myselected =
      url.split("/")[url.split("/").length - 1] === ""
        ? "home"
        : url.split("/")[url.split("/").length - 1];
    // const mySelected = url.split('/')[url.split('/').length-1]

    dispatch(publicMenuClickTrigger(myselected));
  }, []);
  const scrollFunction = () => {
    handleScroll(window.pageYOffset);
  };

  const onClose = () => {
    handleVisible(false);
  };
  const showDrawer = () => {
    const temp = visible;
    handleVisible(!temp);
  };
  let history = useHistory();

  return (
    <div>
      <div
        style={{
          position: "fixed",
          visibility: `${scroll > 683 ? "visible" : "hidden"}`,
          height: `${scroll > 683 ? "85px" : "0px"}`,
          transition: "all 500ms ease",
          width: "100vw",
          overflowX: "hidden",
          zIndex: "100",
          top: "0",
          left: "0",
          background: "rgba(0, 0, 0,1)",
          padding: "8px 8px 8px",
        }}
      >
        <Container>
          <Row>
            <Col
              span={8}
              onClick={() => history.push("/")}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={Logo} style={{ height: "80px", width: "80px" }}></img>
            </Col>
            <Col
              span={16}
              style={{
                textAlign: "right",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Menu
                onClick={(e) => handleClick(e.key)}
                defaultSelectedKeys={[clickMenu]}
                selectedKeys={[clickMenu]}
                mode="horizontal"
                className="mobileHidden"
              >
                <Menu.Item key="home" onClick={() => history.push("/")}>
                  Home
                </Menu.Item>
                <SubMenu key="about-us" title="About us">
                  <Menu.Item
                    key="our-story"
                    onClick={() => history.push("/about/our-story")}
                  >
                    Our Story
                  </Menu.Item>
                  <Menu.Item
                    key="vision-and-mission"
                    onClick={() => history.push("/about/vision-and-mission")}
                  >
                    Vision&Mission
                  </Menu.Item>
                  <Menu.Item
                    key="our-team"
                    onClick={() => history.push("/about/our-team")}
                  >
                    Our Team
                  </Menu.Item>
                  <Menu.Item
                    key="our-partners"
                    onClick={() => history.push("/about/our-partners")}
                  >
                    Our Partners
                  </Menu.Item>
                  <Menu.Item
                    key="our-gallery"
                    onClick={() => history.push("/about/our-gallery")}
                  >
                    Gallery
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="Events" title="Events">
                  <Menu.Item
                    key="news"
                    onClick={() => history.push("/event/news")}
                  >
                    News
                  </Menu.Item>
                  <Menu.Item
                    key="blogs"
                    onClick={() => history.push("/event/blogs")}
                  >
                    Blogs
                  </Menu.Item>
                  <Menu.Item
                    key="our-articles"
                    onClick={() => history.push("/event/our-articles")}
                  >
                    Our Articles
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="publication" title="Publication">
                  <Menu.Item
                    key="our-books"
                    onClick={() => history.push("/publication/our-books")}
                  >
                    Our Books
                  </Menu.Item>
                  <Menu.Item
                    key="our-resources"
                    onClick={() => history.push("/publication/our-resources")}
                  >
                    Our Resources
                  </Menu.Item>
                  <Menu.Item
                    key="press-release"
                    onClick={() => history.push("/publication/press-release")}
                  >
                    Press Release
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="get-involved" title="Get Involved">
                  <Menu.Item
                    key="be-a-member"
                    onClick={() => history.push("/getInvolved/be-a-member")}
                  >
                    Be a Member
                  </Menu.Item>
                  <Menu.Item
                    key="support"
                    onClick={() => history.push("/getInvolved/support")}
                  >
                    Support
                  </Menu.Item>
                  <Menu.Item
                    key="donation"
                    onClick={() => history.push("/getInvolved/donation")}
                  >
                    Donation
                  </Menu.Item>
                </SubMenu>
                {/* <Menu.Item key="Get Involved" onClick={()=>history.push('/GetInvolved')}>
      Get Involved
      </Menu.Item> */}
                <Menu.Item
                  key="contact-us"
                  onClick={() => history.push("/contact-us")}
                >
                  Contact Us
                </Menu.Item>
              </Menu>
              <div className="mobileVisible">
                <Button type="primary drawerButton" onClick={showDrawer}>
                  <FontAwesomeIcon icon={faBars} />
                </Button>
                <Drawer
                  placement="top"
                  // closable={true}
                  onClose={onClose}
                  visible={visible}
                  height="100vh"
                  key="drawer"
                >
                  <Menu
                    onClick={(e) => handleClick(e.key)}
                    selectedKeys={[clickMenu]}
                    mode="inline"
                  >
                    <Menu.Item
                      key="home"
                      onClick={() => {
                        history.push("/");
                        return handleVisible(false);
                      }}
                    >
                      Home
                    </Menu.Item>
                    <SubMenu key="about-us" title="About us">
                      <Menu.Item
                        key="our-story"
                        onClick={() => {
                          history.push("/about/our-story");
                          return handleVisible(false);
                        }}
                      >
                        Our Story
                      </Menu.Item>
                      <Menu.Item
                        key="vision-and-mission"
                        onClick={() => {
                          history.push("/about/vision-and-mission");
                          return handleVisible(false);
                        }}
                      >
                        Vision&Mission
                      </Menu.Item>
                      <Menu.Item
                        key="our-team"
                        onClick={() => {
                          history.push("/about/our-team");
                          return handleVisible(false);
                        }}
                      >
                        Our Team
                      </Menu.Item>
                      <Menu.Item
                        key="our-partners"
                        onClick={() => {
                          history.push("/about/our-partners");
                          return handleVisible(false);
                        }}
                      >
                        Our Partners
                      </Menu.Item>
                      <Menu.Item
                        key="our-gallery"
                        onClick={() => {
                          history.push("/about/our-gallery");
                          return handleVisible(false);
                        }}
                      >
                        Gallery
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="events"
                      placement="bottomCenter"
                      title="Events"
                      className="eventSubmenu ant-menu-submenu-placement-bottomCenter"
                    >
                      <Menu.Item
                        key="news"
                        onClick={() => {
                          history.push("/event/news");
                          return handleVisible(false);
                        }}
                      >
                        News
                      </Menu.Item>
                      <Menu.Item
                        key="blogs"
                        onClick={() => {
                          history.push("/event/blogs");
                          return handleVisible(false);
                        }}
                      >
                        Blogs
                      </Menu.Item>
                      <Menu.Item
                        key="our-articles"
                        onClick={() => {
                          history.push("/event/our-articles");
                          return handleVisible(false);
                        }}
                      >
                        Our Articles
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu key="publication" title="Publication">
                      <Menu.Item
                        key="our-books"
                        onClick={() => {
                          history.push("/publication/our-books");
                          return handleVisible(false);
                        }}
                      >
                        Our Books
                      </Menu.Item>
                      <Menu.Item
                        key="our-resources"
                        onClick={() => {
                          history.push("/publication/our-resources");
                          return handleVisible(false);
                        }}
                      >
                        Our Resources
                      </Menu.Item>
                      <Menu.Item
                        key="Press Release"
                        onClick={() => {
                          history.push("/publication/press-release");
                          return handleVisible(false);
                        }}
                      >
                        Press Release
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu key="get-involved" title="Get Involved">
                      <Menu.Item
                        key="be-a-member"
                        onClick={() => {
                          history.push("/getInvolved/be-a-member");
                          return handleVisible(false);
                        }}
                      >
                        Be a Member
                      </Menu.Item>
                      <Menu.Item
                        key="support"
                        onClick={() => {
                          history.push("/getInvolved/support");
                          return handleVisible(false);
                        }}
                      >
                        Support
                      </Menu.Item>
                      <Menu.Item
                        key="donation"
                        onClick={() => {
                          history.push("/getInvolved/donation");
                          return handleVisible(false);
                        }}
                      >
                        Donation
                      </Menu.Item>
                    </SubMenu>

                    {/* <Menu.Item key="Get Involved" onClick={()=>{history.push('/getInvolved')
      return handleVisible(false)
    }}>
      Get Involved
      </Menu.Item> */}
                    <Menu.Item
                      key="contact-us"
                      onClick={() => {
                        history.push("/contact-us");
                        return handleVisible(false);
                      }}
                    >
                      Contact Us
                    </Menu.Item>
                  </Menu>
                </Drawer>
              </div>
            </Col>
          </Row>
        </Container>

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

      <div
        style={{
          width: "100%",
          position: "absolute",
          zIndex: "100",
          background: "rgba(0, 0, 0,0.1)",
          padding: "10px 0 10px",
        }}
      >
        <Container>
          <Row>
            <Col
              span={8}
              onClick={() => history.push("/")}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={Logo} style={{ height: "80px", width: "80px" }}></img>
            </Col>
            <Col
              span={16}
              style={{
                textAlign: "right",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Menu
                onClick={(e) => handleClick(e.key)}
                selectedKeys={[clickMenu]}
                mode="horizontal"
                className="mobileHidden"
              >
                <Menu.Item key="home" onClick={() => history.push("/")}>
                  Home
                </Menu.Item>
                <SubMenu key="about-us" title="About us">
                  <Menu.Item
                    key="our-story"
                    onClick={() => history.push("/about/our-story")}
                  >
                    Our Story
                  </Menu.Item>
                  <Menu.Item
                    key="vision-and-mission"
                    onClick={() => history.push("/about/vision-and-mission")}
                  >
                    Vision&Mission
                  </Menu.Item>
                  <Menu.Item
                    key="our-team"
                    onClick={() => history.push("/about/our-team")}
                  >
                    Our Team
                  </Menu.Item>
                  <Menu.Item
                    key="our-partners"
                    onClick={() => history.push("/about/our-partners")}
                  >
                    Our Partners
                  </Menu.Item>

                  <Menu.Item
                    key="our-gallery"
                    onClick={() => history.push("/about/our-gallery")}
                  >
                    Gallery
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="events" title="Events">
                  <Menu.Item
                    key="news"
                    onClick={() => history.push("/event/News")}
                  >
                    News
                  </Menu.Item>
                  <Menu.Item
                    key="blogs"
                    onClick={() => history.push("/event/blogs")}
                  >
                    Blogs
                  </Menu.Item>
                  <Menu.Item
                    key="our-articles"
                    onClick={() => history.push("/event/our-articles")}
                  >
                    Our Articles
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="publication" title="Publication">
                  <Menu.Item
                    key="our-books"
                    onClick={() => history.push("/publication/our-books")}
                  >
                    Our Books
                  </Menu.Item>
                  <Menu.Item
                    key="our-resources"
                    onClick={() => history.push("/publication/our-resources")}
                  >
                    Our Resources
                  </Menu.Item>
                  <Menu.Item
                    key="press-release"
                    onClick={() => history.push("/publication/press-release")}
                  >
                    Press Release
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="get-involved" title="Get Involved">
                  <Menu.Item
                    key="be-a-member"
                    onClick={() => history.push("/getInvolved/be-a-member")}
                  >
                    Be a Member
                  </Menu.Item>
                  <Menu.Item
                    key="support"
                    onClick={() => history.push("/getInvolved/support")}
                  >
                    Support
                  </Menu.Item>
                  <Menu.Item
                    key="donation"
                    onClick={() => history.push("/getInvolved/donation")}
                  >
                    Donation
                  </Menu.Item>
                </SubMenu>
                {/* <Menu.Item key="Get Involved" onClick={()=>history.push('/GetInvolved')}>
        Get Involved
        </Menu.Item> */}
                <Menu.Item
                  key="contact-us"
                  onClick={() => history.push("/contact-us")}
                >
                  Contact Us
                </Menu.Item>
              </Menu>
              <div className="mobileVisible">
                <Button type="primary drawerButton" onClick={showDrawer}>
                  <FontAwesomeIcon icon={faBars} />
                </Button>
                <Drawer
                  placement="top"
                  // closable={true}
                  onClose={onClose}
                  visible={visible}
                  height="100vh"
                  key="drawer"
                >
                  <Menu
                    onClick={(e) => handleClick(e.key)}
                    selectedKeys={[clickMenu]}
                    mode="inline"
                  >
                    <Menu.Item
                      key="home"
                      onClick={() => {
                        history.push("/");
                        return handleVisible(false);
                      }}
                    >
                      Home
                    </Menu.Item>
                    <SubMenu key="about-us" title="About us">
                      <Menu.Item
                        key="our-story"
                        onClick={() => {
                          history.push("/about/our-story");
                          return handleVisible(false);
                        }}
                      >
                        Our Story
                      </Menu.Item>
                      <Menu.Item
                        key="vision-and-mission"
                        onClick={() => {
                          history.push("/about/vision-and-mission");
                          return handleVisible(false);
                        }}
                      >
                        Vision&Mission
                      </Menu.Item>
                      <Menu.Item
                        key="our-team"
                        onClick={() => {
                          history.push("/about/our-team");
                          return handleVisible(false);
                        }}
                      >
                        Our Team
                      </Menu.Item>
                      <Menu.Item
                        key="our-partners"
                        onClick={() => {
                          history.push("/about/our-partners");
                          return handleVisible(false);
                        }}
                      >
                        Our Partners
                      </Menu.Item>
                      <Menu.Item
                        key="our-gallery"
                        onClick={() => {
                          history.push("/about/our-gallery");
                          return handleVisible(false);
                        }}
                      >
                        Gallery
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="events"
                      placement="bottomCenter"
                      title="Events"
                      className="eventSubmenu ant-menu-submenu-placement-bottomCenter"
                    >
                      <Menu.Item
                        key="news"
                        onClick={() => {
                          history.push("/event/news");
                          return handleVisible(false);
                        }}
                      >
                        News
                      </Menu.Item>
                      <Menu.Item
                        key="blogs"
                        onClick={() => {
                          history.push("/event/blogs");
                          return handleVisible(false);
                        }}
                      >
                        Blogs
                      </Menu.Item>
                      <Menu.Item
                        key="our-articles"
                        onClick={() => {
                          history.push("/event/our-articles");
                          return handleVisible(false);
                        }}
                      >
                        Our Articles
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu key="publication" title="Publication">
                      <Menu.Item
                        key="our-books"
                        onClick={() => {
                          history.push("/publication/our-books");
                          return handleVisible(false);
                        }}
                      >
                        Our Books
                      </Menu.Item>
                      <Menu.Item
                        key="our-resources"
                        onClick={() => {
                          history.push("/publication/our-resources");
                          return handleVisible(false);
                        }}
                      >
                        Our Resources
                      </Menu.Item>
                      <Menu.Item
                        key="press-release"
                        onClick={() => {
                          history.push("/publication/press-release");
                          return handleVisible(false);
                        }}
                      >
                        Press Release
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu key="get-involved" title="Get Involved">
                      <Menu.Item
                        key="be-a-member"
                        onClick={() => {
                          history.push("/getInvolved/be-a-member");
                          return handleVisible(false);
                        }}
                      >
                        Be a Member
                      </Menu.Item>
                      <Menu.Item
                        key="support"
                        onClick={() => {
                          history.push("/getInvolved/support");
                          return handleVisible(false);
                        }}
                      >
                        Support
                      </Menu.Item>
                      <Menu.Item
                        key="donation"
                        onClick={() => {
                          history.push("/getInvolved/donation");
                          return handleVisible(false);
                        }}
                      >
                        Donation
                      </Menu.Item>
                    </SubMenu>

                    <Menu.Item
                      key="contact-us"
                      onClick={() => {
                        history.push("/contact-us");
                        return handleVisible(false);
                      }}
                    >
                      Contact Us
                    </Menu.Item>
                  </Menu>
                </Drawer>
              </div>
            </Col>
          </Row>
        </Container>

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
    </div>
  );
};
export default NavigationBar;
