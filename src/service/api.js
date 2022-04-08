import axios from 'axios';

const url="https://reqres.in/api/users";

export const fetchUsers=async()=>{
    console.log("FETCHING");
    return axios.get(url);
}