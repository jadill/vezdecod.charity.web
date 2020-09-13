import {
  SET_ACTIVE_PANEL, SET_ACTIVE_PROFILE
} from '../constants/common';

export const setActivePanel = (active_panel) => ({
  type: SET_ACTIVE_PANEL,
  active_panel,
});