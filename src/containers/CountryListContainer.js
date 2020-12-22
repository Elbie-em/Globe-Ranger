import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import CountryCard from '../components/CountryCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { changeRegion, fetchCountries } from '../redux';
import RegionFilter from '../components/RegionFilter';

const CountryListContainer = ({ countryListData, fetchCountries, changeRegion }) => {
  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const handleFilterChange = value => {
    if (value === 'All Countries') {
      window.location.reload(true);
    } else {
      changeRegion(value);
    }
  };

  const showCountries = () => {
    if (!_.isEmpty(countryListData.data)) {
      return (
        <>
          <div className="country-list p-5">
            {
              countryListData.data.map(country => <CountryCard key={country.name} country={country} />)// eslint-disable-line max-len
            }
          </div>
        </>
      );
    }

    if (countryListData.loading) {
      return <LoadingSpinner />;
    }
    if (countryListData.errorMsg !== '') {
      return <p className="text-danger mt-5">{countryListData.errorMsg}</p>;
    }

    return <p className="text-danger mt-5">Error Loading Country List!</p>;
  };

  return (
    <>
      <RegionFilter handleChange={handleFilterChange} />
      {showCountries()}
    </>
  );
};

const mapStateToProps = state => {
  if (state.region.data.length > 0) {
    return {
      countryListData: state.region,
    };
  }
  return {
    countryListData: state.countryList,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCountries: () => dispatch(fetchCountries()),
  changeRegion: region => dispatch(changeRegion(region)),
});

CountryListContainer.propTypes = {
  countryListData: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCountries: PropTypes.func.isRequired,
  changeRegion: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryListContainer);
