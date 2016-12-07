import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getArtist from '../actions/getArtist'

import { Artist } from './artist'

class ArtistList extends Component{
  constructor(props) {
    super(props)
    this.getExistingArtist = this.getExistingArtist.bind(this)
    this.createNewArtist = this.createNewArtist.bind(this)
  }

  getExistingArtist(event){
    event.preventDefault()
    let srchTerm = event.target.attributes.id.value
    debugger
    this.props.getArtist(srchTerm)
  }

  createNewArtist(){
    return ""
  }

  render() {
    let artistArray = []
    let newArtists = []
    let existingArtists = []
    let that = this

    if(this.props.artist !== null && this.props.artist !== undefined){
      artistArray = <Artist name={this.props.artist.display_name} songs={this.props.songs} />
    }

    let artist_list = <Artist />

    if(Array.isArray(this.props.newArtists)){
      let that = this
      newArtists = this.props.newArtists.map(function(artist){
        return <li key={artist.id}>{artist.name}</li>
      })

      existingArtists = this.props.existingArtists.map(function(artist){
        return <li key={artist.id} name={artist.name} id={artist.id} onClick={that.getExistingArtist}>{artist.display_name}</li>
      })
    }

    return (
      <div>
        {artistArray}
        <p>Did you mean?</p>
        <ul>
          {existingArtists}
        </ul>
        <p>Do you want to add a new artist?</p>
        <ul>
          {newArtists}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { artist: state.artist, newArtists: state.newArtists, existingArtists: state.existingArtists, songs: state.songs }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getArtist: getArtist}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)
