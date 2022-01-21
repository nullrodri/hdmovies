import React from "react";
import {
  SearchBarWrapper,
  StyledForm,
  StyledInput,
  StyledSearchButton,
} from "./SearchBar.styled";
import { useSearchParams } from "react-router-dom";

export const SearchBar = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = event.currentTarget.search.value;
    setSearchParams({ search: query });
  };

  return (
    <SearchBarWrapper>
      <StyledForm onSubmit={(event) => handleSubmit(event)}>
        <StyledInput
          aria-label="Movie to search"
          name="search"
          placeholder="Search movies here!"
          type="text"
        />
        <StyledSearchButton type="submit" aria-label="Search movies">
          Search
        </StyledSearchButton>
      </StyledForm>
    </SearchBarWrapper>
  );
};
