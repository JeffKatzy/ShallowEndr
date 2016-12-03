import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class User extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    debugger
    // let display = ""
    // if(this.props.user.username !== undefined){
    //   display = this.props.user.username
    // }
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}
// function mapStateToProps(state, ownProps){
//   ownProps.routeParams.id
// }
// export default connect(mapStateToProps)(User);
