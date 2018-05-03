import * as types from 'Actions/types';

const INITIAL_STATE = {}

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TEST:
      return { ...state };
      
    default:
      return state;
  }
}

export default app;
