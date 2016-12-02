import React, { Component } from 'react'

export default class SignUpForm extends Component {
  constructor(props){
    super(props)
  }
  render(){
    debugger
    return(
      <form className="sign-up-form" onSubmit={this.makeamethod}>
        <label>Name: </label>
        <input type='text' placeholder='first name here' />
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
