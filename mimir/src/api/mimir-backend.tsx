import { CardItem } from "models/CardItem";
import { Game } from "models/Game";

export const fetchCards = async (): Promise<CardItem[]> => {
    const res = await fetch(`/api/cards/`);
    if (!res.ok) {
        throw new Error(`Backend HTTP error: Status ${res.status}`);
    }
    return await res.json()
}

export const addCard = async (front: string, back: string): Promise<CardItem> => {
    const newCard: CardItem = {
        id: '',
        front: front,
        back: back
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCard)
    };
    const res = await fetch(`/api/cards/`, requestOptions)
    if (!res.ok) {
        throw new Error(`Backend HTTP error: Status ${res.status}`)
    }
    return await res.json()
}

export const deleteCard = async (card: CardItem) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(card)
    };
    const res = await fetch(`/api/cards/` + card.id, requestOptions)
    if (!res.ok) {
        throw new Error(`Backend HTTP error: Status ${res.status}`)
    }
}

export const updateCard = async (card: CardItem): Promise<CardItem> => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(card)
    };
    const res = await fetch(`/api/cards/` + card.id, requestOptions)
    if (!res.ok) {
        throw new Error(`Backend HTTP error: Status ${res.status}`)
    }
    return await res.json()
}

export const fetchGame = async (): Promise<Game | undefined> => {
    const res = await fetch(`/api/game/`)
    if (res.status === 404) {
        return undefined;
    }
    if (res.ok) {
        return await res.json()
    }  
}