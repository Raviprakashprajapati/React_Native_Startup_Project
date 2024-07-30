/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './redux/store';
import { PaperProvider } from 'react-native-paper';

const AppRedux = () =>(
<Provider store={store} >
    <PaperProvider>
    <App/>
    </PaperProvider>
</Provider>
)

AppRegistry.registerComponent(appName, () => 
    AppRedux

);
