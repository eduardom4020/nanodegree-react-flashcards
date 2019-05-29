import React, { Component } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components';

import AppMain from '../Styled/AppMain';
import ButtonBase from '../Buttons/ButtonBase';

import { attachCardToDeck } from '../../api/decks';

class NewCardPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            question: '',
            answer: '',
            type: ''
        }
    }

    changeText = field => text => {
        this.setState({
            [field]: text
        })
    };

    createCard = async event => {
        const { navigation } = this.props;
        const from = navigation.getParam('from');
        const deck = navigation.getParam('deck');
        const refreshDeckList = navigation.getParam('refreshDeckList', () => console.log('refreshDeckList is null'));

        const newDeck = await Promise.resolve(attachCardToDeck({
            deckId: deck.id,
            ...this.state
        }));

        refreshDeckList();

        this.setState({
            question: '',
            answer: '',
            type: ''
        });

        navigation.navigate(from || 'DeckListPage', {deck: newDeck});
        // navigation.pop();
        // navigation.goBack();
    }

    render() {
        const { question, answer, type } = this.state;

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
                        <Title>Complete these steps to create a card</Title>
                        <Subtitle>Question</Subtitle>
                        <InputField
                            onChangeText={this.changeText('question')}
                            value={question}
                        />
                        <Subtitle>Answer</Subtitle>
                        <InputField
                            onChangeText={this.changeText('answer')}
                            value={answer}
                        />  
                        <Subtitle>Type</Subtitle>
                        <InputField
                            onChangeText={this.changeText('type')}
                            value={type}
                        />  
                    </KeyboardAvoidingView>
                    <Actions>
                        <ButtonBase 
                            text='Create Card!'
                            filledColor='purple'
                            textColor='white'
                            onClick={this.createCard}
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

// const Body = styled.KeyboardAvoidingView`
//     flex: 4;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `;

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
    margin: 32px 0 0 8px;
    align-self: flex-start;
`

const InputField = styled.TextInput`
    flex: 1;
    max-height: 40px;
    width: 300px; 
    border: 1px solid gray;
    border-radius: 8px;
    padding: 8px 4px 8px 4px;
`;

export default NewCardPage;