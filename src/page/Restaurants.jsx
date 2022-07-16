import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../components/CardList'
import { getRestos } from '../JS/actions/restaurantActions';

export default function Restaurants() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRestos);
    }, [dispatch]);
    const restaurants = useSelector((state) => state.restoReducer.restaurants);
   console.log(restaurants)
  return (
    <div>
        <CardList data={restaurants}/>
    </div>
  )
}
