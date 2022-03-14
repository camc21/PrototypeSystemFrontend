import {
  LOAD_USER_ENTITY_SELECTED,
  LOAD_USER_ENTITY_LIST,
  } from ".."



export const loadUserEntitySelectedAction = payload => ({
  type: LOAD_USER_ENTITY_SELECTED,
  payload
});

export const loadUserEntityListAction = payload => ({
  type: LOAD_USER_ENTITY_LIST,
  payload
})