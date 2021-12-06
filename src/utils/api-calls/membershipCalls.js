import {server} from '../fetch';

export const fetchMembershipContent = async() =>{
    const res1 = await fetch(`${server}/member/registration`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const membershipData = await res1.json()
    
    


    

 return {membershipData}
}