import { combineReducers } from "redux";
import showLoginReducer from "./login_logout";
import  animeListReducer  from "./anime/listAnimeReducer";
import  animeSelectedReducer  from "./anime/animeSelectedReducer";
import userEntityListReducer from "./userEntity/userEntityListReducer";
import userEntitySelectedReducer from "./userEntity/userEntitySelectedReducer";
import accessProfileListReducer from "./accessProfile/accessProfileListReducer";
import accessProfileSelectedReducer from "./accessProfile/accessProfileSelectedReducer";

export default combineReducers({
    showLoginReducer: showLoginReducer,
    animeListReducer: animeListReducer,
    animeSelectedReducer: animeSelectedReducer,
    userEntityListReducer: userEntityListReducer,
    userEntitySelectedReducer: userEntitySelectedReducer,
    accessProfileListReducer: accessProfileListReducer,
    accessProfileSelectedReducer: accessProfileSelectedReducer
});