import { 
    createAppContainer,
    createStackNavigator
} from 'react-navigation';

import DeckPage from './components/Pages/DeckPage';
import DeckListPage from './components/Pages/DeckListPage';
import CardPage from './components/Pages/CardPage';
import NewCardPage from './components/Pages/NewCardPage';

const CONFIG = {
    DeckListPage,
    DeckPage,
    CardPage,
    NewCardPage
};

const OPTIONS = {
    initialRouteName: 'DeckListPage',
    headerMode: 'none'
};

const DeckStackNavigator = createStackNavigator(CONFIG, OPTIONS);

export default DeckStackNavigator;