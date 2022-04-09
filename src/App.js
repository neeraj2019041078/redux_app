import { fetch_Users,get_User} from "./actions/index";
import { useDispatch,useSelector } from "react-redux";
import {useEffect,useState} from 'react';
import Card from './Card';

function App() {
  const dispatch=useDispatch();
  var data=[];
  const [curuserid,setcuruserid]=useState(1);
  data=useSelector(state=>state.getUsers);

  useEffect(()=>{
    dispatch(fetch_Users());  
  },[]);  

  dispatch(get_User(curuserid));
  
  const handleClick=(e)=>{
    setcuruserid(e.target.name);
  }

  return (
      <>
      <Card></Card>

      { data.length ? data.map(user=>{return(<>
      <button style={{width:50,height:50,margin:10}} key={user.id} name={user.id} onClick={(e)=>{handleClick(e)}}>{user.id}</button>
      </>)}):<></>}
      </>
    );
}

export default App;
