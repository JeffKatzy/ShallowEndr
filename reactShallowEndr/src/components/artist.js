import React, { Component } from 'react'
import SongList from './song_list'

export const Artist = (props) => {
  //artist has props that include all albums and songs
  return (
    <div className='list'>
      <ul><SongList artistId={props.key} songs={props.songs} rankings={props.rankings}/></ul>
    </div>
  )
}

//export default Artist
