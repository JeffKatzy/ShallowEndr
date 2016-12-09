import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import $ from 'jquery'

import logUserIn from "../actions/logUserIn"


class LoginForm extends Component{
  constructor(props) {
    super(props)
    this.submitLoginInfo = this.submitLoginInfo.bind(this)
  }

  submitLoginInfo(event){
    event.preventDefault()
    let login_params = {
      email: event.target.children[2].value,
      password: event.target.children[4].value
    }
    this.props.logUserIn(login_params)
  }

  switchVisible(event) {
    if (document.getElementsByClassName('image')) {
      if (document.getElementsByClassName('wrap')[1].style.display === '') {
        document.getElementsByClassName('wrap')[1].style.display = 'block';
        //document.getElementById('Div2').style.display = 'none';
      } else {
        document.getElementsByClassName('wrap')[1].style.display = '';
      }
    }
  }

  render() {
    return (
      <div>
        <img src={require("../../public/ShallowEndrNewLogo.png")} alt="logo" className="logo" />
        <img id="login-image" alt="oops" src={require("../../public/loginImagepost.png")} onClick={this.switchVisible}/>
        <div className="wrap">
          <form className="form" onSubmit={this.submitLoginInfo} >
            <label>Log In</label><br />
            <input name='email' type='text' placeholder='email' /><br />
            <input name='password' type='password' placeholder='password' /><br />
            <button type="submit" value="Submit">Submit </button>
          </form>
        </div>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({logUserIn: logUserIn}, dispatch)
}
export default connect(null, mapDispatchToProps)(LoginForm)
