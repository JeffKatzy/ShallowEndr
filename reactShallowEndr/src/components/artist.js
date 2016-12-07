import React, { Component } from 'react'
import SongList from './song_list'

export const Artist = (props) => {
  //artist has props that include all albums and songs
  return (
    <div>
      <p>{props.name}</p>
      <ul><SongList songs={props.songs} /></ul>
    </div>
  )
}

//export default Artist
