import axios from 'axios';

const url="https://reqres.in/api/users";

export const fetchUsers=async()=>{
    return axios.get(url);
}

export const fetch_User=async(id)=>{
    return axios.get(`${url}/${id}`);
}