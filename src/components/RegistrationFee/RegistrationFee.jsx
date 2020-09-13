import React from 'react';
import {
    Button,
    File,
    FormLayout,
    Input,
    PanelHeader,
    PanelHeaderBack, Radio, FormLayoutGroup,
    Select,
    Textarea
} from "@vkontakte/vkui";

import './../../index.css'
import {connect} from "react-redux";
import {setActivePanel} from "../../actions/actionCreator";
import {Icon28PictureOutline} from "@vkontakte/icons";
import {REGISTRATION_FEE, TARGET_FEE} from "../../constants/common";

class RegistrationFee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {feeEnd: null, endDate: null};
    }

    onRadioChange = e => {
        this.setState({feeEnd: e.target.value,});
    };

    onDateChange = e => {
        this.setState({endDate: e.target.value})
    };

    render = () => {
        const {setActivePanel} = this.props;
        const {feeEnd, endDate} = this.state;
        return (
            <React.Fragment>
                <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel(TARGET_FEE)}/>}>
                    Оформление
                </PanelHeader>
                <FormLayout>
                    <Select top="Автор" defaultValue={"1"}>
                        <option value={"1"}>Jacob Dillinger</option>
                        <option value={"2"}>Кренж</option>
                    </Select>
                    <FormLayoutGroup top={"Сбор завершится"}>
                        <Radio name={"feeEnd"} value={"1"} onChange={this.onRadioChange}>Когда соберём сумму</Radio>
                        <Radio name={"feeEnd"} value={"2"} onChange={this.onRadioChange}>В определённую дату</Radio>
                    </FormLayoutGroup>
                    {feeEnd === "2" &&
                    <Input top={"Дата окончания"} type={"date"} onChange={this.onDateChange}/>
                    }
                    <Button mode={"primary"} size={"xl"} stretched onClick={() => setActivePanel(REGISTRATION_FEE)}
                            disabled={!(feeEnd === "1" || (feeEnd === "2" && endDate !== null))}>
                        Создать сбор
                    </Button>
                </FormLayout>
            </React.Fragment>
        );
    }
}

export default connect(() => ({}), {setActivePanel})(RegistrationFee);