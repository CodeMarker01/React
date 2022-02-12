//= redux
import { combineReducers } from 'redux'
import counterReducer from './components/Counter/counter.reducer'
// import counterReducer from './components/Counter/counter.slice'
const rootReducer = combineReducers({
  counter: counterReducer
})
export default rootReducer

//******************************************************* */

// import counterReducer from './components/Counter/counter.slice'
// import profileReducer from './components/Profile/profile.slice'

// const rootReducer = {
//   counter: counterReducer,
//   profile: profileReducer
// }

// export default rootReducer
