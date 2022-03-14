import { LOAD_USER_ENTITY_SELECTED } from "../../actions";


const initialState = { id: undefined, name: "", email: "" }



const userEntitySelectedReducer = (state = initialState, action) => {

  switch (action.type) {

    case LOAD_USER_ENTITY_SELECTED:
      if(action.payload){
        return {
          ...state,
          userEntitySelected: action.payload
        }
      } else {
        return {
          ...state,
          userEntitySelected: initialState
        }
      }

    default:
      return state;
  }
};

export default userEntitySelectedReducer;