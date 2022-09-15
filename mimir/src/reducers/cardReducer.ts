import { Action } from 'models/Action'
import { CardsState } from 'models/CardState'

export function cardReducer(cardState: CardsState, action: Action): CardsState {

    switch (action.type) {
        case 'add-card':
            cardState.cards.push(action.card)
            return { ...cardState }
        case 'delete-card':
            return { ...cardState, cards: cardState.cards.filter(x => x !== action.card) }
        case 'initialize':
            return { ...cardState, cards: action.cards }
        case 'update-card':
            const newList = cardState.cards.map(card => {
                if (card.id === action.card.id) {
                    return { ...card, front: action.card.front, back: action.card.back }
                }
                return card
            })
            return { ...cardState, cards: newList }
        case 'update-game':
            return { ...cardState, game: action.game }

    }
}
