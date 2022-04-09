import {fetchUsers,fetch_User} from '../service/api';

export const fetch_Users=()=>async(dispatch)=>{
    const res=await fetchUsers();
    dispatch({type:"FETCH",payload:res.data.data});
}

export const get_User=(id)=>async(dispatch)=>{
    const res=await fetch_User(id);
    dispatch({type:"FETCH_USER",payload:res.data.data});
}