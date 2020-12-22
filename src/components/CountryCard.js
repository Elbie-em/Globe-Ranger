import React from 'react'

const CountryCard = ({country}) => {
  return (
    <div className="card mt-5" style={{width: 350}}>
      <img src={country.flag} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h3 className="card-title">{country.name}</h3>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>
    </div>
  )
}

export default CountryCard
