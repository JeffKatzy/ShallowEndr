import React, { Component } from 'react'

export default class User extends Component{
  constructor() {
    super()

  }
  render() {
    debugger
    let display = ""
    if(this.props.user !== undefined){
      display = this.props.user.username
    }
    return (
      <div>
        <h1>{display}</h1>
      </div>
    )
  }
}
