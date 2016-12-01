import React, { Component } from 'react'

export default class LoginForm extends Component{
  constructor(props) {
    super(props)
    this.submitLoginInfo = this.submitLoginInfo.bind(this)
  }
  submitLoginInfo(event){

    let username = event.target.children[1].value
    let password = event.target.children[4].value
    this.props.onLoginClick({username: username, password: password})
  }
  render() {

    return (
      <form className="login-form" onSubmit={this.submitLoginInfo}>
        <label>Username </label>
        <input type="text" /><br />
        <label>Password </label>
        <input type="password" /><br />
        <button type="submit" value="Submit">Submit </button>
      </form>
    )
  }
}
