import React from "react";
import ReactDOM from "react-dom/client";
import {RES_CARD_IMAGE} from '../components/utils/constants'

const Restaurantcard = (props) => {
    const { name, costForTwo, cuisines, cloudinaryImageId, avgRating } =
      props?.resData;
    // const {cloudinaryImageId} = props
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-pink-100 hover:bg-orange-500">
        <img
          alt="res-logo"
          className="rounded-lg hover:scale-110"
          src=
            {RES_CARD_IMAGE+cloudinaryImageId} 
        />
        <h3 className="py-4 text-lg font-bold">{name}</h3>
        <h3>{costForTwo}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>Stars {avgRating}</h3>
      </div>
    );
  };


  export default Restaurantcard
