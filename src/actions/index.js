import {fetchUsers} from '../service/api';

export const fetch_Users=()=>async(dispatch)=>{
    const res=await fetchUsers();
    
    dispatch({type:"FETCH",payload:res.data.data});
}