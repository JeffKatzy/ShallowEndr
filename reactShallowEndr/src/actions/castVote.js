import $ from 'jquery'

export default function castVote(){
  return function(dispatch){
    $.ajax({
      url: "http://localhost:3000/users_artists",
      type: "POST"
    }).done(function(response){
      debugger
      return dispatch({type: "", payload: ""})
    })
  }
}