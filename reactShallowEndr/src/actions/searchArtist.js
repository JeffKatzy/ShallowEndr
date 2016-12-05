import $ from 'jquery';

export default function searchArtist(searchTerm){
  return function(dispatch){
    $.ajax({
      url: "http://localhost:3000/search",
      type: "GET",
      data: { artist: { searchTerm: searchTerm } }
    }).done(function(response){
      debugger
      if(response.length > 1){
        dispatch({type: 'SEARCH_RESULTS', payload: response})
      }
      else{
        dispatch({type: "GET_SONGS", payload: response})
      }
    })
  }
}
