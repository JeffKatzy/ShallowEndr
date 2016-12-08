import $ from 'jquery'

export default function getSongsFromPlaylist(user_id){
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/future_songs',
      type: 'GET',
      data: { future_song: { user_id: user_id}}
    }).done(function(response){
      debugger
      dispatch({type: 'VIEW_SAVED_SONGS', payload: response})
    })
  }
}
