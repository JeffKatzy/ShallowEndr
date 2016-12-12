import $ from 'jquery'

export default function castVote(){
  return function(dispatch){
    $.ajax({
      url: "http://localhost:3000/rankings",
      type: "POST",
      headers: { authorization: localStorage.jwt }
    }).done(function(response){
      debugger
      return dispatch({type: "", payload: ""})
    })
  }
}
