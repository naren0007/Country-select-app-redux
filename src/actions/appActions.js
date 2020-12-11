import {
    ADD_STATE,
    REMOVE_STATE
  } from "../constant/type";
  
  // add state
  export const addState = (state) => ({
    type: ADD_STATE,
    payload: state,
  });

  // remove state
  export const removeState = (state) => ({
    type: REMOVE_STATE,
    payload: state,
  });