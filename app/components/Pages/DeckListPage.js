import React, { Component } from 'react';
import AppMain from '../Styled/AppMain';

import { ScrollView, Text, Dimensions } from 'react-native';

import { PlaceholderDeck1 } from '../../placeholder/data/decks';
import { Platform } from 'react-native';

import Deck from '../Cards/Deck';

import { getAllDecks } from '../../api/decks';

class DeckListPage extends Component {
    componentDidUpdate(prevProps, prevState) {
      const { navigation } = this.props;
      const deck = navigation.getParam('deck', false);

      if(deck && JSON.stringify(deck) !== JSON.stringify(prevProps.deck)) {
        navigation.navigate('DeckPage', {...this.props, deck});
      }
      
    }
    
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
                                        {...this.props}
                                        {...this.props.screenProps}
                                    />
                                ))
                            )
                        :
                            (
                                <Text>No decks available</Text>
                            )
                    }
                </ScrollView>
            </AppMain>
        );
    }
}

export default DeckListPage;