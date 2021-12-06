import {server} from '../fetch';

export const fetchFooterContent = async() =>{
    const res1 = await fetch(`${server}/footer/contact`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const contactSection = await res1.json()

    const res2 = await fetch(`${server}/footer/aboutUs`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const aboutUsSection = await res2.json()

    const res3 = await fetch(`${server}/footer/socialMedia`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const socialMediaSection = await res3.json()

  

    const res5 = await fetch(`${server}/footer/getInvolved`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const getInvolvedSection = await res5.json()

 return {contactSection, aboutUsSection, socialMediaSection, getInvolvedSection}
}