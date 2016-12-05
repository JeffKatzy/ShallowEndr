import { browserHistory } from 'react-router'

export default function logUserOut(){
  return function(dispatch){
      localStorage.clear()
      browserHistory.push('/')
      dispatch({type: "LOGGING_OUT", payload: {user_id: null, logged_in: false}})
  }
}
