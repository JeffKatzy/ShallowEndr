export default function users(state=[], action){
  switch (action.type) {
    case 'FETCH_USERS':
      debugger
      return state.concat(action.payload)
    case 'SHOW_USERS':
      return state
    case 'LOGGING_IN':
      return action.payload

    default:
      return state
  }
}
