import { fetchGame } from 'api/mimir-backend';
import { AppContext } from 'data/Context';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <Main>
      You're home!
      {game !== undefined ? game.front : <Link to=''>Start Game</Link>}
    </Main>
  )
}

const Main = styled.main`
  margin: 10px;
`