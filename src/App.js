import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import axios from "axios";
import Loader from "./components/Loader";
const { DateTime } = require('luxon')

function App() {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [modal, setModal] = useState(false);
  const [cityModal, setCityModal] = useState("");
  const [systemTime, setSystemTime] = useState('');
  const [modalForecast, setModalForecast] = useState();
  const [loading, setLoading] = useState(false)
  const [inputError, setInputError] = useState(false)


  useEffect(() => {
    setSystemTime(DateTime.now().toObject())
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      setInputError(false)
    }, 6000)
  },[inputError])

  setTimeout(() => {
    setSystemTime(DateTime.now().toObject())
  }, 60000);

  const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)
  const validateInput = (input) => {
    const regName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if (!regName.test(input)) {
      setInputError('Please type a validate city name');
      setCity('');
    } else return true;
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchInput = (e) => {
    if (e !== undefined) e.preventDefault();
    if (validateInput(city)) {
      handleSearch(city);
      setCity('');
    }
  };

  const handleCloseCard = (id) => {
    setCities((city) => city.filter((city) => city.id !== id));
  };

  const handleSearch = (city) => {
    setLoading(true)
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        let repeatCity = false;
        cities.forEach((city) =>
          city.id === response.data.id
            ? (repeatCity = true)
            : (repeatCity = false)
        );
        repeatCity
          ? setInputError('City recentley added')
          : setCities([...cities, response.data]);
      })
      .catch((error) => setInputError('City not found'));
      setLoading(false)
  };

  const handleClickCard = ( async (city)  => {
    setCityModal(city);
    setLoading(true)
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${API_KEY}`)
    setModalForecast({
      daily: response.data.daily.slice(1, 6),
       hourley: response.data.hourly.slice(1, 6)
    })
    setLoading(false)
    setModal(true);
  });

  const handleCloseModal = () => {
    setModal(false);
    setCityModal({});
  };

  return (
    <div className='App'>
      <div className='time'>{DateTime.now().toLocaleString(DateTime.DATE_MED)} | Time {systemTime.hour}:{systemTime.minute < 10 ? `0${systemTime.minute}` : systemTime.minute}</div>
     <div className='nav-inputError-container'>
      <Nav
        city={city}
        handleSearchInput={handleSearchInput}
        handleChange={handleChange}
      />
      <p className='input-error-container'>{inputError}</p>
     </div>
     <div className='cards-loader-container'>
      <div className={`${!loading && 'loader-hide'}`}>
        <Loader />
      </div>
      <Cards
        cities={cities}
        handleCloseModal={handleCloseModal}
        handleCloseCard={handleCloseCard}
        handleClickCard={handleClickCard}
        cityModal={cityModal}
        modal={modal}
        systemTime={systemTime}
        modalForecast={modalForecast}
        inputError={inputError}
      />
      </div>
    </div>
  );
}

export default App; 