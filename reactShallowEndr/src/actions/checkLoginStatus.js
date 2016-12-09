import $ from 'jquery'

export default function checkLoginStatus(){
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/'
    })
  }
}
