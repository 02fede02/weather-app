import React, { } from 'react'
import '../styles/ModalCard.css'
import ForcastHourly from './ForcastHourly'
import ForecastDaily from './ForecastDaily'
import { TbTemperature } from 'react-icons/tb'
import { WiHumidity } from 'react-icons/wi'
import { BsWind } from 'react-icons/bs'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'

const ModalCard = ({handleCloseModal, cityModal, modal, modalForecast}) => {
    return (
    <div className={`modal ${modal && "is-open"}`} onClick={handleCloseModal}>
        <div className='modal-container' onClick={handleCloseModal}>
          <div id='closeIcon' className='modal-close'>
          	<button onClick={handleCloseModal}></button>
          </div>
          <div className='card-body' >
            <h3 className='card-title'>{cityModal.name}</h3>
            <img src={`http://openweathermap.org/img/wn/${cityModal.weather[0].icon}@2x.png`} width='60' height='60' alt='weather icon' />
          <div className='temperature'>
            <div className='low-container'>
              <p>Low</p>
              <p className='all-to-white'><AiOutlineArrowDown />{Math.round(cityModal.main.temp_min)}°</p>
            </div>
            <div className='high-container'>
              <p>High</p>
              <p className='all-to-white'><AiOutlineArrowUp />{Math.round(cityModal.main.temp_max)}° </p>
            </div>
          </div>
          <hr />
          <div className='extrainfo-container'>
            <div className='Real feel'>
              <p>Feels-like</p>
              <p className='all-to-white'><TbTemperature /> {Math.round(cityModal.main.feels_like)}°</p>
            </div>
          <div className='humidity'>
              <p>Humidity</p>
              <p className='all-to-white'><WiHumidity /> {cityModal.main.humidity}%</p>
          </div>
            <div className='wind-speed'>
              <p>Wind</p>
              <p className='all-to-white'><BsWind /> {cityModal.wind.speed} km/h</p>
            </div>
          </div>
        </div>
        <ForcastHourly modalForecast={modalForecast} />
        <ForecastDaily modalForecast={modalForecast} />
      </div>
    </div>
    );
}

export default ModalCard;
