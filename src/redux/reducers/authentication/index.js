import {createReducer} from "../../utility"
import {ERROR, LOADED, LOADING} from "../../middleware/actions"
import {SET_REDIRECT, LOGIN, LOGOUT} from "./actions"

const initialState = {
  login: {
    data: null,
    error: null,
    loader: false,
  },
  redirectUrl: "/",
}

// Reducer
const reducers = {
  [SET_REDIRECT](state, payload) {
    return {...state, redirectUrl: payload}
  },

  [LOGIN + LOADING](state) {
    return {
      ...state,
      login: {
        ...state.login,
        data: null,
        error: null,
        loader: true,
      },
    }
  },

  [LOGIN + LOADED](state, payload) {
    return {
      ...state,
      login: {
        ...state.login,
        data: payload,
        loader: false,
      },
    }
  },

  [LOGIN + ERROR](state, payload) {
    return {
      ...state,
      login: {
        ...state.login,
        data: null,
        loader: false,
        error: payload,
      },
    }
  },

  [LOGOUT + LOADED]() {
    return initialState
  },
}

export default createReducer(reducers, initialState)
