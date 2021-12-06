import {server} from '../fetch';

export const fetchHomeContent = async() =>{
    const res1 = await fetch(`${server}/home/heroSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const heroSection = await res1.json()

    const res2 = await fetch(`${server}/home/aboutUsSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const aboutUsSection = await res2.json()

    const res3 = await fetch(`${server}/home/ourEventSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const ourEventSection = await res3.json()

    const res4 = await fetch(`${server}/home/publicationSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const publicationSection = await res4.json()

    const res5 = await fetch(`${server}/home/getInvolvedSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const getInvolvedSection = await res5.json()

 return {heroSection, aboutUsSection, ourEventSection, publicationSection, getInvolvedSection}
}