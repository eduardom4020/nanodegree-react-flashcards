import { AsyncStorage } from 'react-native';
import { DECKS_SCHEMA, INITIAL_DATA as INITIAL_CARDS_DATA } from './constants';
import { randomId } from './helpers';
import { addCard } from './cards';

const INITIAL_ID = randomId();
const INITIAL_DATA = {
    [INITIAL_ID]:  {
        id: INITIAL_ID,
        name: 'PlaceholderDeck1',
        cards: INITIAL_CARDS_DATA
    }
}
AsyncStorage.setItem(DECKS_SCHEMA, JSON.stringify(INITIAL_DATA));

export const addDeck = ({name}) => {
    const id = randomId();

    const toStore = {
        [id]: {
            id, 
            name,
            cards: {}
        }
    };

    AsyncStorage.mergeItem(DECKS_SCHEMA, JSON.stringify(toStore));
    return toStore[id];
}

export const getDeck = async (deckId) => {
    const decks = await Promise.resolve(getAllDecks());

    if(decks) {
        return decks[deckId];
    } else {
        return false;
    }
}

export const getAllDecks = async () => {
    try {
        const decks = await Promise.resolve(AsyncStorage.getItem(DECKS_SCHEMA));
        return JSON.parse(decks);
    } catch(err) {
        console.log('ERROR getting decks', err);
        return false;
    }
}

export const attachCardToDeck = async ({deckId, question, answer, type}) => {
    try {
        const addedCard = await Promise.resolve(addCard({question, answer, type}));
        const decks = await Promise.resolve(getAllDecks());

        if(decks) {
            const deck = decks[deckId];
            deck.cards = {...deck.cards, ...addedCard};
            decks[deckId] = deck;

            AsyncStorage.setItem(DECKS_SCHEMA, JSON.stringify(decks));

            return deck;
        } else {
            return false;
        }
    } catch(err) {
        console.log('ERROR appending card to deck', err);
        return false;
    }
}

export const deattachCardFromDeck = async ({deckId, cardId}) => {
    try {
        const decks = await Promise.resolve(getAllDecks());

        if(decks) {
            const deck = decks[deckId];
            delete deck.cards[cardId];
            decks[deckId] = deck;

            AsyncStorage.setItem(DECKS_SCHEMA, JSON.stringify(decks));

            return true;
        } else {
            return false;
        }
    } catch(err) {
        console.log('ERROR appending card to deck', err);
        return false;
    }
}