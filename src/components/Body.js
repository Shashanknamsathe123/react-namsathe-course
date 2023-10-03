import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Restaurantcard from "./RestaurentCard";
import { useState } from "react";
import { Link } from "react-router-dom";

  
  const Body = () => {

    const [listOfrestaurants, setListOfrestaurants] = useState([]);
    const [search, setSearch] = useState("")
    const [filterrestaurent, setFilterrestaurent] = useState([])
   
    useEffect(() => {
      fetchData();
    }, [])

    const fetchData = async () => {
      let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4526945&lng=78.4428053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      let result = await data.json()
      setListOfrestaurants(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilterrestaurent(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if (listOfrestaurants.length === 0) return (<h2>Loading..................</h2>)

    return  (
      <div className="body">
        <div className="filter flex flex-wrap">
          <div className="px-4 py-4 m-4 bg-pink-100 flex items-center rounded-md">
          <button className="filter-btn" onClick={() => {
            const result = listOfrestaurants.filter((item) => {
              return item.info.avgRating >= 4.6
            })
            setFilterrestaurent(result)
          }}>
            Top Rated Restaurent
          </button>
          </div>

          <input type="text" className="border border-solid border-cyan-500 h-12 mt-5 rounded-md" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button
           className="px-4 py-2 bg-green-100 m-4 rounded-md hover:bg-green-600"
           onClick={() => {
              let filterdata = listOfrestaurants.filter((res, index) => res.info.name.toLowerCase().includes(search.toLowerCase().trim()))
              setFilterrestaurent(filterdata)
          }}>Search</button>
        </div>

        <div className="flex flex-wrap">
          {filterrestaurent.map((resItem) => (
            <Link to={"/restaurents/" + resItem.info.id} key={resItem.info.id}><Restaurantcard  resData={resItem.info} /></Link>
          ))}
        </div>
      </div>
    );
  };

export default Body