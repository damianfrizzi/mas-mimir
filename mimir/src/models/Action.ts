import { CardItem } from "./CardItem";
import { Game } from "./Game";

export enum ActionType {
  INITIALIZE = "initialize",
  ADD_CARD = "add-card",
  DELETE_CARD = "delete-card",
  UPDATE_CARD = "update-card",
  UPDATE_GAME = "update-game",
}

type InitializeAction = {
  type: ActionType.INITIALIZE;
  cards: CardItem[];
};

type AddCardAction = {
  type: ActionType.ADD_CARD;
  card: CardItem;
};

type DeleteCardAction = {
  type: ActionType.DELETE_CARD;
  card: CardItem;
};

type UpdateCardAction = {
  type: ActionType.UPDATE_CARD;
  card: CardItem;
};

type UpdateGameAction = {
  type: ActionType.UPDATE_GAME;
  game: Game | undefined;
};

export type Action =
  | AddCardAction
  | DeleteCardAction
  | InitializeAction
  | UpdateCardAction
  | UpdateGameAction;
