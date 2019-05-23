import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import ButtonBase from './components/Buttons/ButtonBase';
// import CardBase from './components/Cards/CardBase';

import { PlaceholderDeck1 } from './placeholder/data/decks';
// import Deck from './components/Cards/Deck';
// import DeckPage from './components/Pages/DeckPage';
// import CardPage from './components/Pages/CardPage';
// import NewDeckPage from './components/Pages/NewDeckPage';
import NewCardPage from './components/Pages/NewCardPage';

export default class App extends React.Component {
    render() {
        const { pd1 } = PlaceholderDeck1;

        return (
            <View style={styles.container}>
                <NewCardPage />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
