import { Action, ActionType } from "models/Action";
import { CardsState } from "models/CardState";

export function cardReducer(cardState: CardsState, action: Action): CardsState {
  switch (action.type) {
    case ActionType.ADD_CARD:
      cardState.cards.push(action.card);
      return { ...cardState };
    case ActionType.DELETE_CARD:
      return {
        ...cardState,
        cards: cardState.cards.filter((x) => x !== action.card),
      };
    case ActionType.INITIALIZE:
      return { ...cardState, cards: action.cards };
    case ActionType.UPDATE_CARD:
      const newList = cardState.cards.map((card) => {
        if (card.id === action.card.id) {
          return { ...card, front: action.card.front, back: action.card.back };
        }
        return card;
      });
      return { ...cardState, cards: newList };
    case ActionType.UPDATE_GAME:
      return { ...cardState, game: action.game };
  }
}
