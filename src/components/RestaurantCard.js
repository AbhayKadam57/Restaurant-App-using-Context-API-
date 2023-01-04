import React from "react";
import Details from "./Details";
import Score from "./Score";
import RestaurantContext from "../context/RestaurantContext";

const RestaurantCard = ({ detail }) => {
  const { name, location, isOpen, offers, score } = detail;
  return (
    <RestaurantContext.Provider
      value={{ name, location, isOpen, offers, score }}
    >
      <div className="Card">
        <Details />
        <Score />
      </div>
    </RestaurantContext.Provider>
  );
};

export default RestaurantCard;
