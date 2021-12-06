import React,{useState} from 'react';
import { Layout} from 'antd';
import { connect, useDispatch } from 'react-redux';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined, UserOutlined
} from '@ant-design/icons';
import { Form, Input, Button, Checkbox, message,Dropdown, Menu, Avatar} from 'antd';

import './style.css';
import { triggerSliderCollapse } from '../../../store/layoutStore/layoutStore.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars } from '@fortawesome/free-solid-svg-icons';
import { logoutProcessStarts } from '../../../store/authStore/auth.action';
import {
    BrowserRouter as Router,
    
    useHistory,
  
} from "react-router-dom";
const HeaderLayout = (props)=>{
    const [selectedKey, setSelectedKey] = useState('')
    const { Header} = Layout;
    const history = useHistory()

    const dispatch = useDispatch()
    const toggle = () => {
        dispatch(triggerSliderCollapse())
    };
    const menu =<Menu className="headerDropdown" 
    // selectedKeys={[selectedKey]} 
    onClick={(e)=>setSelectedKey(e.key)}>
                <Menu.Item key="setting" onClick={()=>history.push('/admin/setting')}>Setting</Menu.Item>
                 <Menu.Item key="logout" onClick={()=>dispatch(logoutProcessStarts())}>Logout</Menu.Item>
                </Menu>

    return(
                    <Header className='adminHeader' style={{ height:"75px" }}>
                        <div className="container adminHead">
                            <div className="" style={{padding:"0"}}>
                                <FontAwesomeIcon icon={faBars} onClick={toggle} className="trigger"/>
                                
                            </div>
                        <div className="" style={{padding:"0", display:"flex", justifyContent:"flex-end"}}>
    
                    <Dropdown  style={{width:"50px"}} overlay={menu} trigger={['click']} placement='bottomRight'>
                        <Avatar
                         style={{ backgroundColor: '#f6b745', cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} size="large" icon={<UserOutlined />} />
                    </Dropdown>
                            </div>

                        </div>
                       

                    </Header>
    )
}
const mapStateToProps = state => ({
    
    sliderCollapse: state.layoutStore.sliderCollapse


})

export default connect(mapStateToProps)(HeaderLayout);