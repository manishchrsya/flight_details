import React, { Component } from 'react';
import './App.css';
import RenderBody from './Components/RenderBody/RenderBody';
import Nav from './Components/Nav/Nav';
import Filter from './Components/Filter/Filter';
import data from './data.json';
// import moment from 'moment';

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
      buttonDisabled: false,
    }

    //  console.log('the new date is',moment().format(this.state.journeyDate));
  }



  //Handelers used in the filter Component...........

  handleOneWayToggle = (value) => {
    this.setState({ oneWayToggle: value });
  }

  handleOnOriginCityChange = (event) => {
    const { value } = event.target;
    this.setState({ originCity: value})

  }
  handleOnDestinationCityChange = (event) => {
    const { value } = event.target;
    this.setState({ destinationCity: value})
  }
  handleOnSearchBtnClick = () => {
    this.setState({ searchBtnClicked: true })
  }

  handleOnJourneyDateChange = (event) => {
    const date = event.target.value;
    this.setState({ journeyDate: date });
  }
  handleOnReturnDateChange = (event) => {
    const date = event.target.value;
    this.setState({ returnDate: date });
  }

  
  // handleButtonDisabled = () =>{



  //   if (this.state.originCity!=='' && this.state.destinationCity!=='' && this.state.journeyDate!=='' && buttonAPiCallFlag) {
  //     this.setState({buttonDisabled:false})
  //   }
  // }



  render() {

    const {searchBtnClicked, destinationCity, originCity, oneWayToggle, data, journeyDate, returnDate } = this.state

    return (
      <div className='main-container'>
        <Nav />
        <div className='body'>
          <Filter
            searchBtnClicked={searchBtnClicked}
            handleOnSearchBtnClick={this.handleOnSearchBtnClick}
            destinationCity={destinationCity}
            handleOnDestinationCityChange={this.handleOnDestinationCityChange}
            originCity={originCity}
            handleOnOriginCityChange={this.handleOnOriginCityChange}
            handleOneWayToggle={this.handleOneWayToggle}
            oneWayToggle={oneWayToggle}
            
            handleOnJourneyDateChange={this.handleOnJourneyDateChange}
            handleOnReturnDateChange={this.handleOnReturnDateChange} />
          <RenderBody
            searchBtnClicked={searchBtnClicked}
            destinationCity={destinationCity}
            originCity={originCity}
            oneWayToggle={oneWayToggle} data={data}
            journeyDate={journeyDate}
            returnDate={returnDate} />
        </div>
      </div>
    )
  }
}
export default App;
