import React, { Component } from 'react'

export default class Artist extends Component{
  //artist has props that include all albums and songs
  render(){
    debugger
    let songList = this.props.results.map(function(album){
        return album.songs.map(function(song){
          return <li>{song.title}</li>
        })
      })
    return (
      <div>
        <h1>The Strokes</h1>
          <ul>
            {songList}
          </ul>
      </div>
    )
  }
}
