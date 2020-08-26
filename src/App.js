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

      //data:-Json data  
      data,


      //Values generated from Filter Component
      oneWayToggle: true,
      originCity: '',
      destinationCity: '',
      searchBtnClicked: false,
      journeyDate: '',
      returnDate: '',
    }

  }



  //Handelers used in the filter Component...........

  handleOneWayToggle = (value) => {
    this.setState({ oneWayToggle: value });
  }

  handleOnOriginCityChange = (event) => {
    const { value } = event.target;
    this.setState({ originCity: value.toUpperCase() })

  }
  handleOnDestinationCityChange = (event) => {
    const { value } = event.target;
    this.setState({ destinationCity: value.toUpperCase() })
  }
  handleOnSearchBtnClick = () => {
    this.setState({ searchBtnClicked: true })
    console.log('Searchbtn', this.state.searchBtnClicked)
  }

  handleOnJourneyDateChange = (event) => {
    const date = event.target.value;
    this.setState({ journeyDate: date });
  }
  handleOnReturnDateChange = (event) => {
    const date = event.target.value;
    this.setState({ returnDate: date });
  }



  render() {

    return (
      <div className='main-container'>
        <Nav />
        <div className='body'>
          <Filter
            searchBtnClicked={this.state.searchBtnClicked}
            handleOnSearchBtnClick={this.handleOnSearchBtnClick}
            destinationCity={this.state.destinationCity}
            handleOnDestinationCityChange={this.handleOnDestinationCityChange}
            originCity={this.state.originCity}
            handleOnOriginCityChange={this.handleOnOriginCityChange}
            handleOneWayToggle={this.handleOneWayToggle}
            oneWayToggle={this.state.oneWayToggle}
            
            handleOnJourneyDateChange={this.handleOnJourneyDateChange}
            handleOnReturnDateChange={this.handleOnReturnDateChange} />
          <RenderBody
            searchBtnClicked={this.state.searchBtnClicked}
            destinationCity={this.state.destinationCity}
            originCity={this.state.originCity}
            oneWayToggle={this.state.oneWayToggle} data={this.state.data}
            journeyDate={this.state.journeyDate}
            returnDate={this.state.returnDate} />
        </div>
      </div>
    )
  }
}
export default App;
