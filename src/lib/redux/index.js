/*
* redux主模块
* */

/*
* redux库的主要模块
* 1.redux向外暴露下面几个函数
*   createStore 接受参数为reducer函数，返回store对象
*   combineReducers() 接受包含n个reducer方法的对象
*   applyMiddleware()
* 2.store对象的内部结构
*   getState() 返回为内部保存的state数据
*   dispatch() 参数为action对象
*   subscribe() 参数为监听内部state更新的回调函数
* */

export function createStore(reducer) {
  //初始值为调用reducer函数返回的结果
  let state = reducer(undefined,{type:'@@redux/init'});
  //存储监听state更新回调，
  const listeners = [];
  const getState = () => {
    return state;
  };
  const dispatch = (action) => {
    const newState = reducer(state, action);
    state = newState;
    listeners.forEach(listener => listener())
  };
  const subscribe = (listener) => {
    listeners.push(listener)
  };
  return {
    getState,
    dispatch,
    subscribe
  }
}
/*
* 整合传入参数对象中的多个reducer函数，返回一个新的reducer函数
* 新的reducer管理的总状态
* */
export function combineReducers(reducers) {
  return (state = {}, action) => {
    const totalState = {};
    reducers.forEach(key => {
      totalState[key] = reducers[key](state[key],action)
    })
    return totalState;
  }
}

export function combineReducers2(reducers) {
  return (state = {}, action) => {
    return Object.key(reducers).render((prevState,key) => {
      prevState[key] = reducers[key](state[key],action);
      return prevState;
    },{})
  }
}