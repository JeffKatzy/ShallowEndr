import React, { Component } from 'react'
import Artist from './artist'
export default class Home extends Component{
  constructor(props){
    super(props)
  }

  searchForArtist(event){
    event.preventDefault()
    this.props.searchClick(event.target.children[1].value)
  }

  render(){
    return (
      <div>
        <h1>Welcome to ShallowEndr</h1>
        <h2>Version 0.0.0.0.1</h2>
        <h4>A Johnathan Cena Sponsored Production</h4>
        <form id='home-main-form' onSubmit={this.searchForArtist.bind(this)}>
          <label>Enter Your Search Term Here: </label>
          <input type='text' />
          <input type='submit' />
        </form>
        <input type='submit' onClick={this.props.handleClick} value="Logout" />
        <div>
          {this.props.results ? <Artist results={this.props.results} /> : <p>ok</p> }
        </div>
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales, magna ut ultrices ornare, metus ipsum rutrum purus, at posuere orci dui vitae lacus. Vivamus dapibus vehicula blandit. Suspendisse vulputate quam id neque luctus, eget varius dui tristique. Sed semper, eros sit amet cursus sagittis, tortor sapien tempus ex, consectetur varius arcu dolor sit amet dui. Cras condimentum ultricies vestibulum. Mauris felis odio, dignissim sed tempus non, hendrerit ut mauris. Ut tristique sodales turpis, a maximus risus varius in. Curabitur sit amet suscipit felis, in laoreet ipsum. Proin scelerisque suscipit ante, ut maximus libero porta sed. Phasellus porta facilisis nisl, at convallis nunc sollicitudin a. Vivamus ultricies tincidunt risus, sed volutpat velit dapibus sit amet. Aenean vel turpis felis.

           Proin et ligula quis nulla fermentum tristique. Donec metus metus, dapibus nec vestibulum at, accumsan vitae velit. Mauris consequat lacus ligula, quis sollicitudin urna rhoncus quis. Aliquam volutpat velit quam, vitae egestas turpis euismod ac. Phasellus accumsan dui orci, nec sollicitudin ipsum luctus id. Morbi aliquet laoreet mi, quis maximus sapien feugiat nec. Aenean ullamcorper pellentesque felis eget tempor. Nunc felis neque, sollicitudin ut cursus id, euismod vel purus. Aliquam erat volutpat. Nunc a nisi tempus, molestie urna sit amet, porttitor nibh. Cras condimentum, ligula nec imperdiet finibus, erat tortor blandit metus, consequat pellentesque sapien lorem vitae turpis. Donec hendrerit consequat libero, eu porttitor elit fringilla eget. Duis eleifend velit non ex vehicula, id pellentesque erat aliquet.

           Donec commodo augue nec leo convallis, sed scelerisque turpis ultricies. Aenean eros lorem, dignissim eu ligula mollis, sollicitudin sodales tellus. Mauris eget ligula elit. Quisque nulla purus, ultrices sit amet ex a, consequat blandit mauris. Nam aliquam maximus dolor. Proin eu est eu massa efficitur blandit nec vitae metus. Aliquam sit amet euismod odio. Morbi id ipsum vel risus accumsan rutrum.

           Praesent pellentesque ligula tristique, rhoncus purus non, pulvinar sapien. Etiam quis erat nisl. Phasellus sed ullamcorper ante. Curabitur fringilla velit eu neque viverra molestie. Nullam at elementum mauris. Curabitur id neque nec mi posuere porta ut quis nisi. Vivamus in augue a mi interdum eleifend ut eu urna. Sed sed massa tristique, feugiat sapien vitae, faucibus elit. In commodo odio id luctus maximus. Sed hendrerit rutrum eros nec rhoncus. Vestibulum ex elit, ultricies eget hendrerit et, sagittis a sapien.

           Nam non massa ex. Quisque fermentum lorem nec facilisis finibus. Fusce pulvinar a tellus non tristique. Sed cursus diam risus, sed porttitor sem gravida sit amet. Praesent vehicula ut mauris non fringilla. Curabitur nec diam at eros fermentum consequat. Suspendisse accumsan venenatis leo et iaculis.
           </p>
      </div>
    )
  }
}
