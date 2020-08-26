import React from 'react';
import './RenderBody.css';
import Card from '../Card/Card';
import BoardingDetails from '../BoardingDetails/BoardingDetails';

const RenderBody = (props) => {

  const { data } = props; // Json Data



  //data comming from filter component
  const { oneWayToggle } = props;
  const { searchBtnClicked } = props;
  const { destinationCity } = props;
  const { originCity } = props;
  const {journeyDate} = props;
  const {returnDate}= props;


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
          {data.map((value) => (
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
            {data.map((value) => (
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
            {data.map((value) => (
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