import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from '../../actions/restaurantAction';

export default function CountRestaurant() {
  const dispatch = useDispatch();

  const { loading , error , count , showVegOnly , pureVegRestaurantCount } = useSelector((state) => state.restaurants);

  useEffect(()=>{
    dispatch(getRestaurants());
  },[dispatch])

  return (
    <div>
      {loading ? (<p>Loading Restaurant count ...</p>) : error ? (<p>Error: {error}</p>) : (
        <p className="NumOfRestro">
            {showVegOnly ? pureVegRestaurantCount : count} {" "}<span className='Restro'>
              {showVegOnly ?pureVegRestaurantCount === 1 ? "Restaurant" : "Restaurants":
                             count === 1 ? "Restaurant" : "Restaurants"
              }
            </span>
        </p>
      )}

       <hr />
    </div>
  )
}
