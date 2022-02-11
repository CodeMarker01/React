import React, { Component, createRef } from 'react'

export default class UserClass extends Component {
  constructor(props) {
    super(props)
    this.pRef = createRef()
    this.count = 0
  }
  changeColor = () => {
    this.pRef.current.style.color = 'red'
  }
  changeCount = () => {
    this.count = this.count + 1
    if (this.count === 3) {
      alert('Count === 3')
    }
  }
  render() {
    return (
      <div>
        <h1>User class</h1>
        <p ref={this.pRef} className="p-class">
          Refs
        </p>
        <p>{this.count}</p>
        <button onClick={this.changeColor}>change color</button>
        <button onClick={this.changeCount}>change count</button>
      </div>
    )
  }
}
