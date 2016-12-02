import $ from 'jquery'

export default function logUserIn(login_params){
    return function(dispatch){
      $.ajax({
        url: 'http://localhost:3000/users/login',
        type: "POST",
        data: { user: { email: login_params.email, password: login_params.password } },
        dataType: "json"
      }).fail(function(response){
        window.alert(response)
      }).done(function(response){
        sessionStorage.setItem('jwt', response.jwt)
        dispatch({type: "LOGGING_IN", payload: response.jwt})
        debugger
        console.log(response)
      })
    }
}
