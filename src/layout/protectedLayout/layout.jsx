import React from 'react';
import './layout.css';
import { Layout, message } from 'antd';
import Header from './header/header.layout';
import Slider from './slider/slider.layout';
import Body from './body/body.layout';

const AppLayout = (props) => {

       
        
        return (
            <Layout>
                <Slider />
                <Layout className="site-layout site-adjust" >
                    <Header />
                    <Body {...props}/>
                </Layout>
            </Layout>
        )
    }


export default AppLayout;
