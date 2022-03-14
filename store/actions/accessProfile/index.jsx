import {
  LOAD_ACCESS_PROFILE_SELECTED,
  LOAD_ACCESS_PROFILE_LIST,
  } from ".."



export const loadAccessProfileSelectedAction = payload => ({
  type: LOAD_ACCESS_PROFILE_SELECTED,
  payload
});

export const loadAccessProfileListAction = payload => ({
  type: LOAD_ACCESS_PROFILE_LIST,
  payload
})