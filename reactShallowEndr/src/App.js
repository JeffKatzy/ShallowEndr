import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getUsers from './actions/getUsers'
import User from './components/users'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.getUsers()
  }
  render() {
    debugger
    return (
      <div className="App">
        <div className="App-header">
          <input type='submit' onClick={this.handleClick} />
          <User user={this.props.user[0]}/>
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
