import React, { useState } from 'react';
import './RenderBody.css';
import Card from '../Card/Card';
import BoardingDetails from '../BoardingDetails/BoardingDetails';
import moment from 'moment';

const RenderBody = (props) => {

  const { data } = props; // Json Data


  //data comming from filter component........
  const { oneWayToggle,journeyDate,searchBtnClicked,returnDate } = props;
  const  destinationCity  = props.destinationCity.toLowerCase();
  const  originCity  = props.originCity.toLowerCase();


  console.log(originCity,destinationCity)

  const dayName = moment(journeyDate).format('dddd');


  // function for the filtered data............

  const getFlights = (firstCity, lastCity, day) => {

     return data.filter((finalData) => {

      if (finalData.origin.toLowerCase() === firstCity && finalData.destination.toLowerCase() === lastCity && finalData.available_days.includes(day)) {
        return finalData
      }
    })
  }
  
  
  const finaldata1 = getFlights(originCity, destinationCity, dayName); 

  const finalData2= getFlights(destinationCity.toLowerCase(), originCity.toLowerCase(), dayName);



  return (
    <div className='render-body'>
      <BoardingDetails
        oneWayToggle={oneWayToggle}
        originCity={originCity}
        destinationCity={destinationCity}
        searchBtnClicked={searchBtnClicked}
        journeyDate={journeyDate}
        returnDate={returnDate}
      />
      {oneWayToggle ?

        <div className='render-data'>
          {finaldata1.map((value) => (
            <Card
              flight_no={value.flight_no}
              origin_symbol={value.origin_symbol}
              destination_symbol={value.destination_symbol}
              departure_time={value.departure_time}
              arrive_time={value.arrive_time}
              fare={value.fare}
            />
          )
          )}
        </div>

        :

        <div style={{ display: 'flex' }}>
          <div className='render-data'>
            {finaldata1.map((value) => (
              <Card
                flight_no={value.flight_no}
                origin_symbol={value.origin_symbol}
                destination_symbol={value.destination_symbol}
                departure_time={value.departure_time}
                arrive_time={value.arrive_time}
                fare={value.fare}
              />
            )
            )}
          </div>
          <div className='render-data'>
            {finalData2.map((value) => (
              <Card
                flight_no={value.flight_no}
                origin_symbol={value.origin_symbol}
                destination_symbol={value.destination_symbol}
                departure_time={value.departure_time}
                arrive_time={value.arrive_time}
                fare={value.fare}
              />
            )
            )}
          </div>
        </div>
      }

    </div>
  )
}

export default RenderBody;