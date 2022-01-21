import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Segoe UI";
`;

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });

  return (
    <NotFoundWrapper>
      <h1>
        Oops! There's nothing here. You will be redirected to the home screen
        shortly.
      </h1>
    </NotFoundWrapper>
  );
};
