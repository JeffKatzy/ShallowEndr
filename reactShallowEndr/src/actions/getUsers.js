import $ from 'jquery'

export default function getUsers(){
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/users/1',
      type: "GET",
      headers: { authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.i_Wqyr7fiugIy1rr9Gkm7VLaB_qzjQkbJzvWTVaOYMQ"}
    }).done(function(data){
      dispatch({type: "FETCH_USERS", payload: data})
    })
  }
}
