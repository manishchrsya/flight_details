import React from 'react';
import './BoardingDetails.css';

const BoardingDetails = (props) => {
    const { origin, destination, flight_date } = props
    return (
        <div className='container'>
            <div className='root'>
                <h1>{origin} to {destination}</h1>
            </div>
            <div className='dates'>
                <p>Depart :-  {flight_date}</p>
                <p>Return :-  {flight_date}</p>
            </div>
        </div>
    )
}

export default BoardingDetails;