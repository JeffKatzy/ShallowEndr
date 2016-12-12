import $ from 'jquery'

export default function getArtist(id){
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/artists/${id}`,
      type: 'GET',
      headers: { authorization: localStorage.jwt }
    }).done(function(response){
      return dispatch({type: "GET_SONGS", payload: response})
    })
  }
}
