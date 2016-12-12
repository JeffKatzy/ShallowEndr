import $ from 'jquery'

export default function castVote(ranking){
  return function(dispatch){
    $.ajax({
      url: "http://localhost:3000/rankings",
      type: "POST",
      data: { ranking: ranking }
    }).done(function(response){
      return dispatch({type: "CAST_VOTE", payload: response})
    })
  }
}
