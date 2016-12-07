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

  searchForArtist(event){
    event.preventDefault()
    this.props.searchClick(event.target.children[0].value)
  }
  getSongsFromArtist(event){
    // createArtist(event.target.id)
    let display_name = event.target.textContent
    let mb_id = event.target.id
    let name = display_name.toLowerCase().split(" ").join("")
    this.props.getSongs({name: name, display_name: display_name, mb_id: mb_id})
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
      artistArray = [<p>artist exists in db</p>]
    }
    if(this.props.artist !== null && this.props.artist !== undefined){
      artistArray = <Artist name={this.props.artist.display_name} songs={this.props.songs} />
    }
    debugger
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
