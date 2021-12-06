import React from 'react';
import './styles.css';
import { Form, Input, Button, Checkbox } from 'antd';
import Hero from './hero';
import AboutUs from './aboutUs';
import Events from './events';
import Publication from './publication';
import GetInvolved from './getInvolved';
import GoTOTop  from '../../Pages/goToTop';

const HomepageSection = ()=>{
   
    return(
        <div className="adminPage">
         <Hero />
         <AboutUs />
         <Events />
         <Publication />
         <GetInvolved />
         <GoTOTop />
        </div>
    )
}

export default HomepageSection;