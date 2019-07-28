import {
  CHANGETOTAL
} from './contantType'

const defaultState = {
  total: 10
};

export default function countReducer(state, action) {
  if (!state) {
    return defaultState;
  }
  switch (action.type) {
    case CHANGETOTAL:
      return Object.assign(state,{total: action.data});
    default:
      return state;
  }

}