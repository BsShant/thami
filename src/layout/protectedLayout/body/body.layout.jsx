import React from 'react';
import { Layout} from 'antd';
import { connect, useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Link,
    useRouteMatch,
} from "react-router-dom";


const BodyLayout = (props) => {

    const dispatch = useDispatch()
    let { url } = useRouteMatch();
    
    const { Content } = Layout;
   
    return (
        <Layout >
            
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    backgroundColor: '#f0f2f5',
                    minHeight: 280,
                }}
            >
               {props.children}
            </Content>
        </Layout>

    )
}
const mapStateToProps = state => ({
   


})

export default connect(mapStateToProps)(BodyLayout);