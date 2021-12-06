import React from 'react';
import './layout.css';
import { Layout, message } from 'antd';
import Header from './header/header.layout';
import Slider from './slider/slider.layout';
import Body from './body/body.layout';
import { connect, useDispatch, useSelector } from 'react-redux';

const AppLayout = (props) => {
    const sliderCollapse= useSelector(state=>state.layoutStore.sliderCollapse)

       
        
        return (
            <Layout>
               
                <Slider />
                <Layout className="site-layout site-adjust" style={{marginLeft:`0px`}}>
                    <Header />
                    <Body {...props}/>
                </Layout>
            </Layout>
        )
    }


export default AppLayout;
