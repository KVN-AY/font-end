import React, { useState} from 'react';
import './App.css'
import dotenv from 'dotenv';
dotenv.config();

function App() {
  
  const apikey = process.env.API_KEY;
 
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")  


  const getWeather = async (event) => {
    if (event.key == "Enter")
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apikey}`).then(
      response =>response.json()
    ).then(
      data => {
        setWeatherData(data)
        setCity("")
      }
    )
  }

    return (
      <div className="container">
        <input 
        className="input" 
        placeholder="Location..."
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
        />

        {typeof weatherData.main === 'undefined' ? (
          <div>
            <p>Welcome to the Weather Wizrd!</p>
          </div>
        ):(
          <div className='weather-data'>
            <p className='city'>{weatherData.name}</p>
            <p className='temp'>{Math.round(weatherData.main.temp)}&#8457;</p>
            <p className='weather'>{weatherData.weather[0].main}</p>
          </div>
        )}

        {weatherData.cod ==="404" ? (
          <p>This City doesn't exist</p>
        ) :(
          <>
          </>

        )}

      </div>
    );
  }


export default App;
