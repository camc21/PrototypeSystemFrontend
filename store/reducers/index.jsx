import { combineReducers } from "redux";
import showLoginLogoutReducer from "./login_logout";

export default combineReducers({
    showLoginLogoutReducer: showLoginLogoutReducer,
});