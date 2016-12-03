import $ from 'jquery'
import { browserHistory } from 'react-router'

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
        localStorage.setItem('jwt', response.jwt)
          browserHistory.push('/home')
        dispatch({type: "LOGGING_IN", payload: response})
      })
    }
}
