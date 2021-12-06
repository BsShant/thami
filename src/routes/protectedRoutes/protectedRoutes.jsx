import React from 'react';
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Dashboard from '../../protectedPages/dashboard/adminDashboard';
import HomeSection from '../../protectedPages/homepageSection/homepageSection';
import Login from '../../protectedPages/login/login.page';
import ResetPassword from '../../protectedPages/login/resetPassword';
import ForgotPassword from '../../protectedPages/login/forgotPassword';

import OurStory from '../../protectedPages/aboutUsSection/ourStory/ourStory';
import OurPartners from '../../protectedPages/aboutUsSection/ourPartners/ourPartners';
import OurTeam from '../../protectedPages/aboutUsSection/ourTeam/ourTeam';
import SuperRoute from '../../component/privateRoute/index';
import VisionMission from '../../protectedPages/aboutUsSection/visionMission/visionMission';
import News from '../../protectedPages/eventsSection/news/news';
import Blogs from '../../protectedPages/eventsSection/blogs/blogs';
import OurArticles from "../../protectedPages/eventsSection/ourArticles/ourArticles";
import OurBooks from "../../protectedPages/publicationSection/books/books";
import OurResources from "../../protectedPages/publicationSection/resources/resources"
import PressRelease from "../../protectedPages/publicationSection/pressRelease/pressRelease"
import BeMember from "../../protectedPages/getInvolvedSection/beMember/beMember"
import Support from "../../protectedPages/getInvolvedSection/support/support"
import Sponsor from "../../protectedPages/getInvolvedSection/sponsor/sponsor"
import SupportCommunity from "../../protectedPages/getInvolvedSection/supportCommunity/supportCommunity"
import DonationInfo from "../../protectedPages/getInvolvedSection/donateInfo/donateInfo"
import Member from "../../protectedPages/registration/registration"
import Gallery from '../../protectedPages/aboutUsSection/gallery/gallery';
import ContactUs from '../../protectedPages/contact/contact';
import Setting from '../../protectedPages/setting/setting';

import Footer from '../../protectedPages/footer/footer'


const ProtectedRoutes = ()=>{

    return(
        <Switch>
         <SuperRoute public noLayout path='/login' component={Login}/>
         <SuperRoute public noLayout path='/reset-password/:id/:token' component={ResetPassword}/>
         <SuperRoute public noLayout path='/forgot-password' component={ForgotPassword}/>

         <SuperRoute exact path='/admin' />
         <SuperRoute  path='/admin/dashboard' component={Dashboard}/>
         <SuperRoute  path='/admin/setting' component={Setting}/>
         <SuperRoute  path='/admin/home-section' component={HomeSection}/>
         <SuperRoute  path='/admin/about-us/our-story' component={OurStory}/>
         <SuperRoute  path='/admin/about-us/our-partners' component={OurPartners}/>
         <SuperRoute  path='/admin/about-us/our-team' component={OurTeam}/>
         <SuperRoute  path='/admin/about-us/vision-and-mission' component={VisionMission}/>
         <SuperRoute  path='/admin/about-us/gallery' component={Gallery}/>

         <SuperRoute  path='/admin/event/news' component={News}/>
         <SuperRoute  path='/admin/event/blogs' component={Blogs}/>
         <SuperRoute  path='/admin/event/our-articles' component={OurArticles}/>
         <SuperRoute  path='/admin/publication/our-books' component={OurBooks}/>
         <SuperRoute  path='/admin/publication/our-resources' component={OurResources}/>
         <SuperRoute  path='/admin/publication/press-release' component={PressRelease}/>
         <SuperRoute  path='/admin/get-involved/be-member' component={BeMember}/>
         <SuperRoute  path='/admin/get-involved/support' component={Support}/>
         <SuperRoute  path='/admin/get-involved/donation' component={Sponsor}/>
         <SuperRoute  path='/admin/get-involved/donation-info' component={DonationInfo}/>

         <SuperRoute  path='/admin/get-involved/support-community' component={SupportCommunity}/>
         <SuperRoute  path='/admin/contact-us' component={ContactUs}/>
         <SuperRoute  path='/admin/membership' component={Member}/>
         <SuperRoute  path='/admin/footer' component={Footer}/>







        </Switch>
    )
}

export default ProtectedRoutes;