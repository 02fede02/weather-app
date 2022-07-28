import React from 'react';
const {DateTime} = require('luxon')

const ForcastHourly = ({ modalForecast }) => {
    return (
        <>
            <p>Forecast Hourly</p>
            <hr />
            <div className='forecast-daily'>
                {
                    modalForecast.hourley.map( (element, index) => (
                        <div className='hours-container' key={index}>
                            <p className='all-to-white'>{DateTime.fromSeconds(element.dt).hour} hs</p>  
                            <img className='forecast-icon' src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`} width="80" height="80" alt="" />
                            <p className='all-to-white'>{Math.round(Number(element.feels_like) - 273)}°</p>
                        </div>
                    ) )
                }
            </div>
        </>
    )
}

export default ForcastHourly;
