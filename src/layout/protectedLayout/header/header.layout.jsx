import React from 'react';
import { Layout} from 'antd';
import { connect, useDispatch } from 'react-redux';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { triggerSliderCollapse } from '../../../store/layoutStore/layoutStore.action';


const HeaderLayout = (props)=>{
    const { Header} = Layout;

    const dispatch = useDispatch()
    const toggle = () => {
        dispatch(triggerSliderCollapse())
    };
    return(
                    <Header className='site-header-background' style={{ padding: 0 }}>
                        <div className="HeaderContainer">
                            <div className="HeaderLeft">
                                {React.createElement(props.sliderCollapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: toggle,
                                })}
                            </div>

                        </div>

                    </Header>
    )
}
const mapStateToProps = state => ({
    
    sliderCollapse: state.layoutStore.sliderCollapse


})

export default connect(mapStateToProps)(HeaderLayout);