import React from 'react';
import AppMain from '../Styled/AppMain';

import { PlaceholderDeck1 } from '../../placeholder/data/decks';

import Deck from '../Cards/Deck';

const DeckListPage = props => (
    <AppMain>
        {
            props.decks ?
                (
                    Object.values(props.decks).map(deck => (
                        <Deck deck={deck} />
                    ))
                )
            :
                (
                    <Deck deck={PlaceholderDeck1.pd1} />
                )
        }
    </AppMain>
);

export default DeckListPage;