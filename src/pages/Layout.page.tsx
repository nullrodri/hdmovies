import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Layout: React.FC = () => {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
};
