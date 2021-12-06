// let server = 'https://schoolack.herokuapp.com/api';
// let server = 'http://localhost:5000/api';
import {server, token} from '../fetch';
import { Form, Input, Button, Checkbox, message } from 'antd';

export const login = async(values) =>{
    const res = await fetch(`${server}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    })
    const data = await res.json()
    console.log("token", data.token)
    // const tempToken = JSON.stringify(data.token)
    const key = 'updatable';
console.log("status",res.status)
      if(res.status===401){
        message.error({ content: data.message, key, duration: 2 });
      }

    if(data.token){
        localStorage.setItem("thamiToken", JSON.stringify(data.token));

    }
    if(data.user){
        localStorage.setItem("thamiUser", JSON.stringify(data.user));
    }

    return data;
}




// export const getUser = async() =>{
//     console.log("called")
//     const parsedToken = await JSON.parse(token)

//     const res = await fetch(`${server}/auth/me`, {
//         method: "GET",
//         headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${parsedToken}` }
//     })
//     const data = await res.json();
//     return data;
// }

export const logout = async() =>{
    const res = await fetch(`${server}/auth/logout`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    const data = await res.json();
    localStorage.removeItem("thamiToken");
    localStorage.removeItem("thamiUser");



    return data;
}
