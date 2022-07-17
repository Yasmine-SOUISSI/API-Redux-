const initialState={
    restaurants:[],
    restaurant:{}
}

export const restoReducer=(state=initialState,{type,payload})=>{
   switch(type)
   {
    case "POST_RESTO":
        return {...state}
        case "GET_RESTO":
            return {
                ...state,
                restaurants: payload,
            };
    default: return state
   }
}