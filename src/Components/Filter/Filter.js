import React from 'react';
import './Filter.css'
import moment from 'moment';

const Filter = (props) => {



    const { oneWayToggle, handleOneWayToggle,handleOnOriginCityChange,handleOnDestinationCityChange,handleOnJourneyDateChange,handleOnReturnDateChange,handleOnSearchBtnClick } = props
    

    return (
        <div className='filter-body'>
            <div className='btn-container'
            >
                <button className='btn' onClick={() => handleOneWayToggle(true)}>One Way</button>
                <button className='btn' onClick={() => handleOneWayToggle(false)}>Return</button>
            </div>

            
                <div className='input-data-section'>
                    <div className='input-lable-container'>
                        <label>From :-</label>
                        <input onChange={handleOnOriginCityChange} type='text' placeholder='Enter Origin City' />
                    </div>
                    <div className='input-lable-container'>
                        <label>To :-</label>
                        <input onChange={handleOnDestinationCityChange} type='text' placeholder='Enter Destination City' />
                    </div>
                    <div className='input-lable-container'>
                        <label>Journey date :-</label>
                        <input onChange={handleOnJourneyDateChange} type='date' placeholder='Enter Depart date' min={moment().format("YYYY-MM-DD")} />
                    </div>
                    {!oneWayToggle ?
                        <div className='input-lable-container'>
                            <label>Return date :-</label>
                            <input onChange={handleOnReturnDateChange} type='date' placeholder='Enter Depart date' min={moment().format("YYYY-MM-DD")} />
                        </div>
                        : null
                    }
                    <div className='input-lable-container'>
                        <label>Passengers :-</label>
                        <input type='number' placeholder='Passengers' />
                    </div>
                    
                </div>
                <div className='search-btn'>
                    <button onClick={() => { handleOnSearchBtnClick() }}>Search</button>
                </div>
        </div>
    )
}

export default Filter; 
