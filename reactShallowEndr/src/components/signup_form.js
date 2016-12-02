import React, { Component } from 'react'

export default class SignUpForm extends Component {
  constructor(props){
    super(props)
  }
  submitSignUp(event){
    event.preventDefault()
    let arr = [].slice.call(event.target.children)
    arr = arr.filter(function(item, index){
      if([1,2,5,8,11,13].includes(index)){
        return item
      }
    })
    debugger
    this.handleSignupSubmit()
  }
  render(){
    debugger
    return(
      <form className="sign-up-form" onSubmit={this.submitSignUp}>
        <label>Name: </label>
        <input name='firstname' type='text' placeholder='first name here' />
        <input type='text' placeholder='last name here' /><br />
        <label>Email:</label>
        <input type='text' placeholder='email here' /><br />
        <label>UserName: </label>
        <input type='text' placeholder='username here' /><br />
        <label>Password: </label>
        <input type='password' />
        <label>Confirm Password: </label>
        <input type='password' />
        <input type='submit' value='submit'/>
      </form>
    )
  }
}
