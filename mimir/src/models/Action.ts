import { CardItem } from "./CardItem"
import { Game } from "./Game"

type InitializeAction = {
    type: 'initialize'
    cards: CardItem[]
}

type AddCardAction = {
    type: 'add-card'
    card: CardItem
}

type DeleteCardAction = {
    type: 'delete-card'
    card: CardItem
}

type UpdateCardAction = {
    type: 'update-card'
    card: CardItem
}

type UpdateGameAction = {
    type: 'update-game'
    game: Game | undefined
}

export type Action = AddCardAction | DeleteCardAction | InitializeAction | UpdateCardAction | UpdateGameAction