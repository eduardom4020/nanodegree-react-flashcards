import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import styled from 'styled-components';

import ButtonBase from '../Buttons/ButtonBase';

class NewCardPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            question: '',
            answer: ''
        }
    }

    changeText = field => text => {
        this.setState({
            [field]: text
        })
    };

    render() {
        const { question, answer } = this.state;

        return (
            <PageBase>
                <Body>
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
                </Body>
                <Actions>
                    <ButtonBase 
                        text='Create Card!'
                        filledColor='purple'
                        textColor='white'
                    />
                </Actions>
            </PageBase>
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