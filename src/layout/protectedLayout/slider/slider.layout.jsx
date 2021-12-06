import React, { useState } from 'react';
import { Layout, Menu} from 'antd';
import './style.css'
import {
    
    VideoCameraOutlined,
    UploadOutlined,
    
  UserOutlined,
} from '@ant-design/icons';
import Logo from '../../../assests/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBiking, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import {
    BrowserRouter as Router,
    Link,
    useHistory,
    useRouteMatch,
    useLocation
} from "react-router-dom";
import { triggerSliderCollapse } from '../../../store/layoutStore/layoutStore.action';
import { connect, useDispatch } from 'react-redux';


const SliderLayout = (props)=>{
    console.log("props",props)
    const dispatch = useDispatch()
    const toggle = () => {
        dispatch(triggerSliderCollapse())
    };
    const {url }= useRouteMatch()
    // console.log(useLocation())
    // console.log(useRouteMatch())

    const [clickMenu, handleClick] = useState('');

    const {Sider} = Layout;
    const { SubMenu } = Menu;
    const history = useHistory()
    const Icons = [<VideoCameraOutlined />, <UserOutlined />, <UploadOutlined />, <UserOutlined />]
    const [coun, setCount] = useState(1)
    const mySelected = url.split('/')[url.split('/').length-1]
    const myOpened = url.split('/')[2]
    console.log(myOpened)
   

return(
    <div>
{/* <Sider trigger={null} className="adminSlider bigSlider" collapsible collapsed={props.sliderCollapse} collapsedWidth={0} style={{
            overflow: 'auto',
            overflowX:'hidden',
            height: '100vh!important',
            position: 'fixed',
            left: 0,
            paddingBottom:"70px"
          }}>
 <div className="adminLogo">
                    <img src={Logo} className="adminLogo" style={{height:`${props.sliderCollapse? '90px' : '160px'}`}}/>
                </div>             */}
     {/* <Menu className="sliderMenu"  mode="inline" 
     onClick={(e)=>handleClick(e.key)}  
     selectedKeys={[mySelected]}             
     defaultOpenKeys={[myOpened]}
     defaultSelectedKeys={[mySelected]}
            // selectedKeys={[mySelected]}
            >
         <Menu.Item key="dashboard" onClick={()=>{history.push('/admin/dashboard')}}>
            Dashboard
        </Menu.Item>
        <Menu.Item key="home-section" onClick={()=>{history.push('/admin/home-section')}}>
             Home Section
        </Menu.Item>
        <SubMenu key="about-us"  title="About us">
            <Menu.Item key="our-story" onClick={()=>{history.push('/admin/about-us/our-story')}}>Our Story</Menu.Item>
            <Menu.Item key="vision-and-mission" onClick={()=>{history.push('/admin/about-us/vision-and-mission')}}>Vision&Mission</Menu.Item>
            <Menu.Item key="our-team" onClick={()=>{history.push('/admin/about-us/our-team')}}>Our Team</Menu.Item>
            <Menu.Item key="our-partners" onClick={()=>{history.push('/admin/about-us/our-partners')}}>Our Partners</Menu.Item>
        <Menu.Item key="gallery" onClick={()=>{history.push('/admin/about-us/gallery')}}>Gallery</Menu.Item>

        </SubMenu>
        <SubMenu key="event" title="Events" className="eventSubmenu ant-menu-submenu-placement-bottomCenter">

            <Menu.Item key="news" onClick={()=>{history.push('/admin/event/news')}}>News</Menu.Item>
            <Menu.Item key="blogs" onClick={()=>{history.push('/admin/event/blogs')}}>Blogs</Menu.Item>
            <Menu.Item key="our-articles" onClick={()=>{history.push('/admin/event/our-articles')}}>Our Articles</Menu.Item>

        </SubMenu>
        <SubMenu key="publication"  title="Publication">
            <Menu.Item key="our-books" onClick={()=>{history.push('/admin/publication/our-books')}}>Our Books</Menu.Item>
             <Menu.Item key="our-resources" onClick={()=>{history.push('/admin/publication/our-resources')}}>Our Resources</Menu.Item>
            <Menu.Item key="press-release" onClick={()=>{history.push('/admin/publication/press-release')}}>Press Release</Menu.Item>

        </SubMenu>
        <SubMenu key="get-involved"  title="Get Involved">
            <Menu.Item key="be-member" onClick={()=>{history.push('/admin/get-involved/be-member')}}>Be Member</Menu.Item>
            <Menu.Item key="support" onClick={()=>{ history.push('/admin/get-involved/support')}}>Support</Menu.Item>
            <Menu.Item key="donation" onClick={()=>{history.push('/admin/get-involved/donation')}}>Donation</Menu.Item>
            <Menu.Item key="support-community" onClick={()=>{history.push('/admin/get-involved/support-community')}}>Support Community</Menu.Item>
            <Menu.Item key="donation-info" onClick={()=>{history.push('/admin/get-involved/donation-info')}}>Donation Info</Menu.Item>

        </SubMenu>
        <Menu.Item key="contact-us" onClick={()=>{history.push('/admin/contact-us')}}>
            Contact Us
        </Menu.Item>
        <Menu.Item key="membership" onClick={()=>{history.push('/admin/membership')}}>
            Membership
        </Menu.Item>
    </Menu>
 </Sider> */}




 <Sider trigger={null} className="adminSlider smallSlider" collapsible collapsed={props.mobileCollapse} collapsedWidth={0} style={{
            overflow: 'auto',
            overflowX:'hidden',
            height: '100vh!important',
            position: 'fixed',
            left: 0,
            paddingBottom:"70px"
          }}>
 <div className="adminLogo mobileLogo">
     <div className="col-12"> <img src={Logo} className="adminLogo" style={{height:`100%`, width:"100%"}}/>
</div>
     <div style={{ position: "absolute",right: "6px",top: "2px"}}> <FontAwesomeIcon icon={faTimes} style={{fontSize:"30px", cursor:"pointer"}} onClick={toggle}/>
</div>

                </div>            
     <Menu className="sliderMenu"  mode="inline" 
     onClick={(e)=>handleClick(e.key)}  
     selectedKeys={[mySelected]}             
    //  defaultOpenKeys={[myOpened]}
     defaultSelectedKeys={[mySelected]}
            // selectedKeys={[mySelected]}
            >
         <Menu.Item key="dashboard" onClick={()=>{
             toggle()
             return history.push('/admin/dashboard')}}>
            Dashboard
        </Menu.Item>
        <Menu.Item key="home-section" onClick={()=>{
                         toggle()
            return history.push('/admin/home-section')}}>
             Home Section
        </Menu.Item>
        <SubMenu key="about-us"  title="About us">
            <Menu.Item key="our-story" onClick={()=>{
                             toggle()
                return history.push('/admin/about-us/our-story')}}>Our Story</Menu.Item>
            <Menu.Item key="vision-and-mission" onClick={()=>{
                             toggle()
                return history.push('/admin/about-us/vision-and-mission')}}>Vision&Mission</Menu.Item>
            <Menu.Item key="our-team" onClick={()=>{
                             toggle()
                return history.push('/admin/about-us/our-team')}}>Our Team</Menu.Item>
            <Menu.Item key="our-partners" onClick={()=>{
                             toggle()
                return history.push('/admin/about-us/our-partners')}}>Our Partners</Menu.Item>
        <Menu.Item key="gallery" onClick={()=>{
                         toggle()
            return history.push('/admin/about-us/gallery')}}>Gallery</Menu.Item>

        </SubMenu>
        <SubMenu key="event" title="Events" className="eventSubmenu ant-menu-submenu-placement-bottomCenter">

            <Menu.Item key="news" onClick={()=>{
                             toggle()
                return history.push('/admin/event/news')}}>News</Menu.Item>
            <Menu.Item key="blogs" onClick={()=>{
                             toggle()
                return history.push('/admin/event/blogs')}}>Blogs</Menu.Item>
            <Menu.Item key="our-articles" onClick={()=>{
                             toggle()
                return history.push('/admin/event/our-articles')}}>Our Articles</Menu.Item>

        </SubMenu>
        <SubMenu key="publication"  title="Publication">
            <Menu.Item key="our-books" onClick={()=>{
                             toggle()
                return history.push('/admin/publication/our-books')}}>Our Books</Menu.Item>
             <Menu.Item key="our-resources" onClick={()=>{
                              toggle()
                 return history.push('/admin/publication/our-resources')}}>Our Resources</Menu.Item>
            <Menu.Item key="press-release" onClick={()=>{
                             toggle()
                return history.push('/admin/publication/press-release')}}>Press Release</Menu.Item>

        </SubMenu>
        <SubMenu key="get-involved"  title="Get Involved">
            <Menu.Item key="be-member" onClick={()=>{
                             toggle()
                return history.push('/admin/get-involved/be-member')}}>Be Member</Menu.Item>
            <Menu.Item key="support" onClick={()=>{ 
                             toggle()
                return history.push('/admin/get-involved/support')}}>Support</Menu.Item>
            <Menu.Item key="donation" onClick={()=>{
                             toggle()
                return history.push('/admin/get-involved/donation')}}>Donation</Menu.Item>
            <Menu.Item key="support-community" onClick={()=>{
                             toggle()
                return history.push('/admin/get-involved/support-community')}}>Support Community</Menu.Item>
            <Menu.Item key="donation-info" onClick={()=>{
                             toggle()
                return history.push('/admin/get-involved/donation-info')}}>Donation Info</Menu.Item>

        </SubMenu>
        <Menu.Item key="contact-us" onClick={()=>{
                         toggle()
            return history.push('/admin/contact-us')}}>
            Contact Us
        </Menu.Item>
        <Menu.Item key="membership" onClick={()=>{
                         toggle()
            return history.push('/admin/membership')}}>
            Membership
        </Menu.Item>
        <Menu.Item key="footer" onClick={()=>{
                         toggle()
            return history.push('/admin/footer')}}>
            Footer
        </Menu.Item>
    </Menu>
 </Sider>
    </div>
    
    )
}
const mapStateToProps = state => ({
    sliderCollapse: state.layoutStore.sliderCollapse,
    mobileCollapse: state.layoutStore.mobileCollapse

})

export default connect(mapStateToProps)(SliderLayout);