import React, { Component } from 'react'
import SongList from './song_list'

export const Artist = (props) => {
  //artist has props that include all albums and songs
  return (
    <div className='list'>
      <h3 text-align='center'>{props.name}</h3>
      <ul><SongList songs={props.songs} /></ul>
    </div>
  )
}

//export default Artist
