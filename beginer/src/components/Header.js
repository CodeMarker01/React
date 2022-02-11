import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
  constructor(props) {
    // ke thua props
    super(props)
    // state la object chua data cua component
    this.state = {
      title: 'Header',
      number: 0
    }
  }
  click = () => {
    this.setState(prevState => ({
      number: prevState.number + 3
    }))
  }
  render() {
    console.log(this.props)
    return (
      <header>
        <h1>{this.state.title}</h1>
        {/*  this.click = truyen function  */}
        {/*  this.click() = goi function ❌ */}
        <button onClick={this.click}>Click {this.state.number}</button>
      </header>
    )
  }
}

Header.propTypes = {
  user: PropTypes.object,
  title: PropTypes.string.isRequired
}
