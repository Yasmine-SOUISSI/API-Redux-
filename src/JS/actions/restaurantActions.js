import axios from "axios"
export const addResto=(restaurant)=>async(dispatch)=>{
    try{
        const res= await axios.post('http://localhost:3000/restaurants',restaurant)
        console.log(res.data)
        dispatch({
            type:"POST_RESTO",
         
        })
    }catch(err)
    {
        dispatch({
            type:"Error",
            payload:err
        })
    }
}
export const getRestos = ()=> async (dispatch) => {
    try {
        // send a get request to the server to get all products
        const res = await axios.get("http://localhost:3000/restaurants");

        console.log(res.data);
        // dispatch the action to the reducer
        dispatch({
            type: "GET_RESTO",
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type:"Error",
            payload:err
        })
    }
};
 export const deleteResto = (id) => async (dispatch) => {
        try {
            
            const res = await axios.delete(`http://localhost:3000/restaurants/${id}`);
            console.log(res);
            dispatch({
                type: "DELETE_Resto",
                payload: id,
            });
        } catch (err) {
            console.log(err);
        }
};