import React, { Component } from 'react'

export default class LoginForm extends Component{
  constructor(props) {
    super(props)
    this.submitLoginInfo = this.submitLoginInfo.bind(this)
  }
  submitLoginInfo(event){
    event.preventDefault()
    let email = event.target.children[1].value
    let password = event.target.children[4].value
    this.props.onLoginClick({email: email, password: password})
  }

  render() {
    return (
      <div>
        <form className="login-form" onSubmit={this.submitLoginInfo} >
          <label>Email </label>
          <input type="text" /><br />
          <label>Password </label>
          <input type="password" /><br />
          <button type="submit" value="Submit">Submit </button>
        </form>
      </div>
    )
  }
}
