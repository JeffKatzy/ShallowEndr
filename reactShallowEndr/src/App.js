import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getUsers from './actions/getUsers'
import User from './components/users'
import './App.css';
import LoginForm from './components/login_form'
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleClick(){
    this.props.getUsers()
  }

  handleSubmit(login_params){
    debugger
    $.ajax({
      url: 'http://localhost:3000/users/login',
      type: "POST",
      data: { user: { email: login_params.email, password: login_params.password } },
      dataType: "json"
    }).done(function(response){
      sessionStorage.setItem('jwt', response.jwt)
      debugger
      console.log(response)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <LoginForm onLoginClick={this.handleSubmit}/>
          <input type='submit' onClick={this.handleClick} value="Don't click this" />
          <User user={this.props.user}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { user: state }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getUsers: getUsers}, dispatch)
}

export default connect(mapStateToProps ,mapDispatchToProps)(App);
