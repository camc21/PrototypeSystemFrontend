import { HYDRATE } from "next-redux-wrapper";
import { SHOW_BUTTON_LOGIN } from "../../actions";

const initialState = {
  showLogin: true,
};

const showLoginReducer = (state = initialState, action) => {
  switch (action.type) {

    case SHOW_BUTTON_LOGIN:
        return {
          ...state,
          showLogin: action.payload
        }
    default:
      return state;
  }
};

export default showLoginReducer;