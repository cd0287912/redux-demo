import  React from 'react'
import  ReactDOM from 'react-dom'
import App from './App'
import store from './store'
import {Provider} from './lib/react-redux'
import 'antd/dist/antd.css';
ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>
  ,document.getElementById('root'));