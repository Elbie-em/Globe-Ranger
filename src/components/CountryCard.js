import React from 'react'
import {Link} from 'react-router-dom'
import { numberWithCommas } from '../dataOperations/conversions'

const CountryCard = ({country}) => {
  return (
    <div className="card mt-5" style={{width: 350}}>
      <img src={country.flag} className="flag-sm" alt="..."/>
        <div className="card-body">
          <h3 className="card-title">{country.name}</h3>
          <p>Population: {numberWithCommas(country.population)}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
          <Link className="btn btn-info" to={`/country/${country.name}`}>View Details</Link>
        </div>
    </div>
  )
}

export default CountryCard
