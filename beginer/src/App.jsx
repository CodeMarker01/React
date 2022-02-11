import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './components/Counter/Counter'
// import Profile from './components/Profile/Profile'
import Header from './components/Header'
import Product from './components/Product'
import Profile from './components/Profile'
import User from './components/User'
import UserClass from './components/UserClass'
import ExampleReducer from './components/ExampleReducer'

function App() {
  const user = {
    name: 'john',
    age: 20
  }
  const [isProduct, setIsProduct] = useState(true)
  return (
    <div className="App">
      {/* <Counter />
      <Profile /> */}
      {/* <Header title="this is header" user={user} /> */}
      {/* <Profile /> */}
      {/* <User /> */}
      {/* <UserClass /> */}
      <ExampleReducer />
    </div>
  )
}

export default App
