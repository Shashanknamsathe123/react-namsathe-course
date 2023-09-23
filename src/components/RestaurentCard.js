import React from "react";
import ReactDOM from "react-dom/client";
import {RES_CARD_IMAGE} from '../components/utils/constants'

const Restaurantcard = (props) => {
    const { name, costForTwo, cuisines, cloudinaryImageId, avgRating } =
      props?.resData;
    // const {cloudinaryImageId} = props
    return (
      <div className="res-card">
        <img
          alt="res-logo"
          className="reslogo"
          src=
            {RES_CARD_IMAGE+cloudinaryImageId} 
        />
        <h3>{name}</h3>
        <h3>{costForTwo}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>Stars {avgRating}</h3>
      </div>
    );
  };


  export default Restaurantcard
