export default function users(state=[], action){
  switch (action.type) {
    case 'FETCH_USERS':
      return state.concat(action.payload)
    case 'SHOW_USERS':
      return state
    case 'LOGGING_IN':
      return Object.assign({}, state, { user_id: action.payload.user_id, jwt: action.payload.jwt, logged_in: true })
    case 'LOGGING_OUT':
      return Object.assign({}, state, { user_id: action.payload.user_id, logged_in: action.payload.logged_in })
    case 'SEARCH_RESULTS':
      return Object.assign({}, state, { artistToSpecify: action.payload, artist: null, songs: null })
    case 'GET_SONGS':
      return Object.assign({}, state, { artistToSpecify: null, artist: action.payload.artist, songs: action.payload.songs })
    default:
      return state
  }
}
