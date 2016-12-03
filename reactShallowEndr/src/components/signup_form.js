import React, { Component } from 'react'
import $ from 'jquery'


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
      <div className="sign-up-wrap" >

        <form className="sign-up-form" onSubmit={this.submitSignUp} >
          <input name='first_name' type='text' placeholder='first name' /><br />
          <input name='last_name' type='text' placeholder='last name' /><br />
          <input name='email' type='text' placeholder='email' /><br />
          <input name='username' type='text' placeholder='username' /><br />
          <input name='password' type='password' placeholder='password' /><br />
          <input name='confirmation' type='password' placeholder='confirm password' /><br />
          <input type='submit' value='submit'/>
        </form>
      </div>
    )
  }
}
