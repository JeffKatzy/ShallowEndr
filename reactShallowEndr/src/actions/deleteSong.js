import $ from 'jquery'

export default function deleteSong(song_id){
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/future_songs/${song_id}`,
      type: 'POST'
    }).done(function(response){
      debugger
      return dispatch({type: '', dispatch: response.message})
    })
  }
}
