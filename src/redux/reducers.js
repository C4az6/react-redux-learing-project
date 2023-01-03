/* 
  这个模块包含了N个reducer函数模块

  reducer函数的作用：根据action来处理state的值
*/

// state=0 表示初始化state的值为0
export function counter(state = 0, action) {
  console.log('action: ', action);
  switch (action.type) {
    case "INCREMENT":
      // reducer函数要返回处理state值后的结果
      return state + action.data
      break;

    case "DECREMENT":
      return state - action.data
      break;
    default:
      return state
  }
}