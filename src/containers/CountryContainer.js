import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCountry } from '../redux';
import CountryDetail from '../components/CountryDetail';
import LoadingSpinner from '../components/LoadingSpinner';

const CountryContainer = ({ match, country, fetchCountry }) => {
  const countryName = match.params.country;
  useEffect(() => {
    fetchCountry(countryName);
  }, [fetchCountry, countryName]);

  const showCountry = () => {
    if (!_.isEmpty(country.data[0])) {
      const countryDetails = country.data[0];
      return <CountryDetail countryDetails={countryDetails} />;
    }

    if (country.loading) {
      return <LoadingSpinner />;
    }
    if (country.errorMsg !== '') {
      return <p className="text-danger mt-5">{country.errorMsg}</p>;
    }

    return <p className="text-danger mt-5">Error Loading Country Details!</p>;
  };

  return (
    <div className="mt-3 container-fluid p-5">
      <Link className="btn btn-danger" to="/">Back to Home</Link>
      <br />
      <br />
      {showCountry()}
    </div>
  );
};

const mapStateToProps = state => ({
  country: state.country,
});

const mapDispatchToProps = dispatch => ({
  fetchCountry: name => dispatch(fetchCountry(name)),
});

CountryContainer.propTypes = {
  match: PropTypes.string.isRequired,
  country: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCountry: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryContainer);
