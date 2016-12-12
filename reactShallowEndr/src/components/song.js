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
    this.props.addSong({ song_id: event.target.id, user_id: this.props.current_user})
  }
  handleCheckBoxChange(event){
    event.preventDefault()
    let test = 'not a ranked song'

    if (this.props.rankings != null) {
      //there is already a ranking for this user/artist
      if (this.props.rankings.song_id === this.props.id) {
        test = 'ranked song'
      }
    } else {
      //no rankings for this user/artist yet
      test = 'there is no ranking for this artist/user'
    }

    //song.id = event.target.parentElement.children[1].id
    //user.id = this.props.current_user
    //artist.id = still needs to be sent from rails
    // let current_user = this.props.current_user
    let current_user = 1
    this.props.castVote({ song_id: this.props.id, user_id: current_user, artist_id: this.props.artistId})
  }

  render(){
    return (
      <div className="songs-with-checkboxes">
        <input type='checkbox' checked={this.props.ranked} onChange={this.handleCheckBoxChange} />
        <li id={this.props.id} mbId={this.props.mbId} albumId={this.props.albumId} onClick={this.songClick.bind(this)}>{this.props.name}</li><br />
      </div>
    )
  }
}
function mapStateToProps(state){
  return { current_user: state.user_id, rankings: state.rankings }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ addSong: addSong, castVote: castVote }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Song)
