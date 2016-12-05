import $ from 'jquery';

export default function searchArtist(){
  return function(dispatch){
    $.ajax({
      url: "http://localhost:3000/search",
      type: "GET"
    }).done(function(response){
      dispatch({type: 'SEARCH_RESULTS', payload: response})
    })
  }
}
