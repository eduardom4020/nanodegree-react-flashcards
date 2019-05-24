import React from 'react';
import AppMain from '../Styled/AppMain';

import { ScrollView } from 'react-native';

import { PlaceholderDeck1 } from '../../placeholder/data/decks';

import Deck from '../Cards/Deck';

const DeckListPage = props => (
    <AppMain>
        <ScrollView 
            contentContainerStyle={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            {
                props.decks ?
                    (
                        Object.values(props.decks).map(deck => (
                            <Deck deck={deck} {...props} />
                        ))
                    )
                :
                    (
                        <Deck deck={PlaceholderDeck1.pd1} {...props} />
                    )
            }
        </ScrollView>
    </AppMain>
);

export default DeckListPage;