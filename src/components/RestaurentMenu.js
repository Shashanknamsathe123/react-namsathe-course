import React, { useEffect, useState } from 'react'
import useRestaurantMenu from './utils/useRestaurantMenu'
import { useParams } from 'react-router-dom'

function RestaurentMenu() {
  
    const {resId} = useParams()
    const resInfo  = useRestaurantMenu(resId);

    if (resInfo === null) return <h1>Loading..........</h1>
    console.log("clicked................in console")


    let {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    let {itemCards}  = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

  return (
    <div className='menu'>
        <h1>{name}</h1> 
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <ul>
            {itemCards?.map((item,index) => {
                return (
                    <div key={index}>
                        <li>{item?.card?.info?.name} - {item?.card?.info?.price/100 + " rupees"}</li>
                    </div>
                )
            })}
        </ul>
    </div>
  )
}

export default RestaurentMenu