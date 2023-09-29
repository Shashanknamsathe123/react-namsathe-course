import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Restaurantcard from "./RestaurentCard";
import { useState } from "react";
import { Link } from "react-router-dom";

  
  const Body = () => {

    const [listOfrestaurants, setListOfrestaurants] = useState([]);
    const [search, setSearch] = useState("")
    const [filterrestaurent, setFilterrestaurent] = useState([])
   
    console.log(listOfrestaurants,"......search")
    useEffect(() => {
      fetchData();
    }, [])

    const fetchData = async () => {
      let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4526945&lng=78.4428053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      let result = await data.json()
      setListOfrestaurants(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilterrestaurent(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listOfrestaurants.length === 0 ? (<h2>Loading..................</h2>) : (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            const result = listOfrestaurants.filter((item) => {
              return item.info.avgRating >= 4.5
            })
          }}>
            Top Rated Restaurent
          </button>
          <input type="text" className="search-text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button onClick={() => {
              let filterdata = listOfrestaurants.filter((res, index) => res.info.name.toLowerCase().includes(search.toLowerCase().trim()))
              setFilterrestaurent(filterdata)
          }}>Search</button>
        </div>
        <div className="res-container">
          {filterrestaurent.map((resItem) => (
            <Link to={"/restaurents/" + resItem.info.id} key={resItem.info.id}><Restaurantcard  resData={resItem.info} /></Link>
          ))}
        </div>
      </div>
    );
  };

export default Body