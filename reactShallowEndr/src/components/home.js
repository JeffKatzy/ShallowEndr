import React, { Component } from 'react'
import $ from 'jquery'



export default class Home extends Component{
  constructor(props){
    super(props)
  }

  render(){
    debugger
    let artistArray = []
    let that = this
    if(Array.isArray(this.props.artists)){
      artistArray = this.props.artists.map(function(artist){
        return <li onClick={that.getSongsFromArtist.bind(that)} id={artist.id}>{artist.name}</li>
      })
    } else {
      artistArray = [<div></div>]
    }
    if(this.props.artist !== null && this.props.artist !== undefined){
      artistArray = <Artist name={this.props.artist.display_name} songs={this.props.songs} />
    }

    return (
      <div>
        <img id="logout-image" alt="logout" src={require("../../public/logoutImagepost.png")} onClick={this.props.handleClick}/>
            <SearchBar />
            <ArtistList newArtists={this.props.newArtists} existingArtists={this.props.existingArtists} />
            <SongList />
      </div>
    )
  }
}
