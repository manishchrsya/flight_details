import React, { useState } from 'react';
import './Filter.css'

const Filter = () => {

    const [Toggle, setToggle] = useState(true);

    return (
        <div className='filter-body'>
            <div className='btn-container'
            >
                <button className='btn' onClick={() => setToggle(true)}>One Way</button>
                <button className='btn' onClick={() => setToggle(false)}>Return</button>
            </div>

            {Toggle === true ?
                <div className='input-data-section'>
                    <div className='input-lable-container'>
                        <label>From :-</label>
                        <input type='text' placeholder='Enter Origin City' />
                    </div>
                    <div className='input-lable-container'>
                        <label>To :-</label>
                        <input type='text' placeholder='Enter Destination City' />
                    </div>
                    <div className='input-lable-container'>
                        <label>Journey date :-</label>
                        <input type='date' placeholder='Enter Depart date' />
                    </div>
                    <div className='input-lable-container'>
                        <label>Passengers :-</label>
                        <input type='number' placeholder='Passengers' />
                    </div>
                    <button>Search</button>
                </div>

                :

                <div className='input-data-section'>
                    <div className='input-lable-container'>
                        <label>From :-</label>
                        <input type='text' placeholder='Enter Origin City' />
                    </div>
                    <div className='input-lable-container'>
                        <label>To :-</label>
                        <input type='text' placeholder='Enter Destination City' />
                    </div>
                    <div className='input-lable-container'>
                        <label>Journey date :-</label>
                        <input type='date' placeholder='Enter Depart date' />
                    </div>
                    <div className='input-lable-container'>
                        <label>Return date :-</label>
                        <input type='date' placeholder='Enter Depart date' />
                    </div>
                    <div className='input-lable-container'>
                        <label>Passengers :-</label>
                        <input type='number' placeholder='Passengers' />
                    </div>
                    <button>Search</button>
                    
                </div>
            }
        </div>

    )
}

export default Filter; 