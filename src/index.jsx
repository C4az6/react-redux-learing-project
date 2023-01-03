/**
 * React Context 执行上下文 练习
 * 解决多层组件逐层传递props的问题
 * 
 * 下面创建Context的写法是 react@16.0之前的，16版本之后React提供了createContext() API 来创建context，后者性能更好
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Main Page --- {this.props.num}</p>
        <Title num={this.props.num}></Title>
      </div>
    )
  }
}

class Title extends React.Component {
  // 声明静态属性，这个静态属性是React规定的，必须这么写！ 声明需要拿到的数据
  static contextTypes = {
    color: PropTypes.string,
    num: PropTypes.number
  }
  componentDidMount() {
    console.log(">>>> context ", this.context);
    console.log(">>>>> this ", this);
  }
  render() {
    return (
      <React.Fragment>
        <h1>Title Page</h1>
        <small>
          颜色: {this.context.color}
          今日收益: {this.context.num}
        </small>
      </React.Fragment>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  // 定义子组件接收的参数类型，注意是数据类型
  static childContextTypes = {
    color: PropTypes.string,
    num: PropTypes.number
  }

  getChildContext() {
    return {
      color: 'red',
      num: 123
    }
  }

  render() {
    const num = 1;
    return (
      <>
        <h1>React Context {num}</h1>
        <Main num={num}></Main>
      </>
    )
  }
}


ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)