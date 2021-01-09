import React from 'react';
import PropTypes from 'prop-types';
import numberWithCommas from '../dataOperations/conversions';

const CountryDetail = ({ countryDetails }) => (
  <div className="text-center">
    <h1 className="text-white brand-font">{countryDetails.name}</h1>
    <br />
    <img src={countryDetails.flag} className="flag-lg mx-auto" alt="..." />
    $
    <div className="row text-white w-75 mx-auto">
      <div className="align-left col-sm-12 col-md-6 p-5">
        <h4>
          Native Name:
          {countryDetails.nativeName}
        </h4>
        <h4>
          {' '}
          Capital:
          {countryDetails.capital}
        </h4>
        <h4>
          Population:
          {numberWithCommas(countryDetails.population)}
        </h4>
        <h4>
          Region:
          {countryDetails.region}
        </h4>
      </div>
      <div className="align-left col-sm-12 col-md-6 p-5">
        <h4>
          Sub Region:
          {countryDetails.subRegion ? countryDetails.subRegion : 'N/A' }
        </h4>
        <h4>
          Top Level Domain:
          {countryDetails.topLevelDomain}
        </h4>
        <h4>
          Currency:
          {countryDetails.currencies[0].name}
          {' '}
          -
          {countryDetails.currencies[0].symbol}
        </h4>
        <h4>
          Language:
          {countryDetails.languages[0].name}
        </h4>
      </div>
    </div>
  </div>

);

CountryDetail.propTypes = {
  countryDetails: PropTypes.instanceOf(Object).isRequired,
};

export default CountryDetail;
