import React, { Component } from 'react'
import Song from './song'

export default class SongList extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.songs) {
      return <div></div>
    }
    let that = this
    let song_list = this.props.songs.map((song) => {
      let ranked = ""
      if (that.props.rankings) {
        if (that.props.rankings.song_id === song.id) { ranked = "checked" }
      }
      return <Song name={song.name} id={song.id} artistId={song.artist_id} mbId={song.mb_id} albumId={song.album_id} ranked={ranked} />
    })
    return (
      <div className="song-list">
        {song_list}
      </div>
    )
  }
}
