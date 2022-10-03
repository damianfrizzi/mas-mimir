import { CardItem } from "./CardItem";
import { Game } from "./Game";

export interface CardsState {
  cards: CardItem[];
  game: Game | undefined;
}

export const initialCardsState: CardsState = {
  cards: [],
  game: undefined,
};
