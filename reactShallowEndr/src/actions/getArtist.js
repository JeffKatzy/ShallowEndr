import $ from 'jquery'

export default function getArtist(id){
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/artists/${id}`,
      type: 'GET'
    }).done(function(response){
      debugger
      return dispatch({type: "GET_SONGS", payload: response})
    })
  }
}
