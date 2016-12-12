import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import getSongs from '../actions/getSongs'
import searchArtist from '../actions/searchArtist'

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.searchForArtist = this.searchForArtist.bind(this)
    this.getSongsFromArtist = this.getSongsFromArtist.bind(this)
  }

  searchForArtist(event){
    event.preventDefault()
    this.handleSearchSubmit(event.target.children[0].value)
  }

  getSongsFromArtist(event){
    // createArtist(event.target.id)
    let display_name = event.target.textContent
    let mb_id = event.target.id
    let name = display_name.toLowerCase().split(" ").join("")
    this.props.getSongs({name: name, display_name: display_name, mb_id: mb_id})
  }

  handleSearchSubmit(searchTerm){
    this.props.searchArtist(searchTerm)
    browserHistory.push('/results')
  }


  render() {
    return (
      <div>
        <form id='home-main-form' autoComplete="off" onSubmit={this.searchForArtist}>
          <input type='text' placeholder="Search artists" id="search-input"  />
          <button type='submit' id="search" >Submit</button>
        </form>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchArtist: searchArtist, getSongs: getSongs }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
