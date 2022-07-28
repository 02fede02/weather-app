import React from 'react';
import '../styles/Cards.css';
import Card from './Card.jsx';
import ModalCard from './ModalCard';

export default function Cards({
  cities,
  cityModal,
  modal,
  handleCloseCard,
  handleClickCard,
  handleCloseModal,
  systemTime,
  modalForecast,
}) {
  if (Array.isArray(cities) && cities.length) {
    return (
      <div>
        <div className='cards-container'>
          {cities.map((city) => (
            <Card
              high={Math.round(city.main.temp_max)}
              low={Math.round(city.main.temp_min)}
              name={city.name}
              img={city.weather[0].icon}
              key={city.id}
              id={city.id}
              lat={city.coord.lat}
              lon={city.coord.lon}
              handleClickCard={() => handleClickCard((city))}
              handleCloseCard={() => handleCloseCard(city.id)}
            />
          ))}
        </div>
        {/* Modal */}
        {modal && (
          <ModalCard
            modal={modal}
            cityModal={cityModal}
            systemTime={systemTime}
            modalForecast={modalForecast}
            handleCloseModal={handleCloseModal}
          />
        )}
      </div>
    );
  }   
   else {
    return <div className='no-cities-container'>No cities</div>
  }
}
