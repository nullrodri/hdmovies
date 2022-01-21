import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  StyledRatingFilterWrapper,
  StyledFilterWrapper,
} from "./RatingFilter.styled";

interface IRatingFilterProps {
  starAmount?: number;
  filterIndex: number;
  setFilterIndex: (index: number) => void;
}

export const RatingFilter = ({
  starAmount = 5,
  filterIndex,
  setFilterIndex,
}: IRatingFilterProps) => {
  const indices = Array.from(Array(starAmount).keys());

  const handleClick = (index: number) => {
    if (index === filterIndex) {
      setFilterIndex(-1);
    } else {
      setFilterIndex(index);
    }
  };

  return (
    <StyledRatingFilterWrapper>
      Filter by rating:
      <StyledFilterWrapper>
        {indices.map((_value, index) => (
          <FontAwesomeIcon
            icon={faStar}
            size="sm"
            key={index}
            onClick={() => handleClick(index)}
            color={filterIndex >= index ? "red" : "white"}
          />
        ))}
      </StyledFilterWrapper>
    </StyledRatingFilterWrapper>
  );
};
