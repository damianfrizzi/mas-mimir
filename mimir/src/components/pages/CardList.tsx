import { CardData } from "data/CardData";
import { CardItem } from "models/CardItem";
import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { cardReducer, initialListState } from "reducers/cardReducer";
import styled from "styled-components/macro";


export const CardList = () => {
  //const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [inputFront, setInputFront] = useState('')
  const [inputBack, setInputBack] = useState('')
  const [state, dispatch] = useReducer(cardReducer, initialListState)

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/cards/`);
      if (!res.ok) {
        throw new Error(`Backend HTTP error: Status ${res.status}`);
      }
      state.cards = await res.json();
      dispatch({ type: 'initialize' })
    } catch (err) {
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const add = (front: string, back: string) => {
    dispatch({ type: 'add-card', front: front, back: back})
  }

  const del = (id: string) => {
    dispatch({ type: 'delete-card', id: id})
  }

  return (
    <Main>
      {error && <div>{error}</div>}
      <InputContainer>
        <Input onChange={e => setInputFront(e.target.value)}/>
        <Input onChange={e => setInputBack(e.target.value)}/>
        <Button onClick={() => add(inputFront,inputBack)}>Add</Button>
      </InputContainer>
      <OverviewList>
        {state.cards &&
          state.cards.map((card: CardItem) => (
            <OverviewListItem key={card.id}>
              {card.id} ({card.front} / {card.back})
              <Link to={"/cards/" + card.id}>Edit</Link>
              <Button onClick={() => del(card.id)}>delete</Button>
            </OverviewListItem>
          ))}
      </OverviewList>
    </Main>
  );
};


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
