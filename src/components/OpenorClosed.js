import React from "react";
import RestaurantContext from "../context/RestaurantContext";

const OpenorClosed = () => {
  return (
    <RestaurantContext.Consumer>
      {({ isOpen }) => (
        <div className={isOpen ? "res-open" : "res-close"}>
          {isOpen ? "Now Open" : "Closed"}
        </div>
      )}
    </RestaurantContext.Consumer>
  );
};

export default OpenorClosed;
