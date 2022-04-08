
export const getUsers=(state=[],action)=>{
    switch(action.type){
        case "FETCH":return action.payload;
        default: return state;
    }
}
