import React, { useState } from 'react'
import usePrevious from './usePrevious'

const useInputNumber = initialValue => {
  const [input, setInput] = useState(initialValue)
  const handleChange = e => {
    const val = e.target.value
    if (/^\d+$/.test(val) || val === '') {
      setInput(val)
    }
  }
  return [input, handleChange]
}

// const usePrevious = state => {
//   const [currentState, setCurrentState] = useState(state)
//   const [prevState, setPrevState] = useState(state)

//   if (currentState !== state) {
//     setPrevState(currentState)
//     setCurrentState(state)
//   }
//   return [prevState, currentState]
// }

const User = () => {
  const [input, handleChange] = useInputNumber('')
  const [inputTextarea, handleChangeTextarea] = useInputNumber('')
  const prevStateTextarea = usePrevious(inputTextarea)
  console.log('🚀TCL: ~ file: User.js ~ line 30 ~ User ~ prevStateTextarea', prevStateTextarea)
  return (
    <div>
      <h1>User</h1>
      {/*  */}
      <input type="text" name="" id="" value={input} onChange={handleChange} />
      <textarea name="" id="" cols="30" rows="10" value={inputTextarea} onChange={handleChangeTextarea}></textarea>
    </div>
  )
}

export default User
