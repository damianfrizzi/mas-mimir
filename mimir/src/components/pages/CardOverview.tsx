import { fetchCards } from "api/mimir-backend";
import { AppContext } from "data/Context";
import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components/macro";

export const CardOverview = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    const onMount = async () => {
      const cards = await fetchCards();
      dispatch({ type: "initialize", cards });
    };
    onMount();
  }, [dispatch]);

  return (
    <>
      <Main>Learning Cards</Main>
      <Outlet />
    </>
  );
};

const Main = styled.main`
  margin: 10px;
`;
