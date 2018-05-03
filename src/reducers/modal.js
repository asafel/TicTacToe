import * as types from '../actions/types'

const initialState = {
  clickOutSideToClose: true,
  hasXbutton: false,
  componentName: null,
  isOverlayTransparent: false,
  additionalClasses: '',
  data: {},
  style: {},
}

export default function (state = initialState, action) {
  switch (action.type) {

    case types.OPEN_POPUP:
      return { ...state, ...action.payload }

    case types.CLOSE_POPUP:
      return { ...initialState }

    default:
      return state
  }
}