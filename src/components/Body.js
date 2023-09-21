import React from "react";
import ReactDOM from "react-dom/client";
import Restaurantcard from "./RestaurentCard";
import { useState } from "react";

let resData = [
    {
      id: "63392",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId: "wyjdcndvtuabccfjndce",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.5,
    },
    {
      id: "97825",
      name: "Brahmins' Thatte Idli",
      cloudinaryImageId: "t6annedqirjr8b2tdind",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "23700",
      name: "McDonald's",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "5936",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "6928",
      name: "FreshMenu",
      cloudinaryImageId: "6c4de7b481d3614370e5062b2f33e7d6",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "42150",
      name: "Asha Sweet Center",
      cloudinaryImageId: "qyz7adcraxtgdsexbrmo",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "4982",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "249305",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "64131",
      name: "Truffles",
      cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "354049",
      name: "EatFit",
      cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "278310",
      name: "Theobroma",
      cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "88615",
      name: "CakeZone",
      cloudinaryImageId: "efc14609d005a8c28828ff1ace41989d",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "240178",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId: "onhkq8nwfxrje79dfhe9",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
  ];

  
  const Body = () => {
  //  const listOfrestaurants = []
    const [listOfrestaurants, setListOfrestaurants] = useState([  {
      id: "63392",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId: "wyjdcndvtuabccfjndce",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.5,
    },
    {
      id: "97825",
      name: "Brahmins' Thatte Idli",
      cloudinaryImageId: "t6annedqirjr8b2tdind",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "23700",
      name: "McDonald's",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "5936",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "6928",
      name: "FreshMenu",
      cloudinaryImageId: "6c4de7b481d3614370e5062b2f33e7d6",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "42150",
      name: "Asha Sweet Center",
      cloudinaryImageId: "qyz7adcraxtgdsexbrmo",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "4982",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "249305",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "64131",
      name: "Truffles",
      cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "354049",
      name: "EatFit",
      cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "278310",
      name: "Theobroma",
      cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "88615",
      name: "CakeZone",
      cloudinaryImageId: "efc14609d005a8c28828ff1ace41989d",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },
    {
      id: "240178",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId: "onhkq8nwfxrje79dfhe9",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
    },]);
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            const result = listOfrestaurants.filter((item) => {
              return item.avgRating >= 4.5
            })
            setListOfrestaurants(result)
          }}>
            Top Rated Restaurent
          </button>
        </div>
        <div className="res-container">
          {listOfrestaurants.map((resItem) => (
            <Restaurantcard key={resItem.id} resData={resItem} />
          ))}
        </div>
      </div>
    );
  };

export default Body