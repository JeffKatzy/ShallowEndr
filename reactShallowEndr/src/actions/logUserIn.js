import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function logUserIn(login_params){
    return function(dispatch){
      $.ajax({
        url: 'http://localhost:3000/sessions/login',
        type: "POST",
        data: { auth: { email: login_params.email, password: login_params.password } },
        dataType: "json",
        headers: { authorization: localStorage.jwt }
      }).done(function(response){
        debugger
        if(response.errors){
          alert(response.errors)
          dispatch({type: "FAILED_LOGIN", payload: response})
        }
        else{
          localStorage.setItem('jwt', response.jwt)
          browserHistory.push('/home')
          dispatch({type: "LOGGING_IN", payload: response})
        }

      })
    }
}
