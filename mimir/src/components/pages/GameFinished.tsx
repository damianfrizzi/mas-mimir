import { clearGame, startGame } from "api/mimir-backend";
import {
  Button,
  FlexVertical,
  TableData,
  TableHeader,
} from "components/StyledComponents";
import { AppContext } from "data/Context";
import { ActionType } from "models/Action";
import { useContext } from "react";
import styled from "styled-components";

export const GameFinished = () => {
  const { game, dispatch } = useContext(AppContext);
  const correctlySolved = game?.solved.filter((x) => x.accepted).length;

  const reset = async () => {
    await clearGame();
    const game = await startGame();
    dispatch({ type: ActionType.UPDATE_GAME, game });
  };

  return (
    <FlexVertical>
      <div>
        <Button onClick={() => reset()}>Start new Game</Button>
      </div>
      <GameRecap>
        Solved {correctlySolved} out of {game?.cardCount} correctly.
      </GameRecap>
      <table>
        <thead>
          <tr>
            <TableHeader>Front</TableHeader>
            <TableHeader>Back</TableHeader>
            <TableHeader>Your Answer</TableHeader>
            <TableHeader>Accepted</TableHeader>
          </tr>
        </thead>
        <tbody>
          {game?.solved.map((answer) => (
            <tr key={answer.id}>
              <TableData>{answer.front}</TableData>
              <TableData>{answer.back}</TableData>
              <TableData>{answer.answer}</TableData>
              <TableData>
                {answer.accepted ? (
                  <span>&#x2714;</span>
                ) : (
                  <span>&#x2718;</span>
                )}
              </TableData>
            </tr>
          ))}
        </tbody>
      </table>
    </FlexVertical>
  );
};

const GameRecap = styled.p`
  margin: 20px 0;
`;
