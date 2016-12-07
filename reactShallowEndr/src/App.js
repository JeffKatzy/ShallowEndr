import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import searchArtist from './actions/searchArtist'
import getUsers from './actions/getUsers'
import logUserIn from './actions/logUserIn'
import logUserOut from './actions/logUserOut'
import signUserUp from './actions/signUserUp'
import User from './components/users'
import Home from './components/home.js'
import './App.css';
import LoginForm from './components/login_form'
import SignUpForm from './components/signup_form'
import getSongs from './actions/getSongs'

class App extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
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
  handleSearchSubmit(searchTerm){
    this.props.searchArtist(searchTerm)
    browserHistory.push('/results')
  }

  render() {
    return (
      <div>
        <img src={require("../public/ShallowEndrNewLogo.png")} alt="logo" className="logo" />

        <div className="App">

          <div className="App-header">
            <SignUpForm onSignupClick={this.handleSignupSubmit}/>
            {!localStorage.jwt ?
              <LoginForm onLoginClick={this.handleLoginSubmit}/>
             : <Home
               handleClick={this.handleClick}
               searchClick={this.handleSearchSubmit}
               results={this.props.results}
               artists={this.props.artistToSpecify}
               getSongs={this.props.getSongs}
               songs={this.props.songs}
               artist={this.props.artist}
               newArtists={this.props.newArtists}
               existingArtists={this.props.existingArtists}
           />}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user_id: state.user_id, jwt: state.jwt,
    logged_in: state.logged_in, songs: state.songs,
    artist: state.artist, artistToSpecify: state.artistToSpecify,
    newArtists: state.newArtists, existingArtists: state.existingArtists
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getUsers: getUsers, logUserIn: logUserIn, signUserUp: signUserUp, logUserOut: logUserOut, searchArtist: searchArtist, getSongs: getSongs }, dispatch)
}

export default connect(mapStateToProps ,mapDispatchToProps)(App);
