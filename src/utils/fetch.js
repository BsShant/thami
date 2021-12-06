export const server = 'https://thamibackend.nepalthamisociety.org';


// export const server = 'http://localhost:5000';
export const token = localStorage.getItem("thamiToken")


const parsedToken = JSON.parse(token);



// export const clearToken = ()=>{
//     console.log("remove token")
//     localStorage.removeItem("token");
// }



export default parsedToken;


