import { LOAD_SELECTED_DATA, LOAD_ANIME_LIST } from "../../actions";


const initialState = { id: undefined, nome: "", temporada: 0, possuiManga: false }



const animeSelectedReducer = (state = initialState, action) => {

  switch (action.type) {

    case LOAD_SELECTED_DATA:
      if(action.payload){
        return {
          ...state,
          animeSelected: action.payload
        }
      } else {
        return {
          ...state,
          animeSelected: initialState
        }
      }

    default:
      return state;
  }
};

export default animeSelectedReducer;