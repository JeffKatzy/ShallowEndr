import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import addSong from '../actions/addSongToPlaylist'
import castVote from '../actions/castVote'

class Song extends Component{
  constructor(props){
    super(props)
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this)
  }

  songClick(event){
    event.preventDefault();
    debugger
    this.props.addSong({ song_id: event.target.id, user_id: this.props.current_user})
  }
  handleCheckBoxChange(event){
    event.preventDefault()
    this.props.castVote('coolio')
  }

  render(){
    return (
      <div className="songs-with-checkboxes">
        <input type='checkbox' onChange={this.handleCheckBoxChange} />
        <li id={this.props.mb_id} albumId={this.props.album_id} onClick={this.songClick.bind(this)}>{this.props.name}</li><br />
      </div>
    )
  }
}
function mapStateToProps(state){
  return { current_user: state.user_id}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ addSong: addSong, castVote: castVote }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Song)
