import {server} from '../fetch';

export const fetchHomeContent = async() =>{
    const res1 = await fetch(`${server}/home/heroSection`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const heroSection = await res1.json()
    return {heroSection}
}