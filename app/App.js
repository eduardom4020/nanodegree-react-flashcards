import React from 'react';
import AppTabNavigator from './AppTabNavigator';

import {createAppContainer} from 'react-navigation';

import { getAllDecks } from './api/decks';
import { setLocalNotification } from './api/notifications';

const AppContainer = createAppContainer(AppTabNavigator);

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
        if(setLocalNotification) {
            setLocalNotification();
        }
        
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
