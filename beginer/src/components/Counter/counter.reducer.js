// import { DECREASE, INCREASE } from './counter.constants'
import * as types from './counter.constants'

//= myseft:
const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREASE:
      return { count: state.count + 1 }
    case types.DECREASE:
      return { count: state.count - 1 }
    default:
      return { ...state }
  }
}

export default counterReducer
//******************************************************* */
//= tutorial:
// import { createAction, createReducer } from '@reduxjs/toolkit'

// export const increase = createAction('counter/increase')
// export const decrease = createAction('counter/decrease')

// const initialState = {
//   count: 0
// }

// // const counterReducer = createReducer(initialState, {
// //   [increase]: (state, action) => {
// //     state.count = state.count + 1
// //   },
// //   [decrease]: (state, action) => {
// //     state.count = state.count - 1
// //   }
// // })
// const counterReducer = createReducer(initialState, builder => {
//   builder
//     .addCase(increase, (state, action) => {
//       state.count = state.count + 1
//     })
//     .addCase(decrease, (state, action) => {
//       state.count = state.count - 1
//     })
//     .addMatcher(
//       action => {
//         return action.type === 'counter/decrease'
//       },
//       (state, action) => {
//         console.log('handle here')
//       }
//     )
// })
// export default counterReducer
