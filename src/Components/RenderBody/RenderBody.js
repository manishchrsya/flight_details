import React from 'react';
import './RenderBody.css';
import Card from '../Card/Card';
import BoardingDetails from '../BoardingDetails/BoardingDetails';

const RenderBody = (props) => {

  const { data } = props;
  console.log(data)
  return (
    <div className='render-body'>
      <BoardingDetails
        origin={data.origin}
        destination={data.destination}
        flight_date={data.flight_date}
      />
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
  )
}

export default RenderBody;