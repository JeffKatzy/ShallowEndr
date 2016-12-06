import $ from 'jquery';

export default function getSongs(artist){
  return function(dispatch){
    $.ajax({
      url: "http://localhost:3000/artists",
      type: "POST",
      data: { artist: artist }
    }).done(function(response){
        dispatch({type: "GET_SONGS", payload: response})
      }
    )
  }
}
