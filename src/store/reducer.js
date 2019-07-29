import {combineReducers} from './../lib/redux'
import {
  CHANGETOTAL
} from './contantType'

const defaultState = {
  total: 10
};

function count(state, action) {
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
const defaultUser = {
  user:''
};
function user(state = defaultUser,action) {
  return state;
}
export  default combineReducers({
  count,user
})
