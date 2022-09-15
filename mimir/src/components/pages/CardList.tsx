import { fetchCards, addCard, deleteCard } from "api/mimir-backend";
import { AppContext } from "data/Context";
import { CardItem } from "models/CardItem";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";


export const CardList = () => {
  const [inputFront, setInputFront] = useState('')
  const [inputBack, setInputBack] = useState('')
  const { cards, dispatch } = useContext(AppContext)

  useEffect(() => {
    const onMount = async () => {
      const cards = await fetchCards()
      dispatch({ type: 'initialize', cards })
    }
    onMount()
  }, []);

  const add = async (front: string, back: string) => {
    const resCard = await addCard(front, back)
    dispatch({ type: 'add-card', card: resCard })
    setInputFront('')
    setInputBack('')
  }

  const del = async (card: CardItem) => {
    await deleteCard(card)
    dispatch({ type: 'delete-card', card })
  }

  return (
    <Main>
      <InputContainer>
        <Input onChange={e => setInputFront(e.target.value)} value={inputFront} />
        <Input onChange={e => setInputBack(e.target.value)} value={inputBack} />
        <Button onClick={() => add(inputFront, inputBack)}>Add</Button>
      </InputContainer>
      <OverviewList>
        {cards &&
          cards.map((card: CardItem) => (
            <OverviewListItem key={card.id}>
              {card.id} ({card.front} / {card.back})
              <Link to={"/cards/" + card.id}>Edit</Link>
              <Button onClick={() => del(card)}>delete</Button>
            </OverviewListItem>
          ))}
      </OverviewList>
    </Main>
  )
}


const Main = styled.main`
  margin: 10px;
`;

const OverviewList = styled.ul`
  list-style: none;
  margin: 10px;
  padding: 0px;
`;

const OverviewListItem = styled.li`
  margin: 3px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: left;
`

const Input = styled.input`
  
`

const Button = styled.button`
  
`
