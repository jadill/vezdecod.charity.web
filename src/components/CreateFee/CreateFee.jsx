import React from 'react';
import {Button, Group, PanelHeader, Text} from "@vkontakte/vkui";

import './CreateFee.css'

const CreateFee = () => (
    <div>
        <PanelHeader>Пожертвования</PanelHeader>
        <Group className={"createFee absolutelyWhole"}>
            <Text weight={"regular"} className={"inactiveText verticalMarginsText"}>
                У вас пока нет сборов.<br/>
                Начните доброе дело.
            </Text>
            <Button align={"center"} mode={"primary"}>
                Создать сбор
            </Button>
        </Group>

    </div>
);

export default CreateFee;