import { updateCard } from 'api/mimir-backend'
import { Input, LinkButton } from 'components/StyledComponents'
import { AppContext } from 'data/Context'
import { CardItem } from 'models/CardItem'
import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

export const EditCard = () => {
  const [inputFront, setInputFront] = useState('')
  const [inputBack, setInputBack] = useState('')
  const { id } = useParams()
  const { cards, dispatch } = useContext(AppContext)

  useEffect(() => {
    const onMount = async () => {
      const cardToEdit = cards.find(x => x.id === id)
      if (cardToEdit) {
        setInputFront(cardToEdit.front)
        setInputBack(cardToEdit.back)
      }
    }
    onMount()
  }, []);

  const update = async () => {
    const updatedCard: CardItem = {
      id: id ?? '',
      front: inputFront,
      back: inputBack
    }
    const card = await updateCard(updatedCard)
    dispatch({ type: 'update-card', card })
  }

  return (
    <Main>
      <Input onChange={e => setInputFront(e.target.value)} placeholder='Front' value={inputFront} />
      <Input onChange={e => setInputBack(e.target.value)} placeholder='Back' value={inputBack} />
      <LinkButton onClick={() => update()} to="/cards">update</LinkButton>
      <LinkButton to="/cards">cancel</LinkButton>
    </Main>
  )
}

const Main = styled.main`
  margin: 10px;
`

// const Input = styled.input`
  
// `

const Button = styled.button`
  
`