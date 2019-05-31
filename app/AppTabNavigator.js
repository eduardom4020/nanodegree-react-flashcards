import React from 'react';

import { 
    createMaterialTopTabNavigator,
    createBottomTabNavigator
} from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';

import NewDeckPage from './components/Pages/NewDeckPage';
import { Platform } from 'react-native';

import DecksStackNavigator from './DecksStackNavigator';

const CONFIG = {
    Decks: {screen: DecksStackNavigator, navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (<Ionicons name='ios-apps' size={30} color={tintColor}/>)
    })},
    NewDeck: {screen: NewDeckPage, navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (<Ionicons name='ios-add-circle-outline' size={30} color={tintColor}/>)
    })},
};

const ANDROID_OPTIONS = {
    tabBarOptions: {
        labelStyle: {
            marginTop: 30
        },
        style: {
            backgroundColor: 'purple',
            margin: 0
        }
    }
};

const IOS_OPTIONS = {
    tabBarOptions: {
        initialRouteName: 'Decks',
        activeTintColor: 'purple',
        inactiveTintColor: 'plum',
        shadowColor: '#dbdbdb',
        labelStyle: {
            color: 'purple'
        },
        style: {
            height: 54,
            backgroundColor: 'white',
            margin: 0
        }
    }
};

const AppTabNavigator = Platform.OS === 'ios' ?
        createBottomTabNavigator(CONFIG, IOS_OPTIONS)
    :
        createMaterialTopTabNavigator(CONFIG, ANDROID_OPTIONS);

export default AppTabNavigator;