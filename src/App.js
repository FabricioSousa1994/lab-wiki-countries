import './App.css';
import Countries from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(response.data);
    }
    getCountries();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/countries"
          element={<Countries countries={countries} />}
        />
        <Route
          path="/countries/:alpha3Code"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
