import { clearGame, startGame } from "api/mimir-backend";
import { Button, TableData, TableHeader } from "components/StyledComponents";
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
    <Container>
      <div>
        <Button onClick={() => reset()}>Start New Game</Button>
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
              <AcceptedTableData accepted={answer.accepted}>
                {answer.accepted ? (
                  <span>&#x2714;</span>
                ) : (
                  <span>&#x2718;</span>
                )}
              </AcceptedTableData>
            </tr>
          ))}
        </tbody>
      </table>
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

const GameRecap = styled.p`
  margin: 20px 0;
`;

interface AcceptedProps {
  accepted: boolean;
}

const AcceptedTableData = styled(TableData)<AcceptedProps>`
  color: ${(p) => (p.accepted ? "#16bd13" : "#EB3307")};
`;
