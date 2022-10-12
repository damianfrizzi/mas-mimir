import { fetchCards } from "api/mimir-backend";
import { AppContext } from "data/Context";
import { ActionType } from "models/Action";
import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components/macro";

export const CardOverview = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    const onMount = async () => {
      const cards = await fetchCards();
      dispatch({ type: ActionType.INITIALIZE, cards });
    };
    onMount();
  }, [dispatch]);

  return (
    <>
      <Title>Learning Cards</Title>
      <Outlet />
    </>
  );
};

const Title = styled.h1`
  margin: 25px auto;
  font-size: 24px;
  max-width: 700px;
  width: 100%;
`;
