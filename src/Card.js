import {useSelector} from 'react-redux';

const Card=()=>{
    const data=useSelector(state=>state.getCurUser);
    console.log(data);
    
    return(
    <>
    {
    Object.keys(data).length ?  
    <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src={data.avatar} style={{width:200}}/>
        </div>
        <div className="card-content">
          <h6>First Name:-{data.first_name}</h6>
          <h6> Last Name:-{data.last_name}</h6>
          <h6> Email:- {data.email}</h6>
        </div>
      </div>
    </div>
    </div>:
    <></>}

  </>)
}

export default Card;