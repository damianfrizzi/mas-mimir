import { addCard, deleteCard } from "api/mimir-backend";
import {
  Button,
  FlexHorizontal,
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
    <>
      <FlexHorizontal center={true}>
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
      </FlexHorizontal>
      <FlexHorizontal center={true}>
        <table>
          <tbody>
            {cards &&
              cards.map((card: CardItem) => (
                <tr key={card.id}>
                  <TableData>{card.front}</TableData>
                  <TableData>{card.back}</TableData>
                  <ButtonTableData>
                    <NarrowLinkButton to={"/cards/" + card.id}>
                      Edit
                    </NarrowLinkButton>
                  </ButtonTableData>
                  <ButtonTableData>
                    <NarrowButton onClick={() => del(card)}>Delete</NarrowButton>
                  </ButtonTableData>
                </tr>
              ))}
          </tbody>
        </table>
      </FlexHorizontal>
    </>
  );
};

const Main = styled.main`
  margin: 10px;
`;

const InputContainer = styled(FlexHorizontal)`
  justify-content: center;
  max-width: 700px;
`;

const ButtonTableData = styled(TableData)`
  padding-right: 0;
`;
