export const getUsers=(state=[],action)=>{
    switch(action.type){
        case "FETCH":return action.payload;
        default: return state;
    }
}


export const getCurUser=(state=[],action)=>{
    switch(action.type){
        case "FETCH_USER":return action.payload;
        default: return state;
    }
}