import { clearGame, setAnswer } from "api/mimir-backend";
import { Button, Input } from "components/StyledComponents";
import { AppContext } from "data/Context";
import { ActionType } from "models/Action";
import { useContext, useState } from "react";
import styled from "styled-components";

export const GameActive = () => {
  const [input, setInput] = useState("");
  const { game, dispatch } = useContext(AppContext);

  const answer = async () => {
    const game = await setAnswer(input);
    dispatch({ type: ActionType.UPDATE_GAME, game });
    setInput("");
  };

  const clear = async () => {
    const game = await clearGame();
    dispatch({ type: ActionType.UPDATE_GAME, game });
  };

  const percent: number | undefined =
    game && Math.floor((100 / game.cardCount) * game.solved.length);
  return (
    <Container>
      <ProgressBar>
        <h3>Progress: {percent} %</h3>
        <Button onClick={() => clear()}>Delete Game</Button>
      </ProgressBar>
      <Container>
        <Card>{game?.front}</Card>
        <Answer>
          <AnswerInput
            onChange={(e) => setInput(e.target.value)}
            placeholder="Answer"
            value={input}
          />
          <Button onClick={() => answer()}>Submit</Button>
        </Answer>
      </Container>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
`;

const Answer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  gap: 15px;
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  box-shadow: rgba(7, 41, 128, 0.5) 0 15px 30px -5px;
  border: 2px solid #3d28c5;
  padding: 150px 25px;
  margin: 25px 0;
  font-size: 50px;
  color: #3d28c5;
  text-align: center;
  font-weight: bold;
  word-wrap: break-word;
`;

const AnswerInput = styled(Input)`
  width: 60%;
`;
