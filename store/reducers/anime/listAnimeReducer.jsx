import { LOAD_ANIME_LIST } from "../../actions";


const initialState = { content: [], empty: undefined, first: undefined, last: undefined, number: undefined, numberOfElements: undefined, size: undefined, totalElements: undefined, totalPages: undefined }


const listAnimeReducer = (state = initialState, action) => {

  switch (action.type) {

    case LOAD_ANIME_LIST:
      if (action.payload) {
        return {
          ...state,
          animeDataPage: action.payload
        }
      } else {
        return {
          animeDataPage: initialState
        }
      }
    default:
      return state;
  }
};

export default listAnimeReducer;