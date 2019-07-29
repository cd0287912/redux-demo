import {
  CHANGETOTAL
} from './contantType'

export const changeTotal = (data) => ({
  type: CHANGETOTAL,
  data
});


export const changeTotalAsync = (data) => dispatch => {
  setTimeout(() => {
    dispatch(changeTotal(data))
  }, 1000)
}