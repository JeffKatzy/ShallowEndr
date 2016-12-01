export default function users(state=[], action){
  switch (action.type) {
    case 'FETCH_USERS':
      debugger
      return state.concat(action.payload)
    default:
      return state
  }
}
