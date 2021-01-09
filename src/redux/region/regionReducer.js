import { CHANGE_REGION_REQUEST, CHANGE_REGION_FAILURE, CHANGE_REGION_SUCCESS } from './regionTypes';

const initialState = {
  loading: true,
  data: [],
  errorMsg: '',
};

const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_REGION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_REGION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: '',
      };
    case CHANGE_REGION_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        errorMsg: action.payload,
      };
    default: return state;
  }
};

export default regionReducer;
