import {createReducer} from "../../utility"
import {SELECT_THEME} from "./actions"
import constants from "../../../constants"

const {themeOptions} = constants

const initialState = {
  themes: {
    ...themeOptions,
  },
  default: null,
}

// Reducer
const reducers = {
  [SELECT_THEME](state, payload) {
    return {
      ...state,
      default: payload,
    }
  },
}

export default createReducer(reducers, initialState)