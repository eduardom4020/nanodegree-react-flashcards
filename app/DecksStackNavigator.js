import { 
    createAppContainer,
    createStackNavigator
} from 'react-navigation';

import DeckPage from './components/Pages/DeckPage';
import DeckListPage from './components/Pages/DeckListPage';

const CONFIG = {
    DeckListPage,
    DeckPage
};

const OPTIONS = {
    initialRouteName: 'DeckListPage',
    headerMode: 'none'
};

const DeckStackNavigator = createStackNavigator(CONFIG, OPTIONS);

export default DeckStackNavigator;