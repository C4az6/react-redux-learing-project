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