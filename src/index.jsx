import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import { View, Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

ReactDOM.render((
    // <BrowserRouter>
    //     <PageRouter/>
    // </BrowserRouter>
    <View activePanel="main">
        <Panel id="main">
            <PanelHeader>VKUI</PanelHeader>
            <Group header={<Header mode="secondary">Items</Header>}>
                <Cell>Hello</Cell>
                <Cell>World</Cell>
            </Group>
        </Panel>
    </View>
), document.getElementById('root'));

registerServiceWorker();
