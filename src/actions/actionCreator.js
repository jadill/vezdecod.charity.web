import {
  CLEAR_CURRENTDS,
  SET_CURRENTDS_INFOS,
  SET_CURRENTDS_NAME,
  SET_CURRENTDS_STEPARRAY,
  SET_CURRENTDS_STEPINDEX
} from '../constants/common';

export const setCurrentDSName = (name_resourceId) => ({
  type: SET_CURRENTDS_NAME,
  name_resourceId,
});

export const setCurrentDSInfos = ({script, name_method, param}) => ({
  type: SET_CURRENTDS_INFOS,
  script,
  name_method,
  param
});

export const setCurrentDSStepsArray = (steps) => ({
  type: SET_CURRENTDS_STEPARRAY,
  steps,
  stepIndex: 0,
});

export const setCurrentDSStepIndex = (stepIndex) => ({
  type: SET_CURRENTDS_STEPINDEX,
  stepIndex,
});

export const clearCurrentDS = () => ({
  type: CLEAR_CURRENTDS,
});