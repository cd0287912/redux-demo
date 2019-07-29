import {combineReducers} from './../lib/redux'
import {CHANGETOTAL} from './actionType'

const defaultState = {
  total: 100
};

function count(state = defaultState, action) {
  switch (action.type) {
    case CHANGETOTAL:
      return Object.assign({}, state, {total: action.data});
    default:
      return state;
  }
}

const defaultUser = {
  name:'xxx'
}
function user(state = defaultUser, action) {
  return state
}

export default combineReducers({
  count,
  user
})