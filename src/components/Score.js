import React from "react";
import RestaurantContext from "../context/RestaurantContext";

const Score = () => {
  const getScore = (score) => {
    if (score > 4) {
      return "rgb(23, 160, 8)";
    } else if (score < 3) {
      return "red";
    } else if (score >= 3 || score <= 4) {
      return "rgb(255,160,0)";
    }
  };

  return (
    <RestaurantContext.Consumer>
      {({ score }) => (
        <div className="score" style={{ backgroundColor: getScore(score) }}>
          {score ? score : 0}
        </div>
      )}
    </RestaurantContext.Consumer>
  );
};

export default Score;
