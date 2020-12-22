import axios from "axios";
import { CHANGE_REGION_REQUEST,CHANGE_REGION_FAILURE,CHANGE_REGION_SUCCESS} from "./regionTypes";

export const changeRegionRequest = () => {
  return {
    type: CHANGE_REGION_REQUEST
  }
}

export const changeRegionSuccess = region => {
  return  {
    type: CHANGE_REGION_SUCCESS,
    payload: region
  }
}

export const changeRegionFailure = error => {
  return {
    type: CHANGE_REGION_FAILURE,
    payload: error
  }
}

export const changeRegion = (region) => {
  return (dispatch) => {
    dispatch(changeRegionRequest())
    axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
    .then(response => {
      const regionData = response.data
      dispatch(changeRegionSuccess(regionData))
    }).catch(error => {
      const errorMsg = error.message
      dispatch(changeRegionFailure(errorMsg))
    })
  }
}