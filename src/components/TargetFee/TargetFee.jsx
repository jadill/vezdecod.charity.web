import React from 'react';
import {CardGrid, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";

import './../../index.css'
import {TYPE_OF_FEE} from "../../constants/common";
import {connect} from "react-redux";
import {setActivePanel} from "../../actions/actionCreator";

const TargetFee = ({setActivePanel}) => (
    <React.Fragment>
        <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel(TYPE_OF_FEE)}/>}>
            Целевой сбор
        </PanelHeader>
        <CardGrid>

        </CardGrid>
    </React.Fragment>
);
export default connect(() => ({}), {setActivePanel})(TargetFee);