import React, { useState, useReducer } from 'react'

const SUBMIT = 'SUBMIT'
const REMOVE = 'REMOVE'

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SUBMIT:
      return {
        ...state,
        todos: [...state.todos, { value: payload.value, id: new Date().toISOString() }]
      }
    case REMOVE:
      return { ...state, todos: state.todos.filter(todo => todo.id !== payload.id) }
    default:
      return { ...state }
  }
}

const initialState = {
  todos: [],
  value: ''
}

const ExampleReducer = () => {
  // const [todos, setTodos] = useState([])
  const [value, setValue] = useState('')

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // setTodos(todos => {
    //   return [...todos, { value, id: new Date().toISOString() }]
    // })
    dispatch({ type: SUBMIT, payload: { value } })
    setValue('')
  }

  const handleDelete = id => {
    // setTodos(todos => {
    //   return todos.filter(todo => todo.id !== id)
    // })
    dispatch({ type: REMOVE, payload: { id } })
  }
  return (
    <div>
      <h1>Simple todo list</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
      </form>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.value}</span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExampleReducer
