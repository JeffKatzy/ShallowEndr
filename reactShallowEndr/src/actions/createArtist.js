import $ from 'jquery'

export default function createArtist(artist){
  return function(dispatch){
    $.ajax({
      url: "http://localhost:3000/artists",
      type: 'POST',
      data: {artist: { mb_id: artist.mb_id, name: artist.name, display_name: artist.display_name } },
      headers: { authorization: localStorage.jwt }
    }).done(function(response){
      return dispatch({type: "GET_SONGS", payload: response})
    })
  }
}
