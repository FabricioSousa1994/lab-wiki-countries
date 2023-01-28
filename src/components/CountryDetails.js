import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountryDetails(props) {
  const { alpha3Code } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const countryDetail = props.countries.find(
      (country) => alpha3Code === country.alpha3Code
    );
    setDetails(countryDetail);
  }, [alpha3Code]);

  if (!details) {
    return <p>Country not found</p>;
  }
  return (
    <div key={details._id}>
      <h3>{details.name.common}</h3>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${details.alpha2Code.toLowerCase()}.png`}/>
      <p>{details.area}</p>
      <ul>
        Borders:
        {details.borders.length > 0 ? (
          details.borders.map((item) => {
            return (
              <li key={item} style={{ listStyle: 'none' }}>
                <ul>
                  <Link to={`/countries/${item}`}>{item}</Link>
                </ul>
              </li>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      
      

    </div>
  );
}

export default CountryDetails;
