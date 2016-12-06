import React, { Component } from 'react'
import { Song } from './song'

export default class SongList extends Component{
  render() {
    let song_list = <Song />
    return (
      <div>
        {song_list}
      </div>
    )
  }
}
