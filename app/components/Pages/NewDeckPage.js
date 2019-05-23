import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import styled from 'styled-components';

import ButtonBase from '../Buttons/ButtonBase';

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

    render() {
        const { deckName } = this.state;

        return (
            <PageBase>
                <Body>
                    <Title>Give a name to your deck</Title>
                    <InputField
                        onChangeText={this.changeText}
                        value={deckName}
                    />
                </Body>
                <Actions>
                    <ButtonBase 
                        text='Create Deck!'
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