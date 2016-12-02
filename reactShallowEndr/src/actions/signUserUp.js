import $ from 'jquery'

export default function signUserUp(obj){
  return function(dispatch){
    $.ajax({
        url: 'http://localhost:3000/users/signup',
        type: 'POST',
        data: { user: obj },
        dataType: 'JSON'
    }).done((response) => {
      debugger
    })
  }
}
