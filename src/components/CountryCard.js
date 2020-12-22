import React from 'react'
import { Link } from 'react-router-dom'
import { numberWithCommas } from '../dataOperations/conversions'
import PropTypes from 'prop-types';

const CountryCard = ({ country }) => {
  return (
    <div className="mx-auto">
      <div className="card m-3 text-white bg-dark" style={{ width: 320 }}>
        <img src={country.flag} className="flag-sm rounded" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{country.name}</h3>
          <p>Population: {numberWithCommas(country.population)}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
          <Link className="btn btn-info" to={`/country/${country.name}`}>View Details</Link>
        </div>
      </div>
    </div>
  )
}

CountryCard.propTypes = {
  country: PropTypes.object,
}

export default CountryCard
