import React from 'react';
import {
    Button,
    File,
    FormLayout,
    Input,
    PanelHeader,
    PanelHeaderBack,
    Select,
    Textarea
} from "@vkontakte/vkui";

import './../../index.css'
import {REGISTRATION_FEE, TYPE_OF_FEE} from "../../constants/common";
import {connect} from "react-redux";
import {setActivePanel} from "../../actions/actionCreator";
import {Icon28PictureOutline} from "@vkontakte/icons";

const TargetFee = ({setActivePanel}) => (
    <React.Fragment>
        <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel(TYPE_OF_FEE)}/>}>
            Целевой сбор
        </PanelHeader>
        <FormLayout>
            <File controlSize={"xl"} stretched mode={"outline"} before={<Icon28PictureOutline/>}>
                Загрузить обложку
            </File>
            <Input top="Название сбора" placeholder={"Название сбора"}/>
            <Input top="Сумма, ₽" placeholder={"Сколько нужно собрать?"} type={"number"} min={"1"} pattern={"^[1-9]{1}[0-9]{0,}$"}/>
            <Input top="Цель" placeholder={"Например, лечение человека"}/>
            <Textarea top="Описание" placeholder={"На что пойдут деньги и как они кому-то помогут?"}/>
            <Select top="Куда получать деньги" defaultValue={"1"}>
                <option value={"1"}>Счёт VK Pay * 1234</option>
                <option value={"2"}>Банковская карта * 1234</option>
            </Select>
            <Button mode={"primary"} size={"xl"} stretched onClick={() => setActivePanel(REGISTRATION_FEE)}>
                Далее
            </Button>
        </FormLayout>
    </React.Fragment>
);
export default connect(() => ({}), {setActivePanel})(TargetFee);