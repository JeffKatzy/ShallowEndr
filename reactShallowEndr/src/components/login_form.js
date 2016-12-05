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

  switchVisible(event) {
    if (document.getElementsByClassName('image')) {
      if (document.getElementsByClassName('wrap')[1].style.display === '') {
        document.getElementsByClassName('wrap')[1].style.display = 'block';
      //     document.getElementById('Div2').style.display = 'none';
      }
      else {
          document.getElementsByClassName('wrap')[1].style.display = '';
      //     document.getElementById('Div2').style.display = 'block';
      }
    }
  }

  render() {
    return (
      <div>
        <img id="login-image" alt="oops" src={require("../../public/login.png")} onClick={this.switchVisible}/>
        <div className="wrap">
          <form className="form" onSubmit={this.submitLoginInfo} >
            <input name='email' type='text' placeholder='email' /><br />
            <input name='password' type='password' placeholder='password' /><br />
            <button type="submit" value="Submit">Submit </button>
          </form>
        </div>
      </div>
    )
  }
}
