import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Artist } from './artist'

class ArtistList extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    debugger
    let artistArray = []
    let newArtists = []
    let existingArtists = []
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

    let artist_list = <Artist />

    if(Array.isArray(this.props.newArtists)){
    newArtists = this.props.newArtists.map(function(artist){
        return <li key={artist.id}>{artist.name}</li>
      })

      existingArtists = this.props.existingArtists.map(function(artist){
        return <li key={artist.id}>{artist.display_name}</li>
      })
    }

    return (
      <div>
        <p>Did you mean?</p>
        <ul>
          {existingArtists}
        </ul>
        <p>Or did you want to add a new artist?</p>
        <ul>
          {newArtists}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { newArtists: state.newArtists, existingArtists: state.existingArtists }
}

export default connect(mapStateToProps)(ArtistList)
