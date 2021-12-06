import React from 'react';
import { Layout} from 'antd';
import { connect, useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Link,
    useRouteMatch,
} from "react-router-dom";
import './style.css'


const BodyLayout = (props) => {

    const dispatch = useDispatch()
    let { url } = useRouteMatch();
    
    const { Content } = Layout;
   
    return (
        <Layout >
            <div className="container">
            <Content
                className="adminBody"
                
            >
               {props.children}
            </Content>
            </div>
            
        </Layout>

    )
}
const mapStateToProps = state => ({
   


})

export default connect(mapStateToProps)(BodyLayout);