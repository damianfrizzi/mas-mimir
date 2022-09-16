import { fetchGame, setAnswer, startGame, clearGame } from 'api/mimir-backend';
import { AppContext } from 'data/Context';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/macro'

export const Home = () => {
  const [input, setInput] = useState('')
  const { game, dispatch } = useContext(AppContext)

  useEffect(() => {
    const onMount = async () => {
      const game = await fetchGame()
      dispatch({ type: 'update-game', game })
    }
    onMount()
  }, []);

  const start = async () => {
    const game = await startGame()
    dispatch({ type: 'update-game', game })
  }

  const answer = async () => {
    const game = await setAnswer(input)
    dispatch({ type: 'update-game', game })
    setInput('')
  }

  const clear = async () => {
    const game = await clearGame()
    dispatch({ type: 'update-game', game })
  }

  const reset = async () => {
    await clearGame()
    const game = await startGame()
    dispatch({ type: 'update-game', game })
  }

  if (!game) {
    return (
      <FlexVertical>
        <ButtonStart onClick={() => start()}>Start New Game</ButtonStart>
        <h3>No game running!</h3>
      </FlexVertical>
    )
  }

  if (game.cardCount === game.solved.length) {
    return (
      <FlexVertical>
        Game finished!
        <p>Solved correct: {game.solved.filter(x => x.accepted === true).length} / {game.cardCount}</p>
        {game.solved.map(answer =>
          <p key={answer.id}>{answer.front} / {answer.back} / {answer.answer} / {answer.accepted ? 'correct' : 'wrong'}</p>
        )}
        <div><button onClick={() => reset()}>Start new Game</button></div>
      </FlexVertical>

    )
  }

  const percent = Math.floor(100 / game.cardCount * game.solved.length)
  return (
    <FlexVertical>
      <FlexHorizontal>
        <h3>Progress: {percent} %</h3>
        <Button onClick={() => clear()}>Delete Game</Button>
      </FlexHorizontal>
      <FlexHorizontal center={true}>
        <Card>{game.front}</Card>
      </FlexHorizontal>
      <FlexHorizontal center={true}>
        <Input onChange={e => setInput(e.target.value)} value={input} />
        <Button onClick={() => answer()}>Submit</Button>
      </FlexHorizontal>
    </FlexVertical>
  )
}

interface FlexProps { 
  center?: Boolean 
}

const FlexVertical = styled.div`
  top: 0;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FlexHorizontal = styled.div<FlexProps>`
  top: 0;
  width: 100%;
  margin: 5px;
  display: flex;
  justify-content: ${p => p.center ? 'center' : 'space-between'};
  align-items: center;
`

const Button = styled.button`
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-size: 15px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 10px 15px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    outline: 0;
    opacity: 0.85;
  }
`

const ButtonStart = styled(Button)`
  margin: 25px;
`

const Input = styled.input`
  
`
const Card = styled.div`
  width: 400px;
  box-shadow: rgba(7, 41, 128, 0.5) 0 15px 30px -5px;
  border: 1px solid black;
  padding: 150px 0 150px;
  margin: 20px;
  font-size: 50px;
  color: '#5B42F3';
  text-align: center;
`