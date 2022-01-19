import { HYDRATE } from "next-redux-wrapper";
import { LOAD_SELECTED_DATA } from "../../actions";

const initialState = {
  animeSelected: {id: null, nome: null, temporada: null, possuiManga: null},
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case LOAD_SELECTED_DATA:
        return {
          ...state,
          animeSelected: action.payload
        }
    default:
      return state;
  }
};

export default reducer;