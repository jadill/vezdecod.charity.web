import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import '@vkontakte/vkui/dist/vkui.css';
import store from "./resources/store";
import CharityRouter from "./components/Router/Router";


const App = () => {
    return (
        <Provider store={store}>
            <CharityRouter/>
        </Provider>
    )
}

ReactDOM.render((<App/>), document.getElementById('root'));

registerServiceWorker();