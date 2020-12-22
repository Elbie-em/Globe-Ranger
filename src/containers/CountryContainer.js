import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchCountry} from '../redux'
import _ from "lodash"
import CountryDetail from '../components/CountryDetail'
import {Link} from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'

 const CountryContainer  = ({match,country,fetchCountry,}) => {
   const countryName = match.params.country
   useEffect(() => {
    fetchCountry(countryName)
  },[fetchCountry,countryName])

  const showData = () => {
    if(!_.isEmpty(country.data[0])){
      const countryDetails = country.data[0]
      console.log(countryDetails.currencies[0].symbol)
      return <CountryDetail countryDetails={countryDetails}/>
    }

    if(country.loading){
      return <LoadingSpinner />
    }
    if(country.errorMsg !== "") {
    return <p>{country.errorMsg}</p>
    }

    return <p className="text-white">Error Loading Country Details</p>

  }

  return (
    <div className="mt-3 container-fluid p-5">
      <Link className="btn btn-danger" to={"/"}>Back to Home</Link>
      <br />
      <br />
      {showData()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    country: state.country
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountry : (name) => dispatch(fetchCountry(name))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountryContainer)
