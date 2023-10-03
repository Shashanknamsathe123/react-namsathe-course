import React, { useState } from 'react'
import { useEffect } from 'react';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null)

  useEffect(() => {
    fetchData()
  },[])

  console.log("useonline status.......................")

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4526945&lng=78.4428053&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
    const result = await data.json()
    setResInfo(result?.data)
  }
  return resInfo;
}

export default useRestaurantMenu;