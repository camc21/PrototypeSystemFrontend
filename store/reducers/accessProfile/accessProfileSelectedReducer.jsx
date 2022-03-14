import { LOAD_ACCESS_PROFILE_SELECTED } from "../../actions";


const initialState = { id: undefined, name: "", description: "" }



const accessprofileSelectedReducer = (state = initialState, action) => {

  switch (action.type) {

    case LOAD_ACCESS_PROFILE_SELECTED:
      if(action.payload){
        return {
          ...state,
          accessProfileSelected: action.payload
        }
      } else {
        return {
          ...state,
          accessProfileSelected: initialState
        }
      }

    default:
      return state;
  }
};

export default accessprofileSelectedReducer;