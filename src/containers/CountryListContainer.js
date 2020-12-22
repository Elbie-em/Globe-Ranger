import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import CountryCard from '../components/CountryCard'
import {fetchCountries} from '../redux'

const CountryListContainer = ({countryListData, fetchCountries}) => {

  useEffect(() => {
    fetchCountries()
  },[])

  const showCountries = () => {
    return countryListData.loading ? <h2>Loading...</h2> : countryListData.errorMsg ? <h2>{countryListData.errorMsg}</h2> : (
      <div>
        {console.log(countryListData.data)}
        {
          countryListData.data.map(country => <CountryCard country={country} />)
        }
      </div>
    )
  }

  return (
    <div className="countryList p-5">
      {/* {showCountries()} */}
      {
        countryListData.data.map(country => <CountryCard country={country} />)
      }
    </div>
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
