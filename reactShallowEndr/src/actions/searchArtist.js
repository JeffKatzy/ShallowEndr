import $ from 'jquery';

export default function searchArtist(searchTerm){
  return function(dispatch){
    $.ajax({
      url: "http://localhost:3000/search",
      type: "GET",
      data: { artist: { searchTerm: searchTerm } },
      headers: { authorization: localStorage.jwt }
    }).done(function(response){
        if(response.songs){ dispatch({type: 'GET_SONGS', payload: response}) }
        else { dispatch({type: 'SEARCH_RESULTS', payload: response}) }
      }
    )
  }
}
