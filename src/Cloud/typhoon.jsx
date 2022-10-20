import React, { useState} from 'react';
import './App.css'
function App() {
  
  const apiKey ='4c511d5a55a6252662933e49314d8768'
  const [weatherData, setWeatherData] = useState([{}])

  
    return (
      <div className="container">
        <input className="input" placeholder="Location..."/>
      </div>
    );
  }


export default App;