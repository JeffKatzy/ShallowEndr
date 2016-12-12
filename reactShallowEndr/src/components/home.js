import React, { Component } from 'react'
import $ from 'jquery'

import ArtistList from './artist_list'
import SongList from './song_list'
import SearchBar from './search_bar'

{/* <div>
  {this.props.artist ? <div>{artistArray}</div> : <h4> nope </h4> }
  {this.props.artists ? <div><h4>Please further specify an artist</h4> <div>{artistArray}</div></div> : <p>not ok</p>}
  {this.props.results ? <Artist results={this.props.results} /> : <p>ok</p> }
</div> */}

export default class Home extends Component{
  constructor(props){
    super(props)
  }

  render(){
    let artistArray = []
     // map means you don't have to declare an empty artistArray.
    let that = this
    if(Array.isArray(this.props.artists)){
      artistArray = this.props.artists.map(function(artist){
        return <li onClick={that.getSongsFromArtist.bind(that)} id={artist.id}>{artist.name}</li>
      })
    } else {
      artistArray = [<p>artist exists in db</p>]
    }
    // undefined is falsy, so can just do if(this.props.artist)
    if(this.props.artist !== undefined){
      artistArray = <Artist name={this.props.artist.display_name} songs={this.props.songs} />
    }
    debugger
    return (
      <div>
          <SearchBar />
//                      probably don't need to pass down newArtists and 
//                      existingArtists as props, but instead can map state to props in the respective components.
          <ArtistList newArtists={this.props.newArtists} existingArtists={this.props.existingArtists} />
          <SongList />
      </div>
    )
  }
}
