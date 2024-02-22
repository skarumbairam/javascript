/**
 *
 * Async action loading data externally and display
 */

const redux = require("redux");
const createStore = require("redux").legacy_createStore;
const applyMiddleware = redux.applyMiddleware;
const ThunkMiddleware = require("redux-thunk").thunk;
const axios = require("axios");

/*
import redux, { legacy_createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import axios from "axios";
*/

//1. InitialState

const initialState = {
  loading: true,
  data: [],
  errro: "",
};

// 2 Action & Action Creators

const FETCH_USERES_REQUEST = "FETCH_USERES_REQUEST";
const FETCH_USERES_SUCCESS = "FETCH_USERES_SUCCESS";
const FETCH_USERES_FAIL = "FETCH_USERES_FAIL";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERES_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERES_SUCCESS,
    payload: users,
  };
};

const fetchUsersFail = (error) => {
  return {
    type: FETCH_USERES_FAIL,
    payload: error,
  };
};

// 3 Reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERES_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case FETCH_USERES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_USERES_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// fetch User data from API

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        console.log("response", response.data);
        // dispatch(fetchUsersRequest());
      })
      .catch((error) => {
        dispatch(fetchUsersFail(error));
      });
  };
};
// Store
const store = createStore(reducer, applyMiddleware(ThunkMiddleware));
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(fetchUsers());
unsubscribe();
