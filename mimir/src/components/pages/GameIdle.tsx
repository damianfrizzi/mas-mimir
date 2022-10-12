import { startGame } from "api/mimir-backend";
import { Button } from "components/StyledComponents";
import { AppContext } from "data/Context";
import { ActionType } from "models/Action";
import { useContext } from "react";
import styled from "styled-components";

export const GameIdle = () => {
  const { dispatch } = useContext(AppContext);
  const start = async () => {
    const game = await startGame();
    dispatch({ type: ActionType.UPDATE_GAME, game });
  };
  return (
    <Container>
      <Button onClick={() => start()}>Start New Game</Button>
      <h3>No game running!</h3>
    </Container>
  );
};

const Container = styled.div`
  margin: 40px;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
