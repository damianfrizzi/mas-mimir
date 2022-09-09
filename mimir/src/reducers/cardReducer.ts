import { v4 as createId } from 'uuid'
import { CardItem } from 'models/CardItem'
import { Action } from 'models/Action'
import { CardState } from 'models/CardState'

export function cardReducer(cardState: CardState, action: Action): CardState {

    
    const postCard = async (card: CardItem) => {

        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(card)
            };
            const res = await fetch(`/api/cards/`, requestOptions)
            if (!res.ok) {
                throw new Error(`Backend HTTP error: Status ${res.status}`)
            }
            const json: CardItem = await res.json()

        } catch (err) {
            //setError("Something went wrong");
        }
    };

    const deleteCard = async (id: string) => {

        try {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cardState.cards.find(x =>  x.id == id))
            };
            const res = await fetch(`/api/cards/` +  id, requestOptions)
            if (!res.ok) {
                throw new Error(`Backend HTTP error: Status ${res.status}`)
            }

        } catch (err) {
            //setError("Something went wrong");
        }
    };

    switch (action.type) {
        case 'add-card':
            const newCard: CardItem = {
                id: createId(),
                front: action.front,
                back: action.back
            }
            postCard(newCard)
            cardState.cards.push(newCard)
            return { ...cardState }
        case 'delete-card':
            deleteCard(action.id)
            return {...cardState, cards: cardState.cards.filter(x => x.id != action.id)}
        case 'initialize':
            return {...cardState}
    }
}

const newCard: CardItem = {
    id: createId(),
    front: 'front',
    back: 'back'
}

export const initialListState: CardState = {
    cards: [newCard]
}