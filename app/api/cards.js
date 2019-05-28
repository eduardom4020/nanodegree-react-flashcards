import { AsyncStorage } from 'react-native';
import { CARDS_SCHEMA, INITIAL_DATA } from './constants';
import { randomId } from './helpers'

AsyncStorage.setItem(CARDS_SCHEMA, JSON.stringify(INITIAL_DATA));

export const addCard = async ({question, answer, type}) => {
    const id = randomId();

    const toStore = {
        [id]: {
            id, 
            question, 
            answer, 
            type
        }
    };

    try {
        await Promise.resolve(AsyncStorage.mergeItem(CARDS_SCHEMA, JSON.stringify(toStore)));
        return toStore;
    } catch(err) {
        console.log('ERROR adding card', err);
        return false;
    }
}

export const getCard = async (cardId) => {
    const cards = await Promise.resolve(getAllCards());

    if(cards) {
        return cards[cardId];
    } else {
        return false;
    }
}

export const getAllCards = async () => {
    try {
        const cards = await Promise.resolve(AsyncStorage.getItem(CARDS_SCHEMA));
        return JSON.parse(cards);
    } catch(err) {
        console.log('ERROR getting cards', err);
        return false;
    }
}