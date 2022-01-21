import React, { useContext } from "react";
import {
  APIConfigContext,
  IAPIConfig,
  PosterSize,
} from "@contexts/APIConfigContext";
import { MovieDetails } from "@services/tmdb";
import {
  StyledMovieCardWrapper,
  StyledMovieCardPoster,
  StyledPosterHover,
  StyledTitle,
} from "./MovieCard.styled";

import NoPosterAvailable from "@assets/NoPoster.png";

interface IMovieProps {
  details: MovieDetails;
}

const Movie = ({ details }: IMovieProps) => {
  const { images } = useContext(APIConfigContext) as IAPIConfig;

  const { title, poster_path } = details;

  const getImageUrl = (url: string, size: PosterSize = "original") => {
    if (!poster_path || !images?.base_url) {
      return NoPosterAvailable;
    }

    return `${images?.base_url}${size}${url}`;
  };

  const posterUrl = getImageUrl(poster_path, "w500");

  return (
    <StyledMovieCardWrapper>
      <StyledMovieCardPoster alt={`${title} poster`} src={posterUrl} />
      <StyledPosterHover>
        <StyledTitle>
          <a target="_blank" rel="noopener noreferrer" href={posterUrl}>
            {title}
          </a>
        </StyledTitle>
      </StyledPosterHover>
    </StyledMovieCardWrapper>
  );
};

export default Movie;
