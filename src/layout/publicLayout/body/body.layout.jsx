import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    useRouteMatch,
} from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';


const BodyLayout = (props) => {

    const dispatch = useDispatch()
    const mobileCollapse= useSelector(state=>state.layoutStore.mobileCollapse)

    let { url } = useRouteMatch();
    
   
    return (
       
       <div style={{marginLeft:"0"}}>{props.children}</div>
    )
}
const mapStateToProps = state => ({
   


})

export default connect(mapStateToProps)(BodyLayout);