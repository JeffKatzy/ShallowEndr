import React, { Component } from 'react'
import $ from 'jquery'

import Artist from './artist'
export default class Home extends Component{
  constructor(props){
    super(props)
  }

  searchForArtist(event){
    event.preventDefault()
    this.props.searchClick(event.target.children[1].value)
  }
  getSongsFromArtist(event){
    // createArtist(event.target.id)
    let display_name = event.target.textContent
    let mb_id = event.target.id
    let name = display_name.toLowerCase().split(" ").join("")
    this.props.getSongs({name: name, display_name: display_name, mb_id: mb_id})
  }

  render(){
    let artistArray = []
    let that = this
    if(Array.isArray(this.props.artists)){
      debugger
      artistArray = this.props.artists.map(function(artist){
        return <li onClick={that.getSongsFromArtist.bind(that)} id={artist.id}>{artist.name}</li>
      })
    } else {
      artistArray = [<li>artist exists in db</li>]
    }
    return (
      <div>
        <img id="logout-image" alt="logout" src={require("../../public/logoutImagepost.png")} onClick={this.props.handleClick}/>

        <div>
          <h1 id="title">ShallowEndr</h1>
          <h2>Version 0.0.0.0.1</h2>
          <h4>A Johnathan Cena Sponsored Production</h4>
          <form id='home-main-form' onSubmit={this.searchForArtist.bind(this)} autocomplete="off">
            <input type='text' placeholder="Search artists" id="search-input" autocomplete="off" />
            <input type='submit' id="search" />
          </form>

          <div>
            {this.props.artists ? <div><h4>Please further specify an artist</h4> <ul>{artistArray}</ul></div> : <p>not ok</p>}
            {this.props.results ? <Artist results={this.props.results} /> : <p>ok</p> }
          </div>
        </div>
        <p> Filler Text  </p>
      </div>
    )
  }
}
