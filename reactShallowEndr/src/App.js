import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getUsers from './actions/getUsers'
import logUserIn from './actions/logUserIn'
import logUserOut from './actions/logUserOut'
import signUserUp from './actions/signUserUp'
import User from './components/users'
import Home from './components/home.js'
import './App.css';
import LoginForm from './components/login_form'
import SignUpForm from './components/signup_form'

class App extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
  }

  componentWillMount(){
    browserHistory.push('/')
  }

  handleClick(){
    this.props.logUserOut()
  }

  handleLoginSubmit(login_params){
    this.props.logUserIn(login_params)
  }
  handleSignupSubmit(signup_params){
    this.props.signUserUp(signup_params)
  }

  render() {
    debugger
    return (
      <div className="App">
        <div className="App-header">
          <SignUpForm onSignupClick={this.handleSignupSubmit}/>
          {!localStorage.jwt ?
            <LoginForm onLoginClick={this.handleLoginSubmit}/>
           : <Home handleClick={this.handleClick}/>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { user_id: state.user_id, jwt: state.jwt, logged_in: state.logged_in }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getUsers: getUsers, logUserIn: logUserIn, signUserUp: signUserUp, logUserOut: logUserOut }, dispatch)
}

export default connect(mapStateToProps ,mapDispatchToProps)(App);
