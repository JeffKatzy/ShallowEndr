import $ from 'jquery'

export default function addSongToPlaylist(obj){
  return function(dispatch){
    $.ajax({
      url: "http://localhost:3000/users/addSong",
      type: 'POST',
      data: {user: { song_id: obj.song_id, user_id: obj.user_id }},
      headers: { authorization: localStorage.jwt }
    }).done(function(response){
      return dispatch({type: '', payload: ''})
    })
  }

}
