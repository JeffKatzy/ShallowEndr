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
    //song.id = event.target.parentElement.children[1].id
    //user.id = this.props.current_user
    //artist.id = still needs to be sent from rails
    debugger
    this.props.castVote(/*{ song_id: song_id, user_id: state.current_user, artist_id: artist_id}*/)
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
  return { current_user: state.user_id }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ addSong: addSong, castVote: castVote }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Song)
