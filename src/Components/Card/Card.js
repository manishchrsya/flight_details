import React from 'react';
import './Card.css'
import Logo from '../../Images/Flight.jpg';

const Card = (props) => {
    const { flight_no, origin_symbol, destination_symbol, departure_time, arrive_time, fare } = props;
    return (
        <div className='card-body'>
            <div className='flight-details'>
                <div className='flight-fare'>
                    <h3 style={{marginLeft:5}}>Rs. {fare}</h3>
                </div>
                <div className='flight-schedule'>
                    <div className='flight-oneway-return-details'>
                        <h4 style={{ fontSize: 14 }}>{flight_no}</h4>
                        <p>{origin_symbol} to {destination_symbol}</p>
                        <p>Depart: {departure_time} AM</p>
                        <p>Arrival: {arrive_time} PM</p>
                    </div>
                    <div className='flight-oneway-return-details'>
                        <h4 style={{ fontSize: 14 }}>{flight_no}</h4>
                        <p>{origin_symbol} to{destination_symbol}</p>
                        <p>Depart: {departure_time} AM</p>
                        <p>Arrival: {arrive_time} PM</p>
                    </div>
                </div>
            </div>
            <div className='flight-images'>
                <img src={Logo} alt='Company logo' />
                <button>Book this flight</button>
            </div>
        </div>
    )
}

export default Card;