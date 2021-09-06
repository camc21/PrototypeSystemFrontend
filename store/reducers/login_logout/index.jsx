import { HYDRATE } from "next-redux-wrapper";
import { SHOW_BUTTON_LOGIN } from "../../actions";

const initialState = {
  showLogin: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case SHOW_BUTTON_LOGIN:
        return {
          ...state,
          showLogin: action.payload
        }
    default:
      return state;
  }
};

export default reducer;