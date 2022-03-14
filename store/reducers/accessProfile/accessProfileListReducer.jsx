import { LOAD_ACCESS_PROFILE_LIST } from "../../actions";


const initialState = { content: [], empty: undefined, first: undefined, last: undefined, number: undefined, numberOfElements: undefined, size: undefined, totalElements: undefined, totalPages: undefined }


const accessProfileListReducer = (state = initialState, action) => {

  switch (action.type) {

    case LOAD_ACCESS_PROFILE_LIST:
      if (action.payload) {
        return {
          ...state,
          accessProfilePage: action.payload
        }
      } else {
        return {
          accessProfilePage: initialState
        }
      }
    default:
      return state;
  }
};

export default accessProfileListReducer;