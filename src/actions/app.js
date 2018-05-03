import * as types from './types';

export const showPopup = (popupData) => {
  return {
    type: types.OPEN_POPUP,
    payload: popupData
  }
}

export const closePopup = () => {
  return {
    type: types.CLOSE_POPUP
  }
}
