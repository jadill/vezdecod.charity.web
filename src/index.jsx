import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import {Panel, Root, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import CreateFee from "./components/CreateFee/CreateFee";
import TypeOfFee from "./components/TypeOfFee/TypeOfFee";
import TargetFee from "./components/TargetFee/TargetFee";
import RegularFee from "./components/RegularFee/RegularFee";

ReactDOM.render((
    <Root activeView="main">
        <View id="main" activePanel="create-fee">
            <Panel id="create-fee">
                <CreateFee/>
            </Panel>
            <Panel id="type-of-fee">
                <TypeOfFee/>
            </Panel>
            <Panel id="target-fee">
                <TargetFee/>
            </Panel>
            <Panel id="regular-fee">
                <RegularFee/>
            </Panel>
        </View>
    </Root>
), document.getElementById('root'));

registerServiceWorker();
