import { fetch_Users } from "./actions/index";
import { useDispatch,useSelector } from "react-redux";
import {useEffect} from 'react';

function App() {
  const dispatch=useDispatch();
  const data=useSelector(state=>state.getUsers);
  
  console.log(data);
  
  useEffect(()=>{
    dispatch(fetch_Users());  
  },[]);  

  return (
      <>
      Hi
      </>
    );
}

export default App;
