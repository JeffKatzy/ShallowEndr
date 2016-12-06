import React, { Component } from 'react'

export default class Artist extends Component{
  //artist has props that include all albums and songs
  render(){
   let songList = this.props.songs.map(function(song){
      return <li id={song.mb_id}>{song.name}</li>
    })

    return (
      <div>
        <h1>{this.props.name}</h1>
          <ul>
            {songList}
          </ul>
      </div>
    )
  }
}
