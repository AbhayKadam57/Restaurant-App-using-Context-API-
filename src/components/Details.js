import React from "react";
import GetOffer from "./GetOffer";
import OpenorClosed from "./OpenorClosed";
import RestaurantContext from "../context/RestaurantContext";

const Details = () => {
  return (
    <RestaurantContext.Consumer>
      {({ name, location }) => (
        <div>
          <h2>{name}</h2>
          <h4>{location}</h4>
          <OpenorClosed />
          <GetOffer />
        </div>
      )}
    </RestaurantContext.Consumer>
  );
};

export default Details;
