export default function users(state=[], action){
  switch (action.type) {
    case 'FETCH_USERS':
      return state.concat(action.payload)
    case 'SHOW_USERS':
      return state
    case 'LOGGING_IN':
      return Object.assign({}, state, { user_id: action.payload.user_id, jwt: action.payload.jwt, logged_in: true })
    case 'LOGGING_OUT':
      debugger
      return Object.assign({}, state, { user_id: action.payload.user_id, logged_in: action.payload.logged_in })
    case 'SEARCH_RESULTS':
      return Object.assign({}, state, { results: action.payload })
    case 'GET_SONGS':
        return Object.assign({}, state, { results: action.payload })
    default:
      return state
  }
}
