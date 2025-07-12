import { useState } from "react";

import StarRating from "./StarRating";
import "./styles.css";

export default function StarRatingWrapper(props) {
  const { maxNoOfStarts = 10, starsFilled = 9 } = props;

  const [currentFilledStars, setCurrentFilledStars] = useState(starsFilled);
  const [hoveredFilledStars, setHoveredFilledStars] = useState(null);

  const handleOnClickEvent = (currentStarIndex) => {
    setCurrentFilledStars(currentStarIndex + 1);
  };

  const handleOnMouseEnter = (currentStarIndex) => {
    setHoveredFilledStars(currentStarIndex + 1);
  };

  const handleOnMouseLeave = () => {
    setHoveredFilledStars(null);
  };

  return (
    <StarRating
      maxNoOfStarts={maxNoOfStarts}
      starsFilled={hoveredFilledStars ? hoveredFilledStars : currentFilledStars}
      onClick={handleOnClickEvent}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    />
  );
}
