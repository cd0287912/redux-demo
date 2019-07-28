import {CHANGETOTAL} from './actionType'

/*
* 同步action
* */
export const changeTotal = data => ({type: CHANGETOTAL, data});

/*
* 异步action
* */
export const changeTotalAsync = data => dispatch => {
  setTimeout(() => {
    dispatch(changeTotal(data))
  },1000)
};