import React from 'react';
import './BoardingDetails.css';

const BoardingDetails = (props) => {


    // const { flight_date } = props;


    //Data Coming from filter Component....
    const { oneWayToggle } = props;
    const { searchBtnClicked } = props;
    const { destinationCity } = props;
    const { originCity } = props;
    const {journeyDate} = props;
    const {returnDate} = props;



    return (

        oneWayToggle
            ?
            <div className='container'>
                <div className='root'>
              <h1>{searchBtnClicked ? originCity : 'From'}  &#62; {searchBtnClicked ? destinationCity : 'To'}</h1>
                </div>
                <div className='dates'>
                    <p>Journey Date :-  {searchBtnClicked?journeyDate:null}</p>

                </div>
            </div>
            :
            <div style={{ display: 'flex', flexDirection: "row", width: 1150 }}>
                <div className='container'>
                    <div className='root'>
                        <h1>{searchBtnClicked ? originCity : 'From'} &#62; {searchBtnClicked ? destinationCity : 'To'}</h1>
                    </div>
                    <div className='dates'>
                        <p>Journey Date :-  {searchBtnClicked?journeyDate:null}</p>
                    </div>
                </div>
                <div className='container'>
                    <div className='root'>
                        <h1>{searchBtnClicked ? destinationCity : 'From'} &#62; {searchBtnClicked ? originCity : 'To'}</h1>
                    </div>
                    <div className='dates'>
                        <p>Return Date :-  {searchBtnClicked?returnDate:null}</p>
                    </div>
                </div>
            </div>

    )
}

export default BoardingDetails;