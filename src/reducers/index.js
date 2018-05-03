import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app';
import modal from './modal';

export default combineReducers({
  app,
  modal,
  router: routerReducer
});
