import $ from 'jquery'

export default function signUserUp(){
  return function(dispatch){
    $.ajax({
        url: 'http://localhost:3000/users/signup',
        type: 'POST',
        data: { user: {  } },
        dataType:
    })
  }
}
