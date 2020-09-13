import React from 'react';
import {CardGrid, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";

import './../../index.css'
import {CREATE_FEE, REGULAR_FEE, TARGET_FEE} from "../../constants/common";
import TypeOfFeeView from "./components/TypeOfFeeView";
import {Icon28CalendarOutline, Icon28TargetOutline} from "@vkontakte/icons";
import {connect} from "react-redux";
import {setActivePanel} from "../../actions/actionCreator";
import './TypeOfFee.css'

const TypeOfFee = ({setActivePanel}) => (
    <React.Fragment>
        <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel(CREATE_FEE)}/>}>
            Тип сбора
        </PanelHeader>
        <CardGrid>
            <TypeOfFeeView nextPanel={TARGET_FEE} title={"Целевой сбор"} desc={"Когда есть определённая цель"}>
                <Icon28TargetOutline className={'iconColor'}/>
            </TypeOfFeeView>
            <TypeOfFeeView nextPanel={REGULAR_FEE} title={"Регулярный сбор"} desc={"Если помощь нужна ежемесячно"}>
                <Icon28CalendarOutline className={'iconColor'}/>
            </TypeOfFeeView>
        </CardGrid>
    </React.Fragment>
);
export default connect(() => ({}), {setActivePanel})(TypeOfFee);