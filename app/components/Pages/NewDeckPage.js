import React, { Component } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components';

import AppMain from '../Styled/AppMain';

import ButtonBase from '../Buttons/ButtonBase';

import { addDeck } from '../../api/decks';

class NewDeckPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            deckName: ''
        }
    }

    changeText = text => {
        this.setState({
            deckName: text
        })
    };

    createDeck = async event => {
        const { deckName } = this.state;
        const { navigation } = this.props;
        const { refreshDeckList } = this.props.screenProps;

        const res = await Promise.resolve(addDeck({
            name: deckName
        }));

        refreshDeckList();

        this.setState({
            deckName: ''
        });

        navigation.navigate('DeckListPage');
    }

    render() {
        const { deckName } = this.state;

        return (
            <AppMain>
                <PageBase>
                    <KeyboardAvoidingView 
                        behavior='position' 
                        contentContainerStyle={{
                            flex: 4,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        enabled
                    >
                        <Title>Give a name to your deck</Title>
                        <InputField
                            onChangeText={this.changeText}
                            value={deckName}
                        />
                    </KeyboardAvoidingView>
                    <Actions>
                        <ButtonBase 
                            text='Create Deck!'
                            filledColor='purple'
                            textColor='white'
                            onClick={this.createDeck}
                        />
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
    margin: 0 0 64px 0;
`

const Title = styled.Text`
    font-size: 35px;
    text-align: center;
`;

const Subtitle = styled.Text`
    font-size: 20px;
    color: grey;
`

const InputField = styled.TextInput`
    flex: 1;
    max-height: 40px;
    width: 300px; 
    border: 1px solid gray;
    border-radius: 8px;
    padding: 8px 4px 8px 4px;
    margin: 32px 0 0 0;
`;

export default NewDeckPage;