import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import ButtonBase from '../Buttons/ButtonBase';

const BASE_ACTIONS = [
    {id: 'add', name: 'Add Card'},
    {id: 'start', name: 'Start Quiz'}
]

const DeckPage = props => {
    const { deck, actions=BASE_ACTIONS } = props;

    return (
        <PageBase>
            <Body>
                <Title>{deck.name}</Title>
                <Subtitle>{Object.keys(deck.cards).length} Cards</Subtitle>
            </Body>
            <Actions>
                {
                    actions.map((action, index) => (
                        <Fragment key={`fragment-${index}`}>
                            <ButtonBase 
                                text={action.name} 
                                filledColor={(index % 2 === 1) && 'purple'}
                                borderColor={(index % 2 === 0) && 'purple'}
                                textColor={(index % 2 === 1) && 'white'}
                            />
                        </Fragment>
                    ))
                }
            </Actions>
        </PageBase>
    );
}

const PageBase = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Body = styled.View`
    flex: 4;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Actions = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 0 26px 0;
`

const Title = styled.Text`
    font-size: 35px;
`;

const Subtitle = styled.Text`
    font-size: 20px;
    color: grey;
`

export default DeckPage;