import { LOAD_USER_ENTITY_LIST } from "../../actions";


const initialState = { content: [], empty: undefined, first: undefined, last: undefined, number: undefined, numberOfElements: undefined, size: undefined, totalElements: undefined, totalPages: undefined }


const userEntityListReducer = (state = initialState, action) => {

  switch (action.type) {

    case LOAD_USER_ENTITY_LIST:
      if (action.payload) {
        return {
          ...state,
          userEntityPage: action.payload
        }
      } else {
        return {
          userEntityPage: initialState
        }
      }
    default:
      return state;
  }
};

export default userEntityListReducer;