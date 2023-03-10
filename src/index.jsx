import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { createStore, applyMiddleware } from 'redux';
import { counter } from './redux/reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// 创建store状态仓库
const store = createStore(counter, applyMiddleware(thunk));


ReactDOM.render(
  (
    // 通过Provider组件提供数据，下面的所有的组件都可以拿到数据
    <Provider store={store}>
      <App></App>
    </Provider>
  ),
  document.getElementById('root')
)
