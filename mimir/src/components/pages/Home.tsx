import { setAnswer, startGame, clearGame } from 'api/mimir-backend';
import { AppContext } from 'data/Context';
import { useContext, useState } from 'react';
import styled from 'styled-components/macro'

export const Home = () => {
  const [input, setInput] = useState('')
  const { game, dispatch } = useContext(AppContext)

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

  let correctSolutions = 'Solved '
  correctSolutions += game.solved.filter(x => x.accepted === true).length.toString()
  correctSolutions += ' out of '
  correctSolutions += game.cardCount
  correctSolutions += ' correctly.'

  if (game.cardCount === game.solved.length) {
    return (
      <FlexVertical>
        <div><Button onClick={() => reset()}>Start new Game</Button></div>
        <GameRecap>{correctSolutions}</GameRecap>
        <table>
          <tr>
            <TableHeader>Front</TableHeader>
            <TableHeader>Back</TableHeader>
            <TableHeader>Your Answer</TableHeader>
            <TableHeader>Accepted</TableHeader>
          </tr>
          {game.solved.map(answer =>
            <tr key={answer.id}>
              <TableData>
                {answer.front}
              </TableData>
              <TableData>
                {answer.back}
              </TableData>
              <TableData>
                {answer.answer}
              </TableData>
              <TableData>
                {answer.accepted ? <span>&#x2714;</span> : <span>&#x2718;</span>}
              </TableData>
            </tr>
          )}
        </table>

      </FlexVertical >

    )
  }

  const percent: number = Math.floor(100 / game.cardCount * game.solved.length)
  return (
    <FlexVertical>
      <FlexHorizontal>
        <h3>Progress: {percent} %</h3>
        <Button onClick={() => clear()}>Delete Game</Button>
      </FlexHorizontal>
      <FlexVertical>
        <Card>{game.front}</Card>
        <FlexHorizontal>
          <Input onChange={e => setInput(e.target.value)} value={input} />
          <Button onClick={() => answer()}>Submit</Button>
        </FlexHorizontal>
      </FlexVertical>
    </FlexVertical>
  )
}

const TableHeader = styled.th`
  text-align: left;
  padding: 8px 20px;
`
const TableData = styled.td`
  text-align: left;
  padding: 8px 20px;
`

const GameRecap = styled.p`
  margin: 20px 0;
`

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
  background: 0;
  border: solid 1px;
  border-radius: 8px;
  width: 40%;
  padding: 5px 5px;
  outline: none;
  font-size: 1.2em;
  &:focus {
    border: solid 3px #00DDEB;
  }
`

const Card = styled.div`
  width: 400px;
  box-shadow: rgba(7, 41, 128, 0.5) 0 15px 30px -5px;
  border: 2px solid #3d28c5;
  padding: 150px 0 150px;
  margin-top: 20px;
  margin-bottom: 20px;;
  font-size: 50px;
  color: #3d28c5;
  text-align: center;
  font-weight: bold;
  word-wrap: break-word;
`