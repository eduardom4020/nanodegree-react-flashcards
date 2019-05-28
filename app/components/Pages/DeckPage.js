import React, { Fragment, Component } from 'react';
import { Text, View, BackHandler } from 'react-native';
import styled from 'styled-components';

import AppMain from '../Styled/AppMain';
import ButtonBase from '../Buttons/ButtonBase';

const BASE_ACTIONS = [
    {id: 'add', name: 'Add Card', toStack: 'NewCardPage'},
    {id: 'start', name: 'Start Quiz', toStack: 'CardPage'}
]

class DeckPage extends Component {
    componentDidMount() {
        BackHandler.addEventListener('backPress', () => {
            const { navigation } = this.props;
            navigation.navigate('DeckListPage');
            return true;
        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('backPress');
    }

    render() {
        const { 
            deck: propsDeck, 
            actions=BASE_ACTIONS,
            navigation
        } = this.props;

        const deck = propsDeck || navigation.getParam('deck', {name: 'No Data', cards: 0});

        return (
            <AppMain>
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
                                        onClick={() => (
                                            navigation && 
                                            action.toStack &&
                                            navigation.navigate(action.toStack, {deck, ...this.props})
                                        )}
                                    />
                                </Fragment>
                            ))
                        }
                    </Actions>
                </PageBase>
            </AppMain>
        );
    }
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