import React from 'react';
import AppTabNavigator from './AppTabNavigator';

import {createAppContainer} from 'react-navigation';

const AppContainer = createAppContainer(AppTabNavigator);

import { getAllDecks } from './api/decks';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            decks: null
        };
    }

    refreshDeckList = async () => {
        const decks = await Promise.resolve(getAllDecks());
        this.setState({
            decks
        });
    }

    componentDidMount() {
        this.refreshDeckList();
    }

    render() {
        return (
            <AppContainer screenProps={{
                ...this.state,
                refreshDeckList: this.refreshDeckList
            }} />
        );
    }
}
