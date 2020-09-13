import {
    SET_ACTIVE_PANEL,
    CREATE_FEE,
} from '../constants/common';

const PanelReduxReducer = (state = {active_panel:CREATE_FEE}, {type, active_panel,}) => {
    switch (type) {
        case SET_ACTIVE_PANEL:
            return {
                active_panel,
            };
        default:
            return state;
    }
};

export default PanelReduxReducer;