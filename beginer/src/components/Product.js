import React, { Component } from 'react'

const fetchAPI = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, 2000)
  })

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.interval = null
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }))
    }, 1000)
  }

  click = event => {
    console.log(event)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div id="product">
        <p>count: {this.state.count}</p>
      </div>
    )
  }
}
