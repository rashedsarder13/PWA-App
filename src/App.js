import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if(e.key==='Enter'){
      const data = await fetchWeather(query)
      setWeather(data);
      setQuery('');
    }
  }
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder='Search...'
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        onKeyDown={search}
      />
      {
        weather.main && (
          <div className='city'>
            <h2 className='city-name'>
              <span>{weather.name}</span>
            </h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
