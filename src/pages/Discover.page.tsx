import React, { useEffect, useState } from "react";
import MovieList from "@components/MovieList/MovieList.component";
import { fetchMovies, MovieDetails } from "@services/tmdb";
import styled from "styled-components";
import { SearchBar } from "@components/SearchBar/SearchBar.component";
import { useSearchParams } from "react-router-dom";

import { RatingFilter } from "@components/RatingFilter/RatingFilter.component";

const StyledHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: cornflowerblue;  */
  color: white;
  /* background-image: url("./poster.jpg"); */
  background: rgb(11, 38, 98);
  background: radial-gradient(
    circle,
    rgba(11, 38, 98, 1) 0%,
    rgba(22, 50, 79, 0.9836135137648809) 49%,
    rgba(57, 72, 122, 1) 100%
  );
  width: 100%;
  padding-bottom: 1rem;
`;

const StyledHeading = styled.h1`
  font-size: 4rem;
  font-family: "Oxygen";
  line-height: 1;
  margin: 2rem;
`;

export const Discover = () => {
  const [movies, setMovies] = useState<MovieDetails[]>([]);
  const [searchParams] = useSearchParams();
  const [filterIndex, setFilterIndex] = useState<number>(-1); // An index of -1 means no filtering is applied
  const starAmount = 5;
  const maxRating = 10;
  const ratingGap = maxRating / starAmount;

  const query = searchParams.get("search");

  const filteredMovies =
    filterIndex < 0
      ? movies
      : movies.filter(
          ({ vote_average: rating }) =>
            rating > filterIndex * ratingGap &&
            rating < (filterIndex + 1) * ratingGap
        );

  useEffect(() => {
    async function getMovies() {
      const movies = await fetchMovies(query);
      setMovies(movies.results);
    }
    getMovies();
  }, [query]);

  return (
    <>
      <StyledHeaderWrapper>
        <StyledHeading>Discover</StyledHeading>
        <SearchBar />
        <RatingFilter
          filterIndex={filterIndex}
          setFilterIndex={setFilterIndex}
          starAmount={starAmount}
        />
      </StyledHeaderWrapper>
      <MovieList movies={filteredMovies} />
    </>
  );
};
