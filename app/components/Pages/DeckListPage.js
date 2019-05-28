import React, { Component } from 'react';
import AppMain from '../Styled/AppMain';

import { ScrollView, Text, Dimensions } from 'react-native';

import { PlaceholderDeck1 } from '../../placeholder/data/decks';

import Deck from '../Cards/Deck';

import { getAllDecks } from '../../api/decks';

class DeckListPage extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         decks: null
    //     };
    // }

    // refreshDeckList = async () => {
    //     const decks = await Promise.resolve(getAllDecks());
    //     this.setState({
    //         decks
    //     });
    // }

    // componentDidMount() {
    //     this.refreshDeckList();
    // }

    render() {
        const { decks } = this.props.screenProps;
        const screenWidth = Dimensions.get('window').width;

        return (
            <AppMain>
                <ScrollView 
                    style= {{ 
                        flex: 1,
                        width: screenWidth,
                        marginTop: 16,
                        marginBottom: 16,
                    }}
                    // behaviour = "height"
                    contentContainerStyle={{
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}
                >
                    {
                        decks ?
                            (
                                Object.values(decks).map(deck => (
                                    <Deck 
                                        style={{marginBottom: 4, flex: 1}}
                                        key={`deck-${deck.id}`}
                                        deck={deck} 
                                        // refreshDeckList={this.refreshDeckList}
                                        {...this.props}
                                        {...this.props.screenProps}
                                    />
                                ))
                            )
                        :
                            (
                                // <Deck deck={PlaceholderDeck1.pd1} {...this.props} />
                                <Text>No decks available</Text>
                            )
                    }
                </ScrollView>
            </AppMain>
        );
    }
}

export default DeckListPage;