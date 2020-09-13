import React from 'react';
import {Button, Group, PanelHeader, Text} from "@vkontakte/vkui";

import './CreateFee.css'
import './../../index.css'
import {connect} from "react-redux";
import {setActivePanel} from "../../actions/actionCreator";
import {TYPE_OF_FEE} from "../../constants/common";

const CreateFee = ({setActivePanel}) => (
    <React.Fragment>
        <PanelHeader>Пожертвования</PanelHeader>
        <Group className={"flexCenter flexDirectionColumn"}>
            <Text weight={"regular"} className={"inactiveText verticalMarginsText"}>
                У вас пока нет сборов.<br/>
                Начните доброе дело.
            </Text>
            <Button align={"center"} mode={"primary"} onClick={() => {
                setActivePanel(TYPE_OF_FEE);
            }}>
                Создать сбор
            </Button>
        </Group>
    </React.Fragment>
);
export default connect(state => ({}), {setActivePanel})(CreateFee);