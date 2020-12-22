import React from 'react'
import {connect} from 'react-redux'
import {fetchCountries} from '../redux'

const CountryListContainer = () => {
  return (
    <div>
      <h1>CountryList</h1>
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
