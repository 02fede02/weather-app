import React from 'react'
const {DateTime} = require('luxon')

export default function ForecastDaily( {modalForecast} ) {
  return (
    <>
      <p>Forcast Daily</p>
      <hr />
      <div className='forecast-daily'>
        {
          modalForecast.daily.map( (element, index) => (
            <div className='hours-container' key={index}>
              <p className='all-to-white'>
              {DateTime.fromSeconds(element.dt).weekdayShort} 
              </p>
              <img className='forecast-icon' src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`} width="80" height="80" alt="" />
              <p className='all-to-white'>{Math.round(Number(element.feels_like.day) - 273)}°</p> 
            </div>
          ))
        }
      </div>
    </>
  )
}
