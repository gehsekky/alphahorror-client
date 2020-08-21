import { SET_GAME } from '../constants/action-types';

const initialState = {};

const reducer = {
  [SET_GAME]: (state, payload) => {
    console.log('payload', payload);
    return Object.assign({}, state, payload);
  }
};

export default (state = initialState, action = {}) => {
  if (Object.prototype.hasOwnProperty.call(reducer, action.type)) {
    return reducer[action.type](state, action.payload);
  }

  return state;
};
