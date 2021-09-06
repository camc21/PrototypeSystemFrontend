import { combineReducers } from "redux";
import showLoginReducer from "./login_logout";

export default combineReducers({
    showLoginReducer: showLoginReducer,
});