export default function users(state=[], action){
  debugger
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
      return Object.assign({}, state, { existingArtists: action.payload.existing_artists, newArtists: action.payload.new_artists })
    case 'GET_SONGS':
      return Object.assign({}, state, { artistToSpecify: null, artist: action.payload.artist, songs: action.payload.songs })
    default:
      return state
  }
}
