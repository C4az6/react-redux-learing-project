/**
 * React Context 执行上下文 练习
 * 解决多层组件逐层传递props的问题
 * 
 * 下面演示 React.createContext 创建Context的写法
 * Provider：提供参数,通过 value属性提供
 * Consumer：接收参数，通过回调函数
 */

import React from 'react';
import ReactDOM from 'react-dom';


const context = React.createContext();
console.log(">>>>>>> context: ", context);
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
  componentDidMount() {
    console.log(">>>> context ", this.context);
    console.log(">>>>> this ", this);
  }
  render() {
    return (
      <context.Consumer>
        {
          data => {
            return (
              <React.Fragment>
                <h1>Title Page</h1>
                <small>
                  用户信息展示:
                </small>
                <hr />
                <p>姓名：{data.name}</p>
                <p>年龄：{data.age}</p>
                <p>站点：{data.site}</p>
                <p>{console.log('========', this.context)}</p>
              </React.Fragment>
            )
          }
        }
      </context.Consumer>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
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
  (
    <context.Provider value={{ name: 'alexander', age: 23, site: 'https://youkewang.top' }}>
      <App></App>
    </context.Provider>
  ),
  document.getElementById('root')
)