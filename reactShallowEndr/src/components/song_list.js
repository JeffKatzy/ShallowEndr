import React, { Component } from 'react'
import Song from './song'

export default class SongList extends Component{
  render() {
    let song_list = this.props.songs.map(function(song){
      return <Song key={song.id} name={song.name} mb_id={song.mb_id} album_id={song.album_id} />
    })
    return (
      <div className="song-list">
        {song_list}
      </div>
    )
  }
}
