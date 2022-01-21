import styled from "styled-components";

export const StyledMovieCardWrapper = styled.div`
  background-color: dodgerblue;
  color: #e3e3e3;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 220px;
  position: relative;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const StyledMovieCardPoster = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const StyledPosterHover = styled.div`
  position: absolute;
  opacity: 0;
  transition: opacity 0.4s ease-in-out 0.2s;
  background-color: #172e64;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &:hover,
  &:focus-within {
    opacity: 0.95;
  }

  a {
    text-decoration: none;
    opacity: 1;
    color: #e3e3e3;
    width: 100%;
    height: 100%;
    outline: none;
  }
`;

export const StyledTitle = styled.p`
  padding: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
`;
