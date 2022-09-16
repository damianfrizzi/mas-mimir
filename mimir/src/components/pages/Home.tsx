import { fetchGame, setAnswer, startGame, clearGame} from 'api/mimir-backend';
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
      <Main>
        No Game running!
        <button onClick={() => start()}>Start Game</button>
      </Main>
    )
  }

  if (game.cardCount === game.solved.length) {
    return (
      <Main>
        Game finished!
        <p>Solved correct: {game.solved.filter(x => x.accepted === true).length} / {game.cardCount}</p>
        {game.solved.map(answer =>
          <p key={answer.id}>{answer.front} / {answer.back} / {answer.answer} / {answer.accepted ? 'correct' : 'wrong'}</p>
        )}
        <div><button onClick={() => reset()}>Start new Game</button></div>
      </Main>

    )
  }

  const percent = Math.floor(100 /  game.cardCount * game.solved.length)
  return (
    <Main>
      Game running!
      <p>Progress: {percent} %</p>
      <p>front: {game.front}</p>
      <div><Input onChange={e => setInput(e.target.value)} value={input} /></div>
      <div><button onClick={() => answer()}>Submit</button> | <button onClick={() => clear()}>Delete Game</button></div>
    </Main>
  )
}

const Main = styled.main`
  margin: 10px;
`

const Input = styled.input`
  
`