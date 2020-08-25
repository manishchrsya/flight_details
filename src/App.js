import React, { Component } from 'react';
import './App.css';
import RenderBody from './Components/RenderBody/RenderBody'
import Nav from './Components/Nav/Nav'
import Filter from './Components/Filter/Filter';
import data from './data.json'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {    
      data
    }
    
  }

  render() {
    return (
      <div className='main-container'>
        <Nav />
        <div className='body'>
          <Filter/>
          <RenderBody data={this.state.data}/>
        </div>
      </div>
    )
  }
}
export default App;
