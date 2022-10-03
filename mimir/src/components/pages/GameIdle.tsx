import { startGame } from "api/mimir-backend"
import { Button, FlexVertical } from "components/StyledComponents"
import { AppContext } from "data/Context"
import { useContext } from "react"
import styled from "styled-components"

export const GameIdle = () => {
    const { dispatch } = useContext(AppContext)
    const start = async () => {
        const game = await startGame()
        dispatch({ type: 'update-game', game })
    }
    return (
        <FlexVertical>
            <ButtonStart onClick={() => start()}>Start New Game</ButtonStart>
            <h3>No game running!</h3>
        </FlexVertical>
    )

}

const ButtonStart = styled(Button)`
  margin: 25px;
`