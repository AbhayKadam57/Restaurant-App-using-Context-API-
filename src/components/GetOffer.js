import React, { useState } from "react";
import RestaurantContext from "../context/RestaurantContext";

const GetOffer = () => {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <RestaurantContext.Consumer>
      {({ offers }) => (
        <div className="offer" onClick={toggle}>
          {click ? offers : "Get an offer"}
        </div>
      )}
    </RestaurantContext.Consumer>
  );
};

export default GetOffer;
