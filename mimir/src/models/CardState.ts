import { CardItem } from "./CardItem";

export interface CardsState {
    cards: CardItem[]
}

export const initialCardsState: CardsState = {
    cards: []
} 