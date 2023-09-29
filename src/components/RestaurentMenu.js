import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RestaurentMenu() {
    const [info, setInfo] = useState(null)
    const [menu, setMenu] = useState()

    const {resId} = useParams()

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4526945&lng=78.4428053&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        const result = await data.json()
        setInfo(result?.data)
    }

    console.log(info)

    if (info === null) return <h1>Loading..........</h1>

    let {name, cuisines, costForTwoMessage} = info?.cards[0]?.card?.card?.info;
    let {itemCards}  = info?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(itemCards)




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