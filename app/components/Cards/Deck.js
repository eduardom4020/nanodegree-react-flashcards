import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import CardBase from './CardBase';

const Deck = props => {
    const { deck } = props;

    return (
        <CardBase
            body={
                <BodyCentered>
                    <Title>{deck.name}</Title>
                    <Subtitle>{Object.keys(deck.cards).length} Cards</Subtitle>
                </BodyCentered>
            }
            actions={[
                {id: 'add', name: 'Add Card'},
                {id: 'start', name: 'Start Quiz'}
            ]}
            isTouchable={true}
            actionColor='purple'
        />
    );
}

const BodyCentered = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 20px;
`;

const Subtitle = styled.Text`
    color: grey;
`

export default Deck;