import { fetchGame, startGame } from 'api/mimir-backend';
import { AppContext } from 'data/Context';
import { useContext, useEffect } from 'react';
import styled from 'styled-components/macro'

export const Home = () => {
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

  return (
    <Main>
      You're home!
      <p>Progress: {game?.solved.length} / {game?.cardCount}</p>
      {game !== undefined ? game.front : <button onClick={() => start()}>Start Game</button>}
    </Main>
  )
}

const Main = styled.main`
  margin: 10px;
`