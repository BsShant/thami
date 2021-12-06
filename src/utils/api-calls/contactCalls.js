import {server} from '../fetch';

export const fetchContactContent = async() =>{
    const res1 = await fetch(`${server}/contactUs/contactPageHeading`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const contactPageHeading = await res1.json()
    const res7 = await fetch(`${server}/contactUs/contactHeadingSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const contactHeadingSection = await res7.json()

    const res2 = await fetch(`${server}/contactUs/contact`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const messages = await res2.json();
    


    

 return {contactPageHeading, contactHeadingSection, messages}
}