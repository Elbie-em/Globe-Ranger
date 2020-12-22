import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchCountry} from '../redux'
import _ from "lodash"

 const CountryContainer  = ({match,country,fetchCountry,}) => {
   const countryName = match.params.country
   useEffect(() => {
    fetchCountry(countryName)
  },[])

  const showData = () => {
    if(!_.isEmpty(country.data[0])){
      return <h1 className="text-white">Data found</h1>
    }

    if(country.loading){
      return <p className="text-white">Loading....</p>
    }
    if(country.errorMsg !== "") {
    return <p>{country.errorMsg}</p>
    }

    return <p className="text-white">Error Loading Country Details</p>

  }

  return (
    <div>
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
