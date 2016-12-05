import $ from 'jquery';

export default function searchArtist(searchTerm){
  return function(dispatch){
    $.ajax({
      url: "http://localhost:3000/search",
      type: "GET",
      data: { artist: { searchTerm: searchTerm } }
    }).done(function(response){
        dispatch({type: 'SEARCH_RESULTS', payload: response})
      }
    )
  }
}
