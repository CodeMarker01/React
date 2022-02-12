import * as types from './counter.constants'

// export const increase = () => {
//   console.log('actions increase')
//   return {
//     type: types.INCREASE
//   }
// }
// export const decrease = () => {
//   console.log('actions decrease')
//   return {
//     type: types.DECREASE
//   }
// }

export const increase = () => ({
  type: types.INCREASE
})
export const decrease = () => ({
  type: types.DECREASE
})
