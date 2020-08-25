import React, { Component } from 'react';
import './App.css';
import RenderBody from './Components/RenderBody/RenderBody'
import Nav from './Components/Nav/Nav'
import Filter from './Components/Filter/Filter';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      flight_no: "AI-101",
      flight_date: "01-01-2020",
      origin: "Pune",
      destination: "Delhi",
      departure_time: "10:00",
      arrive_time: "12:00",
      fare: "4500",
      origin_symbol: "PNQ",
      destination_symbol: "DEL"
    }
  }

  render() {
    return (
      <div className='main-container'>
        <Nav />
        <div className='body'>
          <Filter/>
          <RenderBody
            flight_no={this.state.flight_no}
            flight_date={this.state.flight_date}
            origin={this.state.origin}
            destination={this.state.destination}
            departure_time={this.state.departure_time}
            arrive_time={this.state.arrive_time}
            fare={this.state.fare}
            origin_symbol={this.state.origin_symbol}
            destination_symbol={this.state.destination_symbol}
          />
        </div>
      </div>
    )
  }
}
export default App;
