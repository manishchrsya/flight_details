import React from 'react';
import './Filter.css'
// import moment from 'moment'; 

const Filter = (props) => {



    const {oneWayToggle, handleOneWayToggle} = props
    const{ handleOnOriginCityChange} = props
    const{ handleOnDestinationCityChange} = props
    const {handleOnJourneyDateChange}= props
    const { handleOnReturnDateChange}= props
    const{handleOnSearchBtnClick} = props


    // console.log(originCity, destinationCity);


    

    return (
        <div className='filter-body'>
            <div className='btn-container'
            >
                <button className='btn' onClick={() => handleOneWayToggle(true)}>One Way</button>
                <button className='btn' onClick={() => handleOneWayToggle(false)}>Return</button>
            </div>

            {oneWayToggle === true ?
                <div className='input-data-section'>
                    <div className='input-lable-container'>
                        <label>From :-</label>
                        <input onChange={handleOnOriginCityChange}  type='text' placeholder='Enter Origin City' />
                    </div>
                    <div className='input-lable-container'>
                        <label>To :-</label>
                        <input onChange={handleOnDestinationCityChange} type='text' placeholder='Enter Destination City' />
                    </div>
                    <div className='input-lable-container'>
                        <label>Journey date :-</label>
                        <input onChange={handleOnJourneyDateChange} type='date' placeholder='Enter Depart date' />
                    </div>
                    <div className='input-lable-container'>
                        <label>Passengers :-</label>
                        <input type='number' placeholder='Passengers' />
                    </div>
                    <button onClick={()=>{handleOnSearchBtnClick()}}>Search</button>
                </div>

                :

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
                        <input onChange={handleOnJourneyDateChange} type='date' placeholder='Enter Depart date' />
                    </div>
                    <div className='input-lable-container'>
                        <label>Return date :-</label>
                        <input onChange={ handleOnReturnDateChange} type='date' placeholder='Enter Depart date' />
                    </div>
                    <div className='input-lable-container'>
                        <label>Passengers :-</label>
                        <input type='number' placeholder='Passengers' />
                    </div>
                    <button onClick={()=>{handleOnSearchBtnClick()}} >Search</button>
                    
                </div>
            }
        </div>

    )
}

export default Filter; 
