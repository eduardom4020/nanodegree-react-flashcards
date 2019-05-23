export const PlaceholderCard1 = {
    c1: {
        id: 'c1',
        question: 'Question 1',
        answer: 'Aswer 1',
        type: 'Question Type'
    }
};
export const PlaceholderCard2 = {
    c2: {
        id: 'c2',
        name: 'PlaceholderCard2',
        question: 'Question 2',
        answer: 'Aswer 2'
    }
};
export const PlaceholderCard3 = {
    c3: {
        id: 'c3',
        name: 'PlaceholderCard3',
        question: 'Question 3',
        answer: 'Aswer 3'
    }
};
export const PlaceholderCard4 = {
    c4: {
        id: 'c4',
        name: 'PlaceholderCard4',
        question: 'Question 4',
        answer: 'Aswer 4'
    }
};
export const PlaceholderCard5 = {
    c5: {
        id: 'c5',
        name: 'PlaceholderCard5',
        question: 'Question 5',
        answer: 'Aswer 5'
    }
};


export const PlaceholderCardStore = {
    ...PlaceholderCard1,
    ...PlaceholderCard2,
    ...PlaceholderCard3,
    ...PlaceholderCard4,
    ...PlaceholderCard5
};

export const PlaceholderDeck1 = {
    pd1:  {
        id: 'pd1',
        name: 'PlaceholderDeck1',
        cards: {
            ...PlaceholderCard1,
            ...PlaceholderCard2,
            ...PlaceholderCard3,
            ...PlaceholderCard4,
            ...PlaceholderCard5
        }
    }
};

export const PlaceholderDeckStore = {
    ...PlaceholderDeck1
};