import $ from 'jquery'

export default function getUsers(){
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/users/1',
      type: "GET",
      headers: { authorization: localStorage.jwt }
    }).done(function(data){
      dispatch({type: "FETCH_USERS", payload: data})
    })
  }
}
