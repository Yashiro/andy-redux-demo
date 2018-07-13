import React, { Component } from 'react'
import { connect } from 'andy-redux'
import { addGun, removeGun, addGunAsync, addTwiceAndAsyncGun } from './index.redux'

@connect(
    state => ({num:state}),
    {addGun, removeGun, addGunAsync, addTwiceAndAsyncGun}
)
class App extends Component {
  
  render() {
    return (
      <div>
        <h1>Now Have Gun {this.props.num}</h1>
        <button onClick={this.props.addGun}>Apply Gun</button>
        <button onClick={this.props.removeGun}>Return Gun</button>
        <button onClick={this.props.addGunAsync}>Delay Apply Gun</button>
        <button onClick={this.props.addTwiceAndAsyncGun}>Apply Two Gun And Delay Apply Gun</button>
      </div>
    )
  }
}
export default App