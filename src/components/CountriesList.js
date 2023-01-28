import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Countries(props) {
  return (
    <div>
        {props.countries.map((country) =>  {
            return (
                <>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
                <h3><Link to={`/countries/${country.alpha3Code}`}>{country.name.common}</Link></h3>

                </>
            )
        })}
    </div>
  )
}

export default Countries;


