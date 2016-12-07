import React, { Component } from 'react'
// import $ from 'jquery'
//onSubmit={this.searchForArtist.bind(this)
export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.searchForArtist = this.searchForArtist.bind(this)
    this.getSongsFromArtist = this.getSongsFromArtist.bind(this)
  }

  searchForArtist(event){
    event.preventDefault()
    this.props.searchClick(event.target.children[0].value)
  }
  getSongsFromArtist(event){
    // createArtist(event.target.id)
    let display_name = event.target.textContent
    let mb_id = event.target.id
    let name = display_name.toLowerCase().split(" ").join("")
    this.props.getSongs({name: name, display_name: display_name, mb_id: mb_id})
  }

  render() {
    return (
      <div>
        <form id='home-main-form' autoComplete="off">
          <input type='text' placeholder="Search artists" id="search-input"  />
          <button type='submit' id="search" >
            <img src={require("../../public/searchSubmit2.png")} alt="submit" />
          </button>
        </form>
      </div>
    )
  }

}
