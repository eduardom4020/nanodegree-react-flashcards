import React, { Fragment, Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import ButtonBase from '../Buttons/ButtonBase';

class CardPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            checkAnswer: false
        }
    }

    checkAnswer = () => {
        this.setState({
            checkAnswer: true
        })
    }

    render() {
        const { card } = this.props;
        const { checkAnswer } = this.state;

        return (
            <PageBase>
                <Body>
                    {
                        !checkAnswer && (
                            <Subtitle>{card.type}</Subtitle>
                        )
                    }
                    {
                        !checkAnswer ? 
                            (
                                <Title>{card.question}</Title>
                            )
                        :
                            (
                                <Title>{card.answer}</Title>
                            )
                    }
                </Body>
                <Actions>
                    {
                        !checkAnswer ? 
                            (
                                <ButtonBase 
                                    text='Check Answer!' 
                                    filledColor='purple'
                                    textColor='white'
                                    onClick={this.checkAnswer}
                                />
                            )
                        :
                            (
                                <Fragment>
                                    <ButtonBase 
                                        text='Correct' 
                                        filledColor='#b7ffad'
                                        textColor='black'
                                    />
                                    <ButtonBase 
                                        text='Incorrect' 
                                        filledColor='#ff6da0'
                                        textColor='black'
                                    />
                                </Fragment>
                            )
                    }
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
`;

const Subtitle = styled.Text`
    font-size: 20px;
    color: grey;
`

export default CardPage;