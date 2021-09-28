import React from 'react';
import { Redirect, Route as ReactRoute } from 'react-router';
import Layout from '../../layout/publicLayout/publicLayout';

const RouteSuperComponent = (props)=>{
    // const userToken= useSelector(state=>state.authMode.userToken)
	//const accessToken = useSelector((state) => state.auth.accessToken);
    const renderRoute=(p)=>React.createElement(Layout, p, React.createElement(props.component, p))
	;

    const getRoute = () => {
		if (!props.path) {
			return;
		}
		// if(props.path==='/'){
		// 	return <Redirect to='/home' />;
		// }
		return <ReactRoute path={props.path} exact={props.exact} render={renderRoute} />
	};

    return(
        <div>
{getRoute()}
        </div>
    )
}
export default RouteSuperComponent;