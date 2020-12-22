import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import CountryCard from '../components/CountryCard'
import LoadingSpinner from '../components/LoadingSpinner'
import {fetchCountries} from '../redux'

const CountryListContainer = ({countryListData, fetchCountries}) => {

  useEffect(() => {
    fetchCountries()
  },[fetchCountries])

  console.log(countryListData.data)
  const showCountries = () => {
    return countryListData.loading ? <LoadingSpinner /> : countryListData.errorMsg ? <h2>{countryListData.errorMsg}</h2> : (
      <div className="country-list p-5">
        {
          countryListData.data.map(country => <CountryCard key={country.name} country={country} />)
        }
      </div>
    )
  }

  return (
    <>
    {showCountries()}
    </>
  )
}

const mapStateToProps = state => {
  return {
    countryListData: state.countryList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountries : () => dispatch(fetchCountries())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountryListContainer)
