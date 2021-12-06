import React from 'react';
import { Redirect, Route as ReactRoute } from 'react-router';
import Layout from '../../layout/protectedLayout/layout';
import NoLayout from '../../layout/protectedLayout/noLayout';

import { useSelector } from 'react-redux';

const RouteSuperComponent = (props)=>{
    const user= useSelector(state=>state.userStore.user)
	// const data = localStorage.getItem("user")
	// const user = JSON.parse(data)
	//const accessToken = useSelector((state) => state.auth.accessToken);
    const renderRoute=(p)=>React.createElement(props.noLayout? NoLayout: Layout, p, React.createElement(props.component, p))
	;

    const getRoute = () => {
		// if (!props.path) {
		// 	return;
		// }
		if(props.path==='/admin'){
			if(!user){
				return <Redirect to='/login' />;
			}
			return <Redirect to='/admin/dashboard' />;
		}
		if(props.path==='/login'){
			if(user){
				return <Redirect to='/admin/dashboard' />;

			}
			return <ReactRoute path={props.path} exact={props.exact} render={renderRoute} />

		}
		
		// if(props.path==='/admin'){
		// 	if(user){
		// 		return <Redirect to='/admin/dashboard' />;
		// 	}
		// 	else{
		// 		return <Redirect to='/admin/login' />;

		// 	}

		// }
		if(props.public){
			return <ReactRoute path={props.path} exact={props.exact} render={renderRoute} />
		}
		if(!user){
			
			return <Redirect to='/login' />;

		}
		return <ReactRoute path={props.path} exact={props.exact} render={renderRoute} />

		// return <ReactRoute path={props.path} exact={props.exact} render={renderRoute} />

	};

    return(
        <div>
{getRoute()}
        </div>
    )
}
export default RouteSuperComponent;