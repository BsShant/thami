// let server = 'https://schoolack.herokuapp.com/api';
// let server = 'http://localhost:5000/api';
import {server} from '../fetch';

export const getAllUsers = async(formData) =>{
    const res = await fetch(`${server}/user?${new URLSearchParams({...formData.params})}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${formData.userToken}` },
    })
    const data = await res.json()
    return data;
}
export const getSingleUser = async(formData) =>{
    const res = await fetch(`${server}/user/${formData.userId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${formData.userToken}` },
    })
    const data = await res.json()
    console.log(data)
    return data;
}

export const getallUsersOfAClass = async(formData) =>{
    const res = await fetch(`${server}/class/${formData.classId}/user`,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${formData.userToken}` },
    })
    const data = await res.json()
    console.log(data)
    return data;
}