import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro'

export const CardOverview = () => {
  return (
    <>
      <Main>Learning Cards</Main>
      <Outlet />
    </>
  );
}

const Main = styled.main`
  margin: 10px;
`