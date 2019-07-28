import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import 'antd/dist/antd.css';
import store from './store'


const render = () => {
  ReactDOM.render(<App store={store} />,document.getElementById('root'))
};
render();
store.subscribe(render);