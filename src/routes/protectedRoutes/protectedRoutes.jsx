import React from 'react';
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Dashboard from '../../protectedPages/dashboard/adminDashboard';
import HomeSection from '../../protectedPages/homepageSection/homepageSection';
import Login from '../../protectedPages/login/login.page';
import SuperRoute from '../../component/privateRoute/index';
const ProtectedRoutes = ()=>{

    return(
        <Switch>
         <SuperRoute public noLayout path='/login' component={Login}/>
         <SuperRoute exact path='/admin' />
         <SuperRoute  path='/admin/dashboard' component={Dashboard}/>
         <SuperRoute  path='/admin/home-section' component={HomeSection}/>
         <SuperRoute  path='/admin/about-us/our-story' component={Login}/>

        </Switch>
    )
}

export default ProtectedRoutes;