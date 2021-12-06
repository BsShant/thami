import React from 'react'
import AboutUs from './aboutUs'
import SocialMedia from './socialMedia'
import Contact from './contact'
import GetInvolved from './getInvolved'
import GoTOTop from '../../Pages/goToTop'
const Footer = ()=>{


    return(
        <div className="adminPage">
            <h2>Footer</h2>
        <AboutUs />
        <SocialMedia />
        <Contact />
        <GetInvolved />
        <GoTOTop />
        </div>
    )
}

export default Footer;