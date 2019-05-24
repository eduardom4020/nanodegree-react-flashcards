import { 
    createAppContainer, 
    createMaterialTopTabNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import DeckListPage from './components/Pages/DeckListPage';
import NewDeckPage from './components/Pages/NewDeckPage';
import { Platform } from 'react-native';

const CONFIG = {
    Decks: DeckListPage,
    NewDeck: NewDeckPage,
};

const OPTIONS = {
    tabBarOptions: {
        labelStyle: {
            marginTop: 30
        },
        style: {
            backgroundColor: 'purple'
        }
    }
};

const AppTabNavigator = args => (
    Platform.OS === 'ios' ?
        createBottomTabNavigator(CONFIG, OPTIONS)
    :
        createMaterialTopTabNavigator(CONFIG, OPTIONS)
);

export default createAppContainer(AppTabNavigator());