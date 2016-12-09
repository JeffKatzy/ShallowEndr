import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import addSong from '../actions/addSongToPlaylist'

class Song extends Component{
  constructor(props){
    super(props)
  }

  songClick(event){
    event.preventDefault();
    debugger
    this.props.addSong({ song_id: event.target.id, user_id: this.props.current_user})
  }
  
  render(){
    return (
      <li id={this.props.mb_id} albumId={this.props.album_id} onClick={this.songClick.bind(this)}>{this.props.name}</li>
    )
  }
}
function mapStateToProps(state){
  return { current_user: state.user_id}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ addSong: addSong }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Song)
