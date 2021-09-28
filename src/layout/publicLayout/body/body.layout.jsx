import React from 'react';
import { connect, useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Link,
    useRouteMatch,
} from "react-router-dom";


const BodyLayout = (props) => {

    const dispatch = useDispatch()
    let { url } = useRouteMatch();
    
   
    return (
       
       <div>{props.children}</div>
    )
}
const mapStateToProps = state => ({
   


})

export default connect(mapStateToProps)(BodyLayout);