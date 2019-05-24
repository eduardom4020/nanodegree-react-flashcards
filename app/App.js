import React from 'react';
import AppTabNavigator from './AppTabNavigator';

import {createAppContainer} from 'react-navigation';

const AppContainer = createAppContainer(AppTabNavigator);

export default class App extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}
