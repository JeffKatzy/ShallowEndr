import React, { Component } from 'react'
import FutureSong from './future_song'

export default class FutureSongList extends Component{
  render() {
    let song_list = this.props.songs.map(function(song){
      return <FutureSong key={song.id} id={song.id} name={song.name} />
    })
    
    return (
      <div>
        {song_list}
      </div>
    )
  }
}
