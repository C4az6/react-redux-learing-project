import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    count: 0,
    isDisabled: false
  }

  increment = () => {
    const num = this.select.value;
    this.setState({
      count: this.state.count += Number(num)
    })
  }

  decrement = () => {
    const num = this.select.value;
    this.setState({
      count: this.state.count -= Number(num)
    })
  }

  incrementOdOdd = () => {
    let num = this.select.value;
    if (this.state.count % 2 === 0) {
      this.setState({
        count: this.state.count += Number(num)
      })
    }

  }

  incrementDelay = () => {
    // 注意：this.select.value 是一个 string，通过 * 1 可以转换成Number类型
    const num = this.select.value * 1;
    this.setState({
      isDisabled: true
    });
    setTimeout(() => {
      this.setState({
        count: this.state.count += num,
        isDisabled: false
      })
    }, 2000)
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <select ref={select => this.select = select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementOdOdd}>incrementOdOdd</button>&nbsp;&nbsp;
        <button disabled={this.state.isDisabled} onClick={this.incrementDelay}>
          {this.state.isDisabled ? '不许再点!' : 'incrementDelay'}
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
