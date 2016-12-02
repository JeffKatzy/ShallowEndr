import React, { Component } from 'react'

export default class SignUpForm extends Component {
  constructor(props){
    super(props)

    this.submitSignUp = this.submitSignUp.bind(this)
  }
  submitSignUp(event){
    event.preventDefault()
    let obj = {}
    Array.from(event.target.children).forEach((element) => {
      if (element.name) {
        obj[element.name] = element.value
      }
    })
    if (obj.password === obj.confirmation) {
      this.props.onSignupClick(obj)
    } else {
      alert('yo pass is fd')
    }
  }
  render(){
    return(
      <form className="sign-up-form" onSubmit={this.submitSignUp}>
        <label>Name: </label>
        <input name='first_name' type='text' placeholder='first name here' />
        <input name='last_name' type='text' placeholder='last name here' /><br />
        <label>Email:</label>
        <input name='email' type='text' placeholder='email here' /><br />
        <label>UserName: </label>
        <input name='username' type='text' placeholder='username here' /><br />
        <label>Password: </label>
        <input name='password' type='password' />
        <label>Confirm Password: </label>
        <input name='confirmation' type='password' />
        <input type='submit' value='submit'/>
      </form>
    )
  }
}
