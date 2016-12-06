import React, { Component } from 'react'
import { Artist } from './artist'

export default class ArtistList extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    debugger
    let artist_list = <Artist />
    return (
      <div>
        {artist_list}
      </div>
    )
  }
}
