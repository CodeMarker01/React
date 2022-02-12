// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import rootReducer from './reducer'

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [...getDefaultMiddleware({ serializableCheck: false })]
// })
// export default store

//******************************************************* */
//= redux setup
import { compose, createStore } from 'redux'
import rootReducer from './reducer'
const composeEnhancers =
  (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const store = createStore(rootReducer, composeEnhancers())

export default store
