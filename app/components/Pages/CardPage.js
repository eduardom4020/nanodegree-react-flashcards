import React, { Fragment, Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import AppMain from '../Styled/AppMain';
import ButtonBase from '../Buttons/ButtonBase';

import { setLocalNotification, clearLocalNotification } from '../../api/notifications';

class CardPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            checkAnswer: false,
            currentCard: null,
            answeredCardsIds: [],
            cards: null,
            getResult: false,
            points: 0,
            correctCardsIds: [],
            incorrectCardsIds: []
        }
    }

    resetQuiz = () => {
        this.setState ({
            checkAnswer: false,
            currentCard: null,
            answeredCardsIds: [],
            cards: null,
            getResult: false,
            points: 0,
            correctCardsIds: [],
            incorrectCardsIds: []
        });
    }

    startQuiz = async () => {
        await Promise.resolve(this.resetQuiz());
        await Promise.resolve(this.selectRandomCard());
    }

    backToDeck = () => {
        const { deck } = this.extractFromProps();
        const { navigation } = this.props;

        this.resetQuiz();

        navigation.navigate('DeckPage', {deck, ...this.props});
    }

    extractFromProps = () => {
        const { deck: propsDeck, navigation } = this.props;
        const deck = propsDeck || navigation.getParam('deck', {name: 'No Data', cards: []});
        const { cards } = deck || {};
        return { cards, deck };
    }

    selectRandomCard = CARDS => {
        const { cards, deck } = CARDS || this.extractFromProps();
        const { answeredCardsIds } = this.state;
        const validCards = Object.values(cards).filter(card => answeredCardsIds.indexOf(card.id) === -1);
        const currentCard = validCards[Math.floor(Math.random()*validCards.length)];
        this.setState({currentCard, cards, deck});
    }

    checkAnswer = cardId => event => {
        this.setState(prevState => ({
            checkAnswer: true,
            answeredCardsIds: [...prevState.answeredCardsIds, cardId]
        }));
    }

    confirmAnswer = (cardId, isCorrect) => event => {
        const { cards, answeredCardsIds } = this.state;

        if(answeredCardsIds.length === Object.keys(cards).length) {
            if(clearLocalNotification) {
                clearLocalNotification();
            }
            
            if(setLocalNotification) {
                setLocalNotification();
            }

            this.setState(prevState => ({
                checkAnswer: false,
                currentCard: {name: 'finished', type: 'no-type', id: 'f', answer: 'finished'},
                points: isCorrect ? prevState.points + 1 : prevState.points,
                correctCardsIds: isCorrect ? [...prevState.correctCardsIds, cardId] : prevState.correctCardsIds,
                incorrectCardsIds: !isCorrect ? [...prevState.incorrectCardsIds, cardId] : prevState.incorrectCardsIds,
                getResult: true
            }));
        } else {
            this.selectRandomCard();

            this.setState(prevState => ({
                checkAnswer: false,
                points: isCorrect ? prevState.points + 1 : prevState.points,
                correctCardsIds: isCorrect ? [...prevState.correctCardsIds, cardId] : prevState.correctCardsIds,
                incorrectCardsIds: !isCorrect ? [...prevState.incorrectCardsIds, cardId] : prevState.incorrectCardsIds
            }));
        }
    }

    componentDidMount() {
        this.startQuiz();
    }

    render() {
        const { 
            checkAnswer, 
            currentCard, 
            cards, 
            answeredCardsIds, 
            deck,
            getResult,
            correctCardsIds
        } = this.state;

        const cardsAmt = cards && Object.keys(cards).length;
        const correctAmt = correctCardsIds.length;

        console.log('RENDERING CARD PAGE', cardsAmt, correctAmt)

        return (
            <AppMain>
                <PageBase>
                {
                    cards && 
                    currentCard && (
                        <Fragment>
                            <Header>
                                <Subtitle>{`${answeredCardsIds.length} of ${cardsAmt}`}</Subtitle>
                                <Subtitle style={{width: 180}}>{deck.name}</Subtitle>
                            </Header>
                            <Body>
                                {
                                    getResult ?
                                        (
                                            <Fragment>
                                                <Title>
                                                    {
                                                        correctAmt === cardsAmt ? 
                                                            'Impressive' 
                                                        : correctAmt >= cardsAmt * 0.8 ?
                                                            'Congratulations'
                                                        : correctAmt >= cardsAmt * 0.6 ?
                                                            'Good'
                                                        : correctAmt >= cardsAmt * 0.3 ?
                                                            'You can do better'
                                                        : correctAmt >= cardsAmt * 0.1 ?
                                                            "Let's study more"
                                                        :
                                                            'So bad'
                                                    }
                                                </Title>
                                                <Subtitle>These are your results:</Subtitle>
                                                <ResultBody>
                                                    <Title>{correctAmt > 0 ? `${correctAmt / cardsAmt * 100}%\n of Correct Answers` : 'Everything is Wrong!'}</Title>
                                                </ResultBody>
                                            </Fragment>
                                        )
                                    : !checkAnswer ? 
                                        (
                                            <Fragment>
                                                <Subtitle>{currentCard.type}</Subtitle>
                                                <Title>{currentCard.question}</Title>
                                            </Fragment>
                                        )
                                    :
                                        (
                                            <Title>{currentCard.answer}</Title>
                                        )
                                }
                            </Body>
                            <Actions>
                                {
                                    getResult ?
                                        (
                                            <Fragment>
                                                <ButtonBase 
                                                    text='Repeat Quiz' 
                                                    borderColor={'purple'}
                                                    textColor={'purple'}
                                                    onClick={this.startQuiz}
                                                />
                                                <ButtonBase 
                                                    text='Back To Deck' 
                                                    filledColor={'purple'}
                                                    textColor={'white'}
                                                    onClick={this.backToDeck}
                                                />
                                            </Fragment>
                                        )
                                    : !checkAnswer ? 
                                        (
                                            <ButtonBase 
                                                text='Check Answer!' 
                                                filledColor='purple'
                                                textColor='white'
                                                onClick={this.checkAnswer(currentCard.id)}
                                            />
                                        )
                                    :
                                        (
                                            <Fragment>
                                                <ButtonBase 
                                                    text='Correct' 
                                                    filledColor='#b7ffad'
                                                    textColor='black'
                                                    onClick={this.confirmAnswer(currentCard.id, true)}
                                                />
                                                <ButtonBase 
                                                    text='Incorrect' 
                                                    filledColor='#ff6da0'
                                                    textColor='black'
                                                    onClick={this.confirmAnswer(currentCard.id, false)}
                                                />
                                            </Fragment>
                                        )
                                }
                            </Actions>
                        </Fragment>
                    )
                }
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

const Header = styled.View`
    flex: 2;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
`;

const Body = styled.View`
    flex: 5;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ResultBody = styled.View`
    flex: 5;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Actions = styled.View`
    flex: 2;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 0 26px 0;
`

const Title = styled.Text`
    flex: 2;
    font-size: 35px;
    text-align: center
`;

const Subtitle = styled.Text`
    flex: 1;
    font-size: 20px;
    color: grey;
`

export default CardPage;