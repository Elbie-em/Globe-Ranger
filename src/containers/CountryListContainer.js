import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import CountryCard from '../components/CountryCard'
import LoadingSpinner from '../components/LoadingSpinner'
import {changeRegion, fetchCountries} from '../redux'
import RegionFilter from '../components/RegionFilter'

const CountryListContainer = ({countryListData, fetchCountries, changeRegion}) => {

  useEffect(() => {
    fetchCountries()
  },[fetchCountries])

  const handleFilterChange = value => {
    if(value === 'All Countries'){
      window.location.reload(true);
    }else{
      changeRegion(value)
    }
  };

  const showCountries = () => {
    return countryListData.loading ? <LoadingSpinner /> : countryListData.errorMsg ? <h2>{countryListData.errorMsg}</h2> : (
      <>
      <div className="country-list p-5">
        {
          countryListData.data.map(country => <CountryCard key={country.name} country={country} />)
        }
      </div>
      </>
    )
  }

  return (
    <>
    <RegionFilter handleChange={handleFilterChange}/>
    {showCountries()}
    </>
  )
}

const mapStateToProps = state => {
  if(state.region.data.length > 0){
    return {
      countryListData: state.region
    }
  }else{
    return {
      countryListData: state.countryList
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountries : () => dispatch(fetchCountries()),
    changeRegion: region => dispatch(changeRegion(region))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountryListContainer)
