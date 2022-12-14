import { updateCard } from "api/mimir-backend";
import { Input, LinkButton } from "components/StyledComponents";
import { AppContext } from "data/Context";
import { ActionType } from "models/Action";
import { CardItem } from "models/CardItem";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";

export const EditCard = () => {
  const [inputFront, setInputFront] = useState("");
  const [inputBack, setInputBack] = useState("");
  const { id } = useParams();
  const { cards, dispatch } = useContext(AppContext);

  useEffect(() => {
    const onMount = async () => {
      const cardToEdit = cards.find((x) => x.id === id);
      if (cardToEdit) {
        setInputFront(cardToEdit.front);
        setInputBack(cardToEdit.back);
      }
    };
    onMount();
  }, [cards, id]);

  const update = async () => {
    const updatedCard: CardItem = {
      id: id ?? "",
      front: inputFront,
      back: inputBack,
    };
    const card = await updateCard(updatedCard);
    dispatch({ type: ActionType.UPDATE_CARD, card });
  };

  return (
    <Container>
      <Input
        onChange={(e) => setInputFront(e.target.value)}
        placeholder="Front"
        value={inputFront}
      />
      <Input
        onChange={(e) => setInputBack(e.target.value)}
        placeholder="Back"
        value={inputBack}
      />
      <LinkButton onClick={update} to="/cards">
        Update
      </LinkButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 25px auto;
  width: 100%;
  max-width: 700px;
`;
