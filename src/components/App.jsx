import React, { Component } from 'react';
import { increment, decrement } from '../redux/action';
import { connect } from 'react-redux'

// 把既有逻辑又有UI渲染的组件改成纯UI组件
class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(">>>> props ", this.props);
  }

  increment = () => {
    const selectValue = this.select.value * 1;
    this.props.increment(selectValue)
  }

  decrement = () => {
    const selectValue = this.select.value * 1;
    this.props.decrement(selectValue)
  }

  incrementOdOdd = () => {
    // 只有在当前数值为偶数的情况下才能增加
    const selectValue = this.select.value * 1;
    const currentCount = this.props.count;
    if (currentCount % 2 === 0) this.props.increment(selectValue)
  }

  incrementDelay = () => {
    const selectValue = this.select.value * 1;
    setTimeout(() => {
      this.props.increment(selectValue);
    }, 1500)
  }

  render() {
    const { count } = this.props
    return (
      <div>
        <h1>数值: {count}</h1>
        <select ref={select => this.select = select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementOdOdd}>incrementOdOdd</button>&nbsp;&nbsp;
        <button onClick={this.incrementDelay}>
          incrementDelay
        </button>
      </div>
    )
  }
}

export default connect(
  state => ({
    count: state
  }),
  { increment, decrement }
)(App)
