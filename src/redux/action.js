/**
 * 引入N个action的模块
 * 
 */


export const increment = (selectValue) => {
  return {
    type: 'INCREMENT',
    data: selectValue
  }
}

export const decrement = (selectValue) => {
  return {
    type: 'DECREMENT',
    data: selectValue
  }
}

// 创建一个异步action,这里返回一个函数，同步action返回是一个对象
export const incrementDelay = (num) => {
  // 返回一个箭头函数
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(num))
    }, 1000)
  }
}
