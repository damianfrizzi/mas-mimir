import { CardItem } from "./CardItem"

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

export type Action = AddCardAction | DeleteCardAction | InitializeAction | UpdateCardAction