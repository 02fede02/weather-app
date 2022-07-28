import React from 'react'
import '../styles/Card.css'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'

export default function Card({
  handleCloseCard,
  handleClickCard,
  name,
  high,
  low,
  img,
}) {
  return (
    <div className='card'>
      <div id='closeIcon'>
        <button onClick={handleCloseCard} >
        </button>
      </div>
      <div
        onClick={() => handleClickCard(name, low, high, img)}
      >
        <h3 className='card-title'>{name}</h3>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          width='80'
          height='80'
          alt='weather icon'
        />
        <div className='temperature'>
          <div className='temperature-lowhigh'>
            <p>Low</p>
            <p ><AiOutlineArrowDown />{low}°</p>
          </div>
          <div className='temperature-lowhigh'>
            <p>High</p>
            <p ><AiOutlineArrowUp />{high}°</p>
          </div>
        </div>
      </div>
    </div>
  );
}
