import { addCard, deleteCard } from "api/mimir-backend";
import {
  Button,
  Input,
  NarrowButton,
  NarrowLinkButton,
  TableData,
} from "components/StyledComponents";
import { AppContext } from "data/Context";
import { ActionType } from "models/Action";
import { CardItem } from "models/CardItem";
import { useContext, useState } from "react";
import styled from "styled-components/macro";

export const CardList = () => {
  const [inputFront, setInputFront] = useState("");
  const [inputBack, setInputBack] = useState("");
  const { cards, dispatch } = useContext(AppContext);

  const add = async (front: string, back: string) => {
    const resCard = await addCard(front, back);
    dispatch({ type: ActionType.ADD_CARD, card: resCard });
    setInputFront("");
    setInputBack("");
  };

  const del = async (card: CardItem) => {
    await deleteCard(card);
    dispatch({ type: ActionType.DELETE_CARD, card });
  };

  return (
    <Container>
      <InputContainer>
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
        <Button onClick={() => add(inputFront, inputBack)}>Add</Button>
      </InputContainer>
      <Table>
        <tbody>
          {cards &&
            cards.map((card: CardItem) => (
              <TableRow key={card.id}>
                <TableData>{card.front}</TableData>
                <TableData>{card.back}</TableData>
                <ActionsTableData>
                  <NarrowLinkButton to={"/cards/" + card.id}>
                    Edit
                  </NarrowLinkButton>

                  <NarrowButton onClick={() => del(card)}>Delete</NarrowButton>
                </ActionsTableData>
              </TableRow>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  margin: 25px auto;
  width: 100%;
  max-width: 700px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const Table = styled.table`
  margin-top: 25px;
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border-bottom: #efefef 1px solid;
`;

const ActionsTableData = styled(TableData)`
  display: flex;
  justify-content: end;
  gap: 15px;
  padding-right: 0;
`;
