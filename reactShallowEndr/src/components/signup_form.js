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
      debugger
      // document.getElementsByClassName('register-image')[0].style.display = '';
      this.props.onSignupClick(obj)
      $('#registerButton').hide()

    } else {
      alert('yo pass is fd')
    }
    // debugger
    // document.getElementsByClassName('register-image')[0].style.display = '';

  }

  switchVisible(event) {
    if (document.getElementsByClassName('image')) {
      if (document.getElementsByClassName('wrap')[0].style.display === '') {
        document.getElementsByClassName('wrap')[0].style.display = 'block';
      //     document.getElementById('Div2').style.display = 'none';
      }
      else {
          document.getElementsByClassName('wrap')[0].style.display = '';
      //     document.getElementById('Div2').style.display = 'block';
      }
    }
  }


  render(){
    return(
      <div>
        <img className="register-image"  id='registerButton' alt="oops" src={require("../../public/signUpImagepost.png")} onClick={this.switchVisible} />
        <div className="wrap">
          <form className="form" onSubmit={this.submitSignUp} >
            <label>Register</label><br />
            <input name='first_name' type='text' placeholder='first name' /><br />
            <input name='last_name' type='text' placeholder='last name' /><br />
            <input name='email' type='text' placeholder='email' /><br />
            <input name='username' type='text' placeholder='username' /><br />
            <input name='password' type='password' placeholder='password' /><br />
            <input name='confirmation' type='password' placeholder='confirm password' /><br />
            <input type='submit' value='submit'/>
          </form>
        </div>
      </div>
    )
  }
}
