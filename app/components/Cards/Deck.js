import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import CardBase from './CardBase';

const Deck = props => {
    const { deck } = props;

    return (
        <CardBase
            {...props}
            body={
                <BodyCentered>
                    <Title>{deck.name}</Title>
                    <Subtitle>{Object.keys(deck.cards).length} Cards</Subtitle>
                </BodyCentered>
            }
            actions={[
                {id: 'add', name: 'Add Card', toStack: 'NewCardPage'},
                {id: 'start', name: 'Start Quiz', toStack: 'CardPage'}
            ]}
            isTouchable={true}
            actionColor='purple'
            bodyClickToStack='DeckPage'
        />
    );
}

const BodyCentered = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px #dbdbdb solid;
    margin-bottom: 8px;
`;

const Title = styled.Text`
    font-size: 20px;
`;

const Subtitle = styled.Text`
    color: grey;
`

export default Deck;