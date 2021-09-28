import React, { useState } from 'react';
import { Layout, Menu} from 'antd';
import './style.css'
import { connect} from 'react-redux';
import {
    
    VideoCameraOutlined,
    UploadOutlined,
    
  UserOutlined,
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Link,
    useHistory,
    useRouteMatch,
    useLocation
} from "react-router-dom";


const SliderLayout = (props)=>{
    const {url }= useRouteMatch()
    const {Sider} = Layout;
    const { SubMenu } = Menu;
    const history = useHistory()
    const Icons = [<VideoCameraOutlined />, <UserOutlined />, <UploadOutlined />, <UserOutlined />]
    const [coun, setCount] = useState(1)
    // const mySelected = url.split('/')[url.split('/').length-1]
    // const myOpened = url.split('/')[1]
   

return(
    <Sider trigger={null} collapsible collapsed={props.sliderCollapse} style={{
            overflow: 'auto',
            height: '100vh!important',
            position: 'fixed',
            left: 0,
          }}>
     <div className="logo" />
            
     <Menu style={{  backgroundColor:'#003e31', color:'white'}} mode="inline" 
            // defaultSelectedKeys={[mySelected]}
            // defaultOpenKeys={[myOpened]}
            // selectedKeys={[mySelected]}
            >
         <Menu.Item key="Dashboard" onClick={()=>{history.push('/admin/dashboard')}}>
            Dashboard
        </Menu.Item>
        <Menu.Item key="Home-Section" onClick={()=>{history.push('/admin/home-section')}}>
             Home Section
        </Menu.Item>
        <SubMenu key="About Us"  title="About us">
            <Menu.Item key="Our Story" onClick={()=>{history.push('/admin/about-us/our-story')}}>Our Story</Menu.Item>
            <Menu.Item key="Vision&Mission" onClick={()=>{}}>Vision&Mission</Menu.Item>
            <Menu.Item key="Our Team" onClick={()=>{}}>Our Team</Menu.Item>
            <Menu.Item key="Our Partners" onClick={()=>{}}>Our Partners</Menu.Item>
        <Menu.Item key="Gallery" onClick={()=>{}}>Gallery</Menu.Item>

        </SubMenu>
        <SubMenu key="Events" title="Events" className="eventSubmenu ant-menu-submenu-placement-bottomCenter">

            <Menu.Item key="News" onClick={()=>{}}>News</Menu.Item>
            <Menu.Item key="Blogs" onClick={()=>{}}>Blogs</Menu.Item>
            <Menu.Item key="Our Articles" onClick={()=>{}}>Our Articles</Menu.Item>

        </SubMenu>
        <SubMenu key="Publication"  title="Publication">
            <Menu.Item key="Our Books" onClick={()=>{}}>Our Books</Menu.Item>
             <Menu.Item key="Our Resources" onClick={()=>{}}>Our Resources</Menu.Item>
            <Menu.Item key="Press Release" onClick={()=>{}}>Press Release</Menu.Item>

        </SubMenu>
        <SubMenu key="Get Involved"  title="Get Involved">
            <Menu.Item key="Be Member" onClick={()=>{}}>Be Member</Menu.Item>
            <Menu.Item key="Support" onClick={()=>{ }}>Support</Menu.Item>
            <Menu.Item key="Donation" onClick={()=>{}}>Donation</Menu.Item>
        </SubMenu>
   
    </Menu>
 </Sider>
    )
}
const mapStateToProps = state => ({
    sliderCollapse: state.layoutStore.sliderCollapse
})

export default connect(mapStateToProps)(SliderLayout);