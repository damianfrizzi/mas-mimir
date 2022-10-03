import { startGame } from "api/mimir-backend";
import { Button, FlexVertical } from "components/StyledComponents";
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
    <FlexVertical>
      <ButtonStart onClick={() => start()}>Start New Game</ButtonStart>
      <h3>No game running!</h3>
    </FlexVertical>
  );
};

const ButtonStart = styled(Button)`
  margin: 25px;
`;
