import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  width: 60%;
  justify-content: center;
`;

export const StyledInput = styled.input`
  width: 20rem;
  padding: 0.5rem;
  border-radius: 10px;
  box-sizing: border-box;
  color: black;
  font-weight: 600;
  font-family: "Segoe UI";
  box-shadow: rgba(106, 92, 92, 0.17) 0px 14px 28px,
    rgba(125, 112, 112, 0.17) 0px 10px 10px;
  border: none;
  font-size: 1rem;

  &::placeholder {
    font-family: "Segoe UI";
    font-size: 1rem;
    font-weight: 500;
    opacity: 1;
    background-color: #f6f6f6;
    color: #49495bed;
  }
`;

export const StyledSearchButton = styled.button`
  border-radius: 10px;
  width: 5rem;
  margin-left: 0.5rem;
  border: none;
  background-color: #cacfec;
  color: #000;
  font-weight: 600;
  border-radius: 5px;
  font-family: "Segoe UI";
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem;
`;

export const StyledForm = styled.form`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;
