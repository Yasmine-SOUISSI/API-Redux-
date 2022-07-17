import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteResto, getRestos } from "../JS/actions/restaurantActions";


export default function CardList(){

    const dispatch = useDispatch();
          useEffect(() => {
          dispatch(getRestos(dispatch));

    }, [dispatch]);
    const restaurants =useSelector((state) => state.restoReducer.restaurants);
    console.log(restaurants);
    return(
        <div>
            {
                restaurants.map((restaurant,key) =>{
                    return (
                        <div key={key}>
                            {restaurant.title}
                            {restaurant.author}
                            <button
                            onClick={()=>dispatch(deleteResto(restaurant.id))}
                            >
                            Delete
                            </button>
                            
                    {/* <Link to={`/update/${restaurant.id}`}>
                                <button>Edit</button>
                            </Link> */}
                        </div>
                    );
                })
            }
        </div>
    )}