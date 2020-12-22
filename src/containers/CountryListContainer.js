import React from 'react'

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
    fetchCountries : () => dispatch(fetchUsers())
  }
}

export default CountryListContainer
