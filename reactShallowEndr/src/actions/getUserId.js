import $ from 'jquery'

export default function getUserId(){
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/users/getUserId',
      type: 'GET',
      data: { user: { jwt: localStorage.jwt } },
      dataType: "json"
    }).done(function(response){
      dispatch({type: "GET_USER_ID", payload: response})
    })
  }
}
