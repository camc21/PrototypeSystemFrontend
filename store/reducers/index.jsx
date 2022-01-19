import { combineReducers } from "redux";
import showLoginReducer from "./login_logout";
import loadSelectedDataReducer from "./anime";

export default combineReducers({
    showLoginReducer: showLoginReducer,
    loadSelectedDataReducer: loadSelectedDataReducer
});