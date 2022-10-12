import { GlobalStyle } from "components/GlobalStyles";
import { Navbar } from "components/layout/Navbar";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Layout: FC = () => (
  <div>
    <GlobalStyle />
    <Navbar />
    <Main>
      <Outlet />
    </Main>
  </div>
);

const Main = styled.main`
  padding: 0 25px;
`;
