import { combineReducers } from "redux";
import showLoginReducer from "./login_logout";
import  animeListReducer  from "./anime/listAnimeReducer";
import  animeSelectedReducer  from "./anime/animeSelectedReducer";

export default combineReducers({
    showLoginReducer: showLoginReducer,
    animeListReducer: animeListReducer,
    animeSelectedReducer: animeSelectedReducer
});