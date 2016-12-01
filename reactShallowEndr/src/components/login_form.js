import React, { Component } from 'react'

export default class LoginForm extends Component{
  constructor(props) {
    super(props)

  }
  render() {

    return (
      <form className="login-form" onSubmit={this.props.onLoginClick}>
        <label>Username </label>
        <input type="text" /><br />
        <label>Password </label>
        <input type="password" /><br />
        <button type="submit" value="Submit">Submit </button>
      </form>
    )
  }
}
