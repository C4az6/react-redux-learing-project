import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
// 创建一个store对象,注意！！！createStore必须传入一个函数参数哦
import { createStore } from 'redux';
import { counter } from './redux/reducers'
const store = createStore(counter);
// console.log('stroe: ', store);
// 通过dispatch发送一个消息，在reduers函数中通过action就能接收到
// store.dispatch(increment());
// store.dispatch(decrement());

// 监听state变化，state发生变化后重新渲染页面
store.subscribe(render);

function render() {
  ReactDOM.render(
    // 把创建好的store对象传递给App组件
    <App store={store} ></App>,
    document.getElementById('root')
  )
}

render();