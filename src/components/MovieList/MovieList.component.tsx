import React from "react";
import { MovieDetails } from "@services/tmdb";
import MovieCard from "@components/MovieCard/MovieCard.component";
import { StyledMovieListWrapper } from "./MovieList.styled";

interface IMovieListProps {
  movies: MovieDetails[];
}

const MovieList = ({ movies }: IMovieListProps) => (
  <StyledMovieListWrapper>
    {movies.length > 0 ? (
      movies.map((details) => <MovieCard details={details} key={details.id} />)
    ) : (
      <h2>
        Looks like there's no results matching your search! Try changing the
        rating filter or searching other movies.
      </h2>
    )}
  </StyledMovieListWrapper>
);

export default MovieList;
