import { 
    createMaterialTopTabNavigator,
    createBottomTabNavigator
} from 'react-navigation';

import NewDeckPage from './components/Pages/NewDeckPage';
import { Platform } from 'react-native';

import DecksStackNavigator from './DecksStackNavigator';

const CONFIG = {
    Decks: DecksStackNavigator,
    NewDeck: NewDeckPage,
};

const OPTIONS = {
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

const AppTabNavigator = Platform.OS === 'ios' ?
        createBottomTabNavigator(CONFIG, OPTIONS)
    :
        createMaterialTopTabNavigator(CONFIG, OPTIONS);

export default AppTabNavigator;