import { clearGame, setAnswer } from "api/mimir-backend"
import { Button, FlexHorizontal, FlexVertical, Input } from "components/StyledComponents"
import { AppContext } from "data/Context"
import { useContext, useState } from "react"
import styled from "styled-components"

export const GameActive = () => {
    const [input, setInput] = useState('')
    const { game, dispatch } = useContext(AppContext)

    const answer = async () => {
        const game = await setAnswer(input)
        dispatch({ type: 'update-game', game })
        setInput('')
    }

    const clear = async () => {
        const game = await clearGame()
        dispatch({ type: 'update-game', game })
    }

    const percent: number | undefined = game && Math.floor(100 / game.cardCount * game.solved.length)
    return (
        <FlexVertical>
            <FlexHorizontal>
                <h3>Progress: {percent} %</h3>
                <Button onClick={() => clear()}>Delete Game</Button>
            </FlexHorizontal>
            <FlexVertical>
                <Card>{game?.front}</Card>
                <FlexHorizontal>
                    <Input onChange={e => setInput(e.target.value)} placeholder='Answer' value={input} />
                    <Button onClick={() => answer()}>Submit</Button>
                </FlexHorizontal>
            </FlexVertical>
        </FlexVertical>
    )
}

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