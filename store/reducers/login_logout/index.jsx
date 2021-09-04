import { HYDRATE } from "next-redux-wrapper";
import { SHOW_BUTTON_LOGIN_LOGOUT } from "../../actions";

const initialState = {
  showLoginLogout: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case SHOW_BUTTON_LOGIN_LOGOUT:
        return {
          ...state,
          showLoginLogout: action.payload
        }
    default:
      return state;
  }
};

export default reducer;