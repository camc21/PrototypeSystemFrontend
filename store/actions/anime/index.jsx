import {
   LOAD_SELECTED_DATA,
   LOAD_ANIME_LIST,
  } from "./../../actions"



export const loadSelectedDataAction = payload => ({
  type: LOAD_SELECTED_DATA,
  payload
});

export const loadAnimeListAction = payload => ({
  type: LOAD_ANIME_LIST,
  payload
})