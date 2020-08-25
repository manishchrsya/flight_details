import React from 'react';
import './RenderBody.css';
import Card from '../Card/Card';
import BoardingDetails from '../BoardingDetails/BoardingDetails';

const RenderBody = (props) => {

  const { flight_no, flight_date, origin, destination, departure_time, arrive_time, fare, origin_symbol, destination_symbol } = props
  return (
    <div className='render-body'>
      <BoardingDetails
        origin={origin}
        destination={destination}
        flight_date={flight_date}
      />
      <div className='render-data'>
        <Card
          flight_no={flight_no}
          origin_symbol={origin_symbol}
          destination_symbol={destination_symbol}
          departure_time={departure_time}
          arrive_time={arrive_time}
          fare={fare}
        />
        <Card
          flight_no={flight_no}
          origin_symbol={origin_symbol}
          destination_symbol={destination_symbol}
          departure_time={departure_time}
          arrive_time={arrive_time}
          fare={fare}
        />
        <Card
          flight_no={flight_no}
          origin_symbol={origin_symbol}
          destination_symbol={destination_symbol}
          departure_time={departure_time}
          arrive_time={arrive_time}
          fare={fare}
        />
        <Card
          flight_no={flight_no}
          origin_symbol={origin_symbol}
          destination_symbol={destination_symbol}
          departure_time={departure_time}
          arrive_time={arrive_time}
          fare={fare}
        />
        <Card
          flight_no={flight_no}
          origin_symbol={origin_symbol}
          destination_symbol={destination_symbol}
          departure_time={departure_time}
          arrive_time={arrive_time}
          fare={fare}
        />
      </div>

    </div>
  )
}

export default RenderBody;