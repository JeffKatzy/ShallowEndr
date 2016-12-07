import $ from 'jquery'

export default function getArtist(displayName){
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/artists/${displayName}`,
      type: 'GET'
    }).done(function(response){
      debugger
      return dispatch({type: "", payload: ""})
    })
  }
}
