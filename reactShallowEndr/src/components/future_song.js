import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import deleteSong from '../actions/deleteSong'

class FutureSong extends Component{
  constructor(props){
    super(props)
    debugger
    this.removeSong = this.removeSong.bind(this)
  }

  removeSong(event){
    event.preventDefault()
    this.props.deleteSong(event.target.id)
  }

  render(){
    return (
      <li id={this.props.id} onClick={this.removeSong}>{this.props.name}</li>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteSong: deleteSong}, dispatch)
}

export default connect(null, mapDispatchToProps)(FutureSong)
