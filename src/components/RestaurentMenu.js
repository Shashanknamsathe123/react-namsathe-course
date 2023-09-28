import React, { useEffect, useState } from 'react'

function RestaurentMenu() {
    const [info, setInfo] = useState(null)
    const [menu, setMenu] = useState()

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4526945&lng=78.4428053&restaurantId=575804&catalog_qa=undefined&submitAction=ENTER")
        const result = await data.json()
        setInfo(result?.data)
    }

    if (info === null) return <h1>Loading..........</h1>

    let {name, cuisines, costForTwoMessage} = info?.cards[0]?.card?.card?.info;

  return (
    <div className='menu'>
        <h1>{name}</h1> 
        <h3>{cuisines}</h3>
        <h3>{costForTwoMessage}</h3>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Dist COke</li>
        </ul>
    </div>
  )
}

export default RestaurentMenu