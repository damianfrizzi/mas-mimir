
type InitializeAction = {
    type: 'initialize'
    //cards: CardItem[]
}

type AddCardAction = {
    type: 'add-card'
    front: string
    back: string
}

type DeleteCardAction = {
    type: 'delete-card'
    id: string
}

export type Action = AddCardAction | DeleteCardAction | InitializeAction